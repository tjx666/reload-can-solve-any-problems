import type { ExtensionContext } from 'vscode';
import { workspace, StatusBarAlignment, MarkdownString, window } from 'vscode';

import { configuration, updateConfiguration } from './configuration';

function generateMarkdownFromConfig() {
    const { reloadItems } = configuration;
    const spaces = Array.from({ length: 12 }, () => '&nbsp').join('');
    const tableBody = reloadItems
        .map((item) => {
            const operations = item.operations
                .map((op) => {
                    return `<td><a href="command:${op.commandId}" title="${op.title}">${op.text}</a></td>`;
                })
                .join('<td>&nbsp;&nbsp;</td>');
            return `<tr><td>${item.name}</td><td>${spaces}</td>${operations}</tr>`;
        })
        .join('');
    return `<table>${tableBody}</table>`;
}

export function activate(context: ExtensionContext) {
    workspace.onDidChangeConfiguration(updateConfiguration, null, context.subscriptions);

    const statusBarItem = window.createStatusBarItem(
        configuration.statusBar.alignment === 'left'
            ? StatusBarAlignment.Left
            : StatusBarAlignment.Right,
        configuration.statusBar.priority,
    );
    statusBarItem.text = configuration.statusBar.text;
    statusBarItem.command = configuration.statusBar.commandId;

    const tooltip = new MarkdownString();
    tooltip.isTrusted = true;
    tooltip.supportThemeIcons = true;
    tooltip.supportHtml = true;
    tooltip.appendMarkdown(generateMarkdownFromConfig());
    statusBarItem.tooltip = tooltip;

    statusBarItem.show();
}

export function deactivate() {}
