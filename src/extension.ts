import vscode from 'vscode';

import { configuration, updateConfiguration } from './configuration';

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.onDidChangeConfiguration(updateConfiguration, null, context.subscriptions);

    const disposable = vscode.commands.registerCommand(
        'awesome-vscode-extension-boilerplate.helloWorld',
        () => {
            vscode.window.showInformationMessage(
                'Hello World from Awesome VSCode Extension Boilerplate!',
            );
        },
    );

    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
    statusBarItem.text = configuration.statusBar.icon;
    statusBarItem.command = configuration.statusBar.commandId;

    const tooltip = new vscode.MarkdownString();
    tooltip.isTrusted = true;
    tooltip.supportThemeIcons = true;
    tooltip.supportHtml = true;
    const { reloadItems } = configuration;
    const spaces = Array.from({ length: 12 }, () => '&nbsp').join('');
    const tableBody = reloadItems
        .map((item) => {
            const operations = item.operations
                .map((op) => {
                    return `<td><a href="command:${op.commandId}" title="${op.title}">${op.icon}</a></td>`;
                })
                .join('<td>&nbsp;&nbsp;</td>');
            return `<tr><td>${item.title}</td><td>${spaces}</td>${operations}</tr>`;
        })
        .join('');
    tooltip.appendMarkdown(`<table>${tableBody}</table>`);
    statusBarItem.tooltip = tooltip;

    statusBarItem.show();

    context.subscriptions.push(disposable);
}

export function deactivate() {}
