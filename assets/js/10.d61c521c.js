(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{370:function(e,t,o){"use strict";o.r(t);var n=o(44),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),o("h2",{attrs:{id:"install-an-old-version-of-vetur"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-an-old-version-of-vetur"}},[e._v("#")]),e._v(" Install an old version of Vetur")]),e._v(" "),o("p",[e._v("Sometimes new releases have bugs that you want to avoid. Here's an easy way to downgrade Vetur to a working version:")]),e._v(" "),o("ul",[o("li",[e._v("Set "),o("code",[e._v('"extensions.autoUpdate": false')]),e._v(".")]),e._v(" "),o("li",[e._v("Find the version you want and download VSIX "),o("a",{attrs:{href:"https://github.com/vuejs/vetur/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vetur/blob/master/CHANGELOG.md"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Install VSIX following this guide: "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"no-syntax-highlighting-no-language-features-working"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-syntax-highlighting-no-language-features-working"}},[e._v("#")]),e._v(" No Syntax Highlighting & No Language Features working")]),e._v(" "),o("p",[e._v("The two possible causes are:")]),e._v(" "),o("ol",[o("li",[e._v("Other extensions also contribute a Vue language, and that conflicts with Vetur.")]),e._v(" "),o("li",[e._v("VS Code didn't install Vetur properly.")])]),e._v(" "),o("p",[e._v("For 1, try disabling all other Vue related extensions.")]),e._v(" "),o("p",[e._v("For 2, try these methods:")]),e._v(" "),o("ul",[o("li",[e._v("Run command: "),o("code",[e._v("Developer: Reinstall Extension")]),e._v(" for Vetur.")]),e._v(" "),o("li",[e._v("Remove Vetur in your "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_common-questions",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions folder"),o("OutboundLink")],1),e._v(" and do a clean reinstall.")]),e._v(" "),o("li",[e._v("(Windows): Try removing & reinstall Vetur with admin privilege.")]),e._v(" "),o("li",[e._v("If nothing above works, download the "),o("a",{attrs:{href:"https://github.com/vuejs/vetur/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest pre-packaged vsix file"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix",target:"_blank",rel:"noopener noreferrer"}},[e._v("install through vsix"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"vetur-crash"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-crash"}},[e._v("#")]),e._v(" Vetur Crash")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("If it says "),o("code",[e._v("cannot find module <some-module>")]),e._v(", go to Vetur's client code installation directory and run "),o("code",[e._v("yarn")]),e._v(" or "),o("code",[e._v("npm install")]),e._v(".\nThis is usually caused by VS Code not correctly updating Vetur's dependencies from version to version.\nPaths:")]),e._v(" "),o("ul",[o("li",[e._v("Win: "),o("code",[e._v("%USERPROFILE%\\.vscode\\extensions\\octref.vetur-<version>\\client")])]),e._v(" "),o("li",[e._v("Mac: "),o("code",[e._v("~/.vscode/extensions/octref.vetur-<version>/client")])]),e._v(" "),o("li",[e._v("Linux: "),o("code",[e._v("~/.vscode/extensions/octref.vetur-<version>/client")])])]),e._v(" "),o("p",[e._v("You can also try uninstall/reinstall Vetur."),o("br"),e._v("\nMore details at: "),o("a",{attrs:{href:"https://github.com/vuejs/vetur/issues/352#issuecomment-318168811",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vetur/issues/352#issuecomment-318168811"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("If it says problem related to memory and cpu, try to add a "),o("code",[e._v("jsconfig.json")]),e._v(" or "),o("code",[e._v("tsconfig.json")]),e._v(" and only include Vue-related code: "),o("a",{attrs:{href:"https://vuejs.github.io/vetur/setup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuejs.github.io/vetur/setup.html"),o("OutboundLink")],1)])])]),e._v(" "),o("h2",{attrs:{id:"vetur-can-t-recognize-components-imported-using-webpack-s-alias"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-can-t-recognize-components-imported-using-webpack-s-alias"}},[e._v("#")]),e._v(" Vetur can't recognize components imported using webpack's alias")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("You need to setup path mapping in "),o("code",[e._v("jsconfig.json")]),e._v(" or "),o("code",[e._v("tsconfig.json")]),e._v(": "),o("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.typescriptlang.org/docs/handbook/module-resolution.html"),o("OutboundLink")],1),e._v(". For example:")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Webpack")]),e._v("\nmodule"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  resolve"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    alias"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@'")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'src'")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// tsconfig.json")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"compilerOptions"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"baseUrl"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"."')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@/*"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/*"')]),e._v("\n      "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])]),e._v(" "),o("h2",{attrs:{id:"property-xxx-does-not-exist-on-type-combinedvueinstance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#property-xxx-does-not-exist-on-type-combinedvueinstance"}},[e._v("#")]),e._v(" "),o("code",[e._v("Property 'xxx' does not exist on type 'CombinedVueInstance'")])]),e._v(" "),o("p",[e._v("If you are getting a lot of "),o("code",[e._v("Property 'xxx' does not exist on type 'CombinedVueInstance'")]),e._v(" errors, it's an issue with Vue's typing and TypeScript.")]),e._v(" "),o("p",[e._v("Related issues: "),o("a",{attrs:{href:"https://github.com/vuejs/vue/issues/8721",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuejs/vue#8721"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/vuejs/vue/issues/9873",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuejs/vue#9873"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/microsoft/TypeScript/issues/30854",target:"_blank",rel:"noopener noreferrer"}},[e._v("microsoft/TypeScript#30854"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("You can work around it by:")]),e._v(" "),o("ul",[o("li",[e._v("Annotating return type for each computed property, by either "),o("a",{attrs:{href:"https://github.com/vuejs/vetur/issues/1707#issuecomment-686851677",target:"_blank",rel:"noopener noreferrer"}},[e._v("adding JSDoc"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://vuejs.org/v2/guide/typescript.html#Annotating-Return-Types",target:"_blank",rel:"noopener noreferrer"}},[e._v("TS types"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Setting "),o("code",[e._v("vetur.validation.interpolation: false")]),e._v(". You'll not get any template error checking.")]),e._v(" "),o("li",[e._v("Downgrading TS to a version before 3.4 and enabling "),o("code",[e._v("vetur.useWorkspaceDependencies")]),e._v(". You'll not get support for new TS syntaxes, such as optional chaining.")]),e._v(" "),o("li",[e._v("Use "),o("a",{attrs:{href:"https://composition-api.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composition API"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"template-interpolation-auto-completion-does-not-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#template-interpolation-auto-completion-does-not-work"}},[e._v("#")]),e._v(" Template Interpolation auto completion does not work")]),e._v(" "),o("p",[e._v("You are running into the same issue as above — not typing return type of "),o("code",[e._v("computed")]),e._v(". Please add "),o("a",{attrs:{href:"https://github.com/vuejs/vetur/issues/1707#issuecomment-686851677",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSDoc"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://vuejs.org/v2/guide/typescript.html#Annotating-Return-Types",target:"_blank",rel:"noopener noreferrer"}},[e._v("TS types"),o("OutboundLink")],1),e._v(" for computed properties.")]),e._v(" "),o("h2",{attrs:{id:"vetur-cannot-recognize-my-vue-component-import-such-as-import-comp-from-comp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-cannot-recognize-my-vue-component-import-such-as-import-comp-from-comp"}},[e._v("#")]),e._v(" Vetur cannot recognize my Vue component import, such as "),o("code",[e._v("import Comp from './comp'")])]),e._v(" "),o("ul",[o("li",[e._v("You need to add "),o("code",[e._v(".vue")]),e._v(" extension when importing SFC.")])]),e._v(" "),o("p",[e._v("More details at: "),o("a",{attrs:{href:"https://github.com/vuejs/vetur/issues/423#issuecomment-340235722",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vetur/issues/423#issuecomment-340235722"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"vue-file-cannot-be-imported-in-ts-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vue-file-cannot-be-imported-in-ts-file"}},[e._v("#")]),e._v(" .vue file cannot be imported in TS file")]),e._v(" "),o("p",[e._v("You need to add "),o("code",[e._v("declare module '*.vue'")]),e._v(" in your dts files: "),o("a",{attrs:{href:"https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"how-to-build-and-install-from-source"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-and-install-from-source"}},[e._v("#")]),e._v(" How to build and install from source")]),e._v(" "),o("p",[e._v("To build and install the extension from source, you need to install "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/extensions/publish-extension",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("vsce")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Then, clone the repository and compile it.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("git clone https://github.com/vuejs/vetur\ncd vetur\nyarn\nyarn compile\nvsce package\n")])])]),o("p",[e._v("Now you'll find "),o("code",[e._v("vetur-{version}.vsix")]),e._v(', you can install it by editor command "Install from VSIX".')]),e._v(" "),o("h2",{attrs:{id:"vetur-uses-different-version-of-typescript-in-vue-files-to-what-i-installed-in-node-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-uses-different-version-of-typescript-in-vue-files-to-what-i-installed-in-node-modules"}},[e._v("#")]),e._v(" Vetur uses different version of TypeScript in .vue files to what I installed in "),o("code",[e._v("node_modules")]),e._v(".")]),e._v(" "),o("p",[e._v("You can enable the "),o("code",[e._v("Vetur: Use Workspace Dependencies")]),e._v(" setting so that Vetur uses the same version of TypeScript in your workspace.\nNB: It will use "),o("code",[e._v("typescript.tsdk")]),e._v(" setting as the path to look for if defined, defaulting to "),o("code",[e._v("node_modules/typescript")]),e._v(". This enables tools like Yarn PnP to set their own custom resolver.")]),e._v(" "),o("h2",{attrs:{id:"vetur-is-slow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-is-slow"}},[e._v("#")]),e._v(" Vetur is slow")]),e._v(" "),o("p",[e._v("You can run the command "),o("code",[e._v("Vetur: Restart VLS (Vue Language Server)")]),e._v(" to restart VLS.")]),e._v(" "),o("p",[e._v("However, we'd appreciate it if you can file a "),o("a",{attrs:{href:"https://github.com/vuejs/vetur/blob/master/.github/PERF_ISSUE.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("performance issue report with a profile"),o("OutboundLink")],1),e._v(" to help us find the cause of the issue.")]),e._v(" "),o("h2",{attrs:{id:"vetur-can-t-find-tsconfig-json-jsconfig-json-in-xxxx-xxxxxx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-can-t-find-tsconfig-json-jsconfig-json-in-xxxx-xxxxxx"}},[e._v("#")]),e._v(" Vetur can't find "),o("code",[e._v("tsconfig.json")]),e._v(", "),o("code",[e._v("jsconfig.json")]),e._v(" in /xxxx/xxxxxx.")]),e._v(" "),o("p",[e._v("If you don't have any "),o("code",[e._v("tsconfig.json")]),e._v(", "),o("code",[e._v("jsconfig.json")]),e._v(" in your project,\nVetur will use fallback settings. Some features such as including path alias, decorator, and import json won't work.")]),e._v(" "),o("p",[e._v("You can add this config in correct position in your project or use "),o("code",[e._v("vetur.config.js")]),e._v(" to set the file path.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/setup.html#project-setup"}},[e._v("Read more project setup")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/setup.html#advanced"}},[e._v("Read more "),o("code",[e._v("vetur.config.js")])])],1)]),e._v(" "),o("p",[e._v("If you want debug info, you can use "),o("code",[e._v("Vetur: show doctor info")]),e._v(" command."),o("br"),e._v("\nYou can use "),o("code",[e._v("vetur.ignoreProjectWarning: true")]),e._v(" in vscode setting to close this warning.")]),e._v(" "),o("p",[e._v("⚠️ Notice ⚠️ : If you don't need (path alias/decorator/import json) feature, you can just close it.")]),e._v(" "),o("h2",{attrs:{id:"vetur-can-t-find-package-json-in-xxxx-xxxxxx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-can-t-find-package-json-in-xxxx-xxxxxx"}},[e._v("#")]),e._v(" Vetur can't find "),o("code",[e._v("package.json")]),e._v(" in /xxxx/xxxxxx.")]),e._v(" "),o("p",[e._v("If you don't have any "),o("code",[e._v("package.json")]),e._v(" in your project, Vetur can't know the Vue version and component data from other libs.\nVetur assumes that the version of Vue is less than 2.5.\nIf the version is wrong, you will get wrong diagnostics from typescript and eslint template validation.")]),e._v(" "),o("p",[e._v("You can add this config at the correct position in your project or use "),o("code",[e._v("vetur.config.js")]),e._v(" to set file path.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/setup.html#advanced"}},[e._v("Read more "),o("code",[e._v("vetur.config.js")])])],1)]),e._v(" "),o("p",[e._v("If you want debug info, you can use "),o("code",[e._v("Vetur: show doctor info")]),e._v(" command."),o("br"),e._v("\nYou can use "),o("code",[e._v("vetur.ignoreProjectWarning: true")]),e._v(" in vscode setting to close this warning.")]),e._v(" "),o("h2",{attrs:{id:"vetur-found-xxx-but-they-aren-t-in-the-project-root"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vetur-found-xxx-but-they-aren-t-in-the-project-root"}},[e._v("#")]),e._v(" Vetur found xxx, but they aren't in the project root.")]),e._v(" "),o("p",[e._v("Vetur found the file, but it may not actually be what you want.\nIf it is wrong, it will cause same result as the previous two. "),o("RouterLink",{attrs:{to:"/guide/FAQ.html#vetur-can-t-find-tsconfig-json-jsconfig-json-in-xxxx-xxxxxx"}},[e._v("ref1")]),e._v(", "),o("RouterLink",{attrs:{to:"/guide/FAQ.html#vetur-can-t-find-package-json-in-xxxx-xxxxxx"}},[e._v("ref2")])],1),e._v(" "),o("p",[e._v("You can add this config at the correct position in your project or use "),o("code",[e._v("vetur.config.js")]),e._v(" to set file path.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/setup.html#advanced"}},[e._v("Read more "),o("code",[e._v("vetur.config.js")])])],1)]),e._v(" "),o("p",[e._v("If you want debugging info, you can use the "),o("code",[e._v("Vetur: show doctor info")]),e._v(" command."),o("br"),e._v("\nYou can use "),o("code",[e._v("vetur.ignoreProjectWarning: true")]),e._v(" in vscode settings to close this warning.")])])}),[],!1,null,null,null);t.default=r.exports}}]);