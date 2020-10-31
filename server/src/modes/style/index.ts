import { Position, Range } from 'vscode-languageserver-types';
import type { TextDocument } from 'vscode-languageserver-textdocument';
import {
  getCSSLanguageService,
  getSCSSLanguageService,
  getLESSLanguageService,
  LanguageService
} from 'vscode-css-languageservice';
import * as _ from 'lodash';
import * as emmet from 'vscode-emmet-helper';

import { Priority } from './emmet';
import { LanguageModelCache, getLanguageModelCache } from '../../embeddedSupport/languageModelCache';
import { LanguageMode } from '../../embeddedSupport/languageModes';
import { VueDocumentRegions, LanguageId } from '../../embeddedSupport/embeddedSupport';
import { getFileFsPath } from '../../utils/paths';
import { prettierify } from '../../utils/prettier';
import { ParserOption } from '../../utils/prettier/prettier.d';
import { NULL_HOVER } from '../nullMode';
import { VLSFormatConfig } from '../../config';

export function getCSSMode(
  workspacePath: string,
  documentRegions: LanguageModelCache<VueDocumentRegions>
): LanguageMode {
  const languageService = getCSSLanguageService();
  return getStyleMode('css', workspacePath, languageService, documentRegions);
}

export function getPostCSSMode(
  workspacePath: string,
  documentRegions: LanguageModelCache<VueDocumentRegions>
): LanguageMode {
  const languageService = getCSSLanguageService();
  return getStyleMode('postcss', workspacePath, languageService, documentRegions);
}

export function getSCSSMode(
  workspacePath: string,
  documentRegions: LanguageModelCache<VueDocumentRegions>
): LanguageMode {
  const languageService = getSCSSLanguageService();
  return getStyleMode('scss', workspacePath, languageService, documentRegions);
}
export function getLESSMode(
  workspacePath: string,
  documentRegions: LanguageModelCache<VueDocumentRegions>
): LanguageMode {
  const languageService = getLESSLanguageService();
  return getStyleMode('less', workspacePath, languageService, documentRegions);
}

function getStyleMode(
  languageId: LanguageId,
  workspacePath: string,
  languageService: LanguageService,
  documentRegions: LanguageModelCache<VueDocumentRegions>
): LanguageMode {
  const embeddedDocuments = getLanguageModelCache(10, 60, document =>
    documentRegions.refreshAndGet(document).getSingleLanguageDocument(languageId)
  );
  const stylesheets = getLanguageModelCache(10, 60, document => languageService.parseStylesheet(document));
  let config: any = {};

  return {
    getId() {
      return languageId;
    },
    configure(c) {
      languageService.configure(c && c.css);
      config = c;
    },
    async doValidation(document) {
      if (languageId === 'postcss') {
        return [];
      } else {
        const embedded = embeddedDocuments.refreshAndGet(document);
        return languageService.doValidation(embedded, stylesheets.refreshAndGet(embedded));
      }
    },
    doComplete(document, position) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      const emmetSyntax = languageId === 'postcss' ? 'css' : languageId;
      const lsCompletions = languageService.doComplete(embedded, position, stylesheets.refreshAndGet(embedded));
      const lsItems = lsCompletions
        ? _.map(lsCompletions.items, i => {
            return {
              ...i,
              sortText: Priority.Platform + i.label
            };
          })
        : [];

      const emmetCompletions = emmet.doComplete(document, position, emmetSyntax, config.emmet);
      if (!emmetCompletions) {
        return { isIncomplete: false, items: lsItems };
      } else {
        const emmetItems = emmetCompletions.items.map(i => {
          return {
            ...i,
            sortText: Priority.Emmet + i.label
          };
        });
        return {
          isIncomplete: emmetCompletions.isIncomplete,
          items: _.concat(emmetItems, lsItems)
        };
      }
    },
    doHover(document, position) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      return languageService.doHover(embedded, position, stylesheets.refreshAndGet(embedded)) || NULL_HOVER;
    },
    findDocumentHighlight(document, position) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      return languageService.findDocumentHighlights(embedded, position, stylesheets.refreshAndGet(embedded));
    },
    findDocumentSymbols(document) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      return languageService.findDocumentSymbols(embedded, stylesheets.refreshAndGet(embedded));
    },
    findDefinition(document, position) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      const definition = languageService.findDefinition(embedded, position, stylesheets.refreshAndGet(embedded));
      if (!definition) {
        return [];
      }
      return definition;
    },
    findReferences(document, position) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      return languageService.findReferences(embedded, position, stylesheets.refreshAndGet(embedded));
    },
    findDocumentColors(document) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      return languageService.findDocumentColors(embedded, stylesheets.refreshAndGet(embedded));
    },
    getFoldingRanges(document) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      return languageService.getFoldingRanges(embedded);
    },
    getColorPresentations(document, color, range) {
      const embedded = embeddedDocuments.refreshAndGet(document);
      return languageService.getColorPresentations(embedded, stylesheets.refreshAndGet(embedded), color, range);
    },
    format(document, currRange, formattingOptions) {
      if (config.vetur.format.defaultFormatter[languageId] === 'none') {
        return [];
      }

      const { value, range } = getValueAndRange(document, currRange);
      const needIndent = config.vetur.format.styleInitialIndent;
      const parserMap: { [k: string]: ParserOption } = {
        css: 'css',
        postcss: 'css',
        scss: 'scss',
        less: 'less'
      };
      return prettierify(
        value,
        getFileFsPath(document.uri),
        workspacePath,
        range,
        config.vetur.format as VLSFormatConfig,
        parserMap[languageId],
        needIndent
      );
    },
    onDocumentRemoved(document) {
      embeddedDocuments.onDocumentRemoved(document);
      stylesheets.onDocumentRemoved(document);
    },
    dispose() {
      embeddedDocuments.dispose();
      stylesheets.dispose();
    }
  };
}

function getValueAndRange(document: TextDocument, currRange: Range): { value: string; range: Range } {
  let value = document.getText();
  let range = currRange;

  if (currRange) {
    const startOffset = document.offsetAt(currRange.start);
    const endOffset = document.offsetAt(currRange.end);
    value = value.substring(startOffset, endOffset);
  } else {
    range = Range.create(Position.create(0, 0), document.positionAt(value.length));
  }
  return { value, range };
}
