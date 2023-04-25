export const extensionName = 'reload-can-solve-any-problems';
const commandsArray = ['runReloadCommand', 'reloadServers'] as const;

type CommandsArrayUnion = (typeof commandsArray)[number];
type Commands = {
    [P in CommandsArrayUnion]: `${typeof extensionName}.${P}`;
};
export type Command = CommandsArrayUnion extends CommandsArrayUnion
    ? `${typeof extensionName}.${CommandsArrayUnion}`
    : never;

export const commandIds = commandsArray.reduce((acc, item) => {
    // @ts-expect-error ts bug
    acc[item] = `${extensionName}.${item}`;
    return acc;
}, {} as Commands);
