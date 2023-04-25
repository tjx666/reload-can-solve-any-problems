import { window, commands } from 'vscode';

import { runWithStatusBarProgress } from '../utils/window';

interface RunReloadCommandArgs {
    extensionId: string;
    commandId: string;
    args?: any[];
    statusBarProgressMessage?: string;
}

export async function runReloadCommand(args: RunReloadCommandArgs) {
    const runCommand = async () => {
        try {
            await commands.executeCommand(args.commandId, ...(args.args ?? []));
        } catch (error) {
            console.error(error);
            window.showErrorMessage(
                `Execute command: ${args.commandId} of extension ${args.extensionId} failed!\n${error}`,
            );
        }
    };
    if (args.statusBarProgressMessage) {
        await runWithStatusBarProgress(runCommand, args.statusBarProgressMessage);
    } else {
        await runCommand();
    }
}
