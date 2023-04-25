import vscode from 'vscode';

import { configuration } from '../configuration';
import { runWithStatusBarProgress } from '../utils/window';

export async function reloadServers() {
    const executedCommands: string[] = [];
    for (const [_, server] of Object.entries(configuration.reloadServers)) {
        const extension = vscode.extensions.getExtension(server.extensionId);
        if (extension?.isActive) {
            executedCommands.push(server.commandId);
        }
    }

    await runWithStatusBarProgress(
        () =>
            Promise.all(
                executedCommands.map(async (command) => vscode.commands.executeCommand(command)),
            ),
        'reload servers',
    );
}
