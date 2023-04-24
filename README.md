# Reload Can Solve Any Problems

<div align="center">

[![Version](https://img.shields.io/visual-studio-marketplace/v/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items/YuTengjing.reload-can-solve-any-problems/changelog) [![Installs](https://img.shields.io/visual-studio-marketplace/i/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.reload-can-solve-any-problems) [![Downloads](https://img.shields.io/visual-studio-marketplace/d/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.reload-can-solve-any-problems) [![Rating Star](https://img.shields.io/visual-studio-marketplace/stars/YuTengjing.reload-can-solve-any-problems)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.reload-can-solve-any-problems&ssr=false#review-details) [![Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/YuTengjing.reload-can-solve-any-problems)](https://github.com/tjx666/reload-can-solve-any-problems)

![test](https://github.com/tjx666/reload-can-solve-any-problems/actions/workflows/test.yml/badge.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![Github Open Issues](https://img.shields.io/github/issues/tjx666/reload-can-solve-any-problems)](https://github.com/tjx666/reload-can-solve-any-problems/issues) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

</div>

## Features

- highly customizable status bar to reload vscode and extensions
- add `reload window` shortcut <kbd>⌘</kbd>+<kbd>R</kbd>

![usage](https://github.com/tjx666/reload-can-solve-any-problems/blob/main/assets/screenshots/usage.png?raw=true)

## Configure

You can totally control how the status bar and it's tooltip display:

```jsonc
{
  "reload-can-solve-any-problems.statusBar": {
    // by default is $(debug-restart)
    // check icon usage and all icons list: https://code.visualstudio.com/api/references/icons-in-labels#icons-in-labels
    "text": "Reload",
    // you can find all command in command plate by shortcut `cmd + shift + p`
    // or `cmd + k cmd + s` in keyboard shortcuts setting
    "commandId": "workbench.action.reloadWindow",
    "alignment": "right",
    "priority": 1
  },
  "reload-can-solve-any-problems.reloadItems": [
    {
      "name": "ESLint",
      "operations": [
        {
          "text": "$(refresh)",
          "title": "Reload",
          "commandId": "eslint.restart"
        }
      ]
    },
    {
      "name": "TypeScript",
      "operations": [
        {
          "text": "$(refresh)",
          "title": "Reload",
          "commandId": "typescript.restartTsServer"
        }
      ]
    },
    {
      "name": "Volar",
      "operations": [
        {
          "text": "Reload Project",
          "title": "Reload Project",
          "commandId": "volar.action.reloadProject"
        },
        {
          "text": "Restart Vue Server",
          "title": "Restart Vue Server",
          "commandId": "volar.action.restartServer"
        }
      ]
    }
    // {
    //   "name": "Stylelint",
    //   "operations": [
    //     {
    //       "text": "$(refresh)",
    //       "title": "Reload",
    //       "commandId": "stylelint.xxx"
    //     }
    //   ]
    // },
  ]
}
```

Following is the effect of above configuration:

![configure](https://github.com/tjx666/reload-can-solve-any-problems/blob/main/assets/screenshots/configure.png?raw=true)

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

## TODO

- 支持修改配置实时渲染
- 优化配置，部分设置设置为 required
- 调用命令前检查插件是否存在
