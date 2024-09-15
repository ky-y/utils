export const getKeys = <T extends { [key: string]: any }>(v: T): (keyof T)[] => {
    return Object.keys(v);
};
