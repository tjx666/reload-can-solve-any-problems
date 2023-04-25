import { commands } from 'vscode';

import { runWithStatusBarProgress } from '../utils/window';

interface RunReloadCommandArgs {
    extensionId: string;
    commandId: string;
    args?: any[];
    statusBarProgressMessage?: string;
}

export async function runReloadCommand(args: RunReloadCommandArgs) {
    const runCommand = () => commands.executeCommand(args.commandId, ...(args.args ?? []));
    if (args.statusBarProgressMessage) {
        await runWithStatusBarProgress(runCommand, args.statusBarProgressMessage);
    } else {
        await runCommand();
    }
}
