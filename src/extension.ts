import type { ExtensionContext, StatusBarItem } from 'vscode';
import { commands, workspace, StatusBarAlignment, window } from 'vscode';

import { configuration, updateConfiguration } from './configuration';
import { createTooltip } from './createTooltip';
import { commandIds } from './utils/constants';

let statusBarItem: StatusBarItem;
export function activate(context: ExtensionContext) {
    workspace.onDidChangeConfiguration(updateConfiguration, null, context.subscriptions);

    context.subscriptions.push(
        commands.registerCommand(commandIds.runReloadCommand, (...args: any[]) => {
            import('./commands/runReloadCommand').then((mod) =>
                (mod.runReloadCommand as any)(...args),
            );
        }),
    );

    const alignment =
        configuration.statusBar.alignment === 'left'
            ? StatusBarAlignment.Left
            : StatusBarAlignment.Right;
    statusBarItem = window.createStatusBarItem(alignment, configuration.statusBar.priority);
    statusBarItem.text = configuration.statusBar.text;
    statusBarItem.command = configuration.statusBar.commandId;
    statusBarItem.tooltip = createTooltip();
    statusBarItem.show();
}

export function deactivate() {
    statusBarItem.dispose();
}
