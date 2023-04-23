import vscode from 'vscode';

interface Configuration {
    statusBar: {
        text: string;
        commandId: string;
        alignment: 'left' | 'right';
        priority: number;
    };
    reloadItems: Array<{
        name: string;
        operations: Array<{
            text: string;
            title: string;
            commandId: string;
        }>;
    }>;
}

export const configuration = {} as Configuration;
const extensionName = 'reload-can-solve-any-problems';
export function updateConfiguration() {
    const extensionConfig = vscode.workspace.getConfiguration(extensionName);
    configuration.statusBar = extensionConfig.get('statusBar') as Configuration['statusBar'];
    configuration.reloadItems = extensionConfig.get('reloadItems') as Configuration['reloadItems'];
}
updateConfiguration();
