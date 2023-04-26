# Reload Can Solve Any Problems

<div align="center">

[![Version](https://img.shields.io/visual-studio-marketplace/v/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items/YuTengjing.reload-can-solve-any-problems/changelog) [![Installs](https://img.shields.io/visual-studio-marketplace/i/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.reload-can-solve-any-problems) [![Downloads](https://img.shields.io/visual-studio-marketplace/d/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.reload-can-solve-any-problems) [![Rating Star](https://img.shields.io/visual-studio-marketplace/stars/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.reload-can-solve-any-problems&ssr=false#review-details) [![Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/YuTengjing.reload-can-solve-any-problems)](https://github.com/tjx666/reload-can-solve-any-problems)

![test](https://github.com/tjx666/reload-can-solve-any-problems/actions/workflows/test.yml/badge.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![Github Open Issues](https://img.shields.io/github/issues/tjx666/reload-can-solve-any-problems)](https://github.com/tjx666/reload-can-solve-any-problems/issues) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

</div>

## Features

- highly customizable status bar to reload vscode and extensions
- add `reload window` shortcut <kbd>⌘</kbd>+<kbd>R</kbd>
- provide a command `Reload Servers` to reload all extensions servers, you can configure the servers by setting `reload-can-solve-any-problems.reloadServers`.

![usage](https://github.com/tjx666/reload-can-solve-any-problems/blob/main/assets/screenshots/usage.png?raw=true)

## Configure

You can totally control how the status bar and it's tooltip display.

Following is the default settings:

```jsonc
{
  "reload-can-solve-any-problems.statusBar": {
    "text": "$(debug-restart)",
    "commandId": "reload-can-solve-any-problems.reloadServers",
    "alignment": "left",
    "priority": 100
  },
  "reload-can-solve-any-problems.reloadItems": [
    {
      "name": "ESLint",
      "extensionId": "dbaeumer.vscode-eslint",
      "operations": [
        {
          "text": "$(debug-restart)",
          "title": "Reload ESLint",
          "commandId": "eslint.restart",
          "statusBarProgressMessage": "Reload ESlint"
        }
      ]
    },
    {
      "name": "TypeScript",
      "extensionId": "vscode.typescript-language-features",
      "operations": [
        {
          "text": "$(project)",
          "title": "Reload TypeScript Projects",
          "commandId": "typescript.reloadProjects",
          "statusBarProgressMessage": "Reload TypeScript Projects"
        },
        {
          "text": "$(server-process)",
          "title": "Restart TypeScript Server",
          "commandId": "typescript.restartTsServer"
        }
      ]
    },
    {
      "name": "Volar",
      "extensionId": "Vue.volar",
      "operations": [
        {
          "text": "$(project)",
          "title": "Volar Reload Projects",
          "commandId": "volar.action.reloadProject",
          "statusBarProgressMessage": "Volar Reload Projects"
        },
        {
          "text": "$(server-process)",
          "title": "Restart Vue Server",
          "commandId": "volar.action.restartServer",
          "statusBarProgressMessage": "Restart Vue Server"
        }
      ]
    }
  ],
  // will reload the server in parallel
  "reload-can-solve-any-problems.reloadServers": [
    {
      "extensionId": "dbaeumer.vscode-eslint",
      "commandId": "eslint.restart"
    },
    {
      "extensionId": "vscode.typescript-language-features",
      "commandId": "typescript.reloadProjects"
    },
    {
      "extensionId": "Vue.volar",
      "commandId": "volar.action.reloadProject"
    }
  ]
}
```

## Inspiration

### About the extension name

I mainly help my team to maintain the front-end build system this year. They often ask me about the vscode intelisence problem such as `Why my eslint errors disappear?` Most of their problems can be solved by reloading extension or reloading vscode. So, this is why I named the extension: **Reload Can Solve Any Problems**.

### Why add `reload window` shortcut?

VSCode had a builtin command `workbench.action.reloadWindow` to reload window, but it's builtin shortcut can only be used under extension development host, which means you need to call it by command plate most of time.

But in fact, the reload command is almost daily used, and many users are not familiar with vscode settings. So, it would be convenient to provide it for new users.

### Why add status bar?

I will throw a screenshot which means to reload the vscode first when my colleagues ask me about vscode issue. Click a button would be easier to understand than open command plate and run command.

This extension also help you to organize the common reload commands of extensions by status bar tooltip.

## My extensions

- [Open in External App](https://github.com/tjx666/open-in-external-app)
- [Package Manager Enhancer](https://github.com/tjx666/package-manager-enhancer)
- [Neo File Utils](https://github.com/tjx666/vscode-neo-file-utils)
- [VSCode FE Helper](https://github.com/tjx666/vscode-fe-helper)
- [VSCode archive](https://github.com/tjx666/vscode-archive)
- [Better Colorizer](https://github.com/tjx666/better-colorizer/tree/main)
- [Modify File Warning](https://github.com/tjx666/modify-file-warning)
- [Power Edit](https://github.com/tjx666/power-edit)
- [Adobe Extension Development Tools](https://github.com/tjx666/vscode-adobe-extension-devtools)
- [Scripting Listener](https://github.com/tjx666/scripting-listener)

Check all here: [publishers/YuTengjing](https://marketplace.visualstudio.com/publishers/YuTengjing)
