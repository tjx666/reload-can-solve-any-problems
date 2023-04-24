import { setTimeout } from 'node:timers/promises';

import { window, commands, ProgressLocation } from 'vscode';

interface RunReloadCommandArgs {
    commandId: string;
    args?: any[];
    statusBarProgressMessage?: string;
}

export async function runReloadCommand(args: RunReloadCommandArgs) {
    if (args.statusBarProgressMessage) {
        window.withProgress(
            {
                location: ProgressLocation.Window,
                title: args.statusBarProgressMessage,
            },
            async (_progress) => {
                await Promise.all([
                    setTimeout(1500),
                    commands.executeCommand(args.commandId, ...(args.args ?? [])),
                ]);
            },
        );
    } else {
        await commands.executeCommand(args.commandId, ...(args.args ?? []));
    }
}
