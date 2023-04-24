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
}

export const configuration = {} as Configuration;
export function updateConfiguration() {
    const extensionConfig = vscode.workspace.getConfiguration(extensionName);
    configuration.statusBar = extensionConfig.get('statusBar') as Configuration['statusBar'];
    configuration.reloadItems = extensionConfig.get('reloadItems') as Configuration['reloadItems'];
}
updateConfiguration();
