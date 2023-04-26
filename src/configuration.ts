import vscode from 'vscode';

import { extensionName } from './utils/constants';

interface Configuration {
    statusBar: {
        text: string;
        commandId: string;
        alignment: 'left' | 'right';
        priority: number;
    };
    reloadItems: Array<{
        name: string;
        extensionId: string;
        operations: Array<{
            text: string;
            title: string;
            commandId: string;
            statusBarProgressMessage?: string;
        }>;
    }>;
    reloadServers: Array<{
        extensionId: string;
        commandId: string;
    }>;
}

export const configuration = {} as Configuration;
export function updateConfiguration() {
    const extensionConfig = vscode.workspace.getConfiguration(extensionName);
    configuration.statusBar = Object.assign(
        {
            text: '$(debug-restart)',
            commandId: 'reload-can-solve-any-problems.reloadServers',
            alignment: 'left',
            priority: 100,
        } as const,
        extensionConfig.get('statusBar'),
    );
    configuration.reloadItems = extensionConfig.get('reloadItems') as any;
    configuration.reloadServers = extensionConfig.get('reloadServers') as any;
}
updateConfiguration();
