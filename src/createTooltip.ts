import { MarkdownString } from 'vscode';

import { configuration } from './configuration';
import { commandIds } from './utils/constants';

function createMdStr() {
    const { reloadItems } = configuration;
    const spaces = Array.from({ length: 12 }, () => '&nbsp').join('');
    const tableBody = reloadItems
        .map((item) => {
            const operations = item.operations
                .map((op) => {
                    const args = encodeURI(
                        JSON.stringify({
                            commandId: op.commandId,
                            statusBarProgressMessage: op.statusBarProgressMessage,
                        }),
                    );
                    return `<td><a href="command:${commandIds.runReloadCommand}?${args}" title="${op.title}">${op.text}</a></td>`;
                })
                .join('<td>&nbsp;&nbsp;</td>');
            return `<tr><td>${item.name}</td><td>${spaces}</td>${operations}</tr>`;
        })
        .join('');
    return `<table>${tableBody}</table>`;
}

export function createTooltip() {
    const tooltip = new MarkdownString();
    tooltip.isTrusted = true;
    tooltip.supportThemeIcons = true;
    tooltip.supportHtml = true;
    tooltip.appendMarkdown(createMdStr());
    return tooltip;
}
