import { setTimeout } from 'node:timers/promises';

import { ProgressLocation, window } from 'vscode';

export async function runWithStatusBarProgress(taskCreator: () => Thenable<any>, message: string) {
    const leastDelay = 2000;
    return window.withProgress(
        {
            location: ProgressLocation.Window,
            title: message,
        },
        async (_progress) => {
            await Promise.all([setTimeout(leastDelay), taskCreator()]);
        },
    );
}
