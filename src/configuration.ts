import vscode from 'vscode';

interface Configuration {
    statusBar: {
        icon: string;
        commandId: string;
    };
    reloadItems: Array<{
        title: string;
        operations: Array<{
            title: string;
            commandId: string;
            icon: string;
        }>;
    }>;
}

export const configuration = {} as Configuration;
export async function updateConfiguration() {
    const extensionConfig = vscode.workspace.getConfiguration('reload-can-solve-any-problems');
    configuration.statusBar = extensionConfig.get('statusBar') as Configuration['statusBar'];
    configuration.reloadItems = extensionConfig.get('reloadItems') as Configuration['reloadItems'];
}
updateConfiguration();
