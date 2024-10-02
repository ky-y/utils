export const getKeys = <T extends Record<string, any>>(v: T): (keyof T)[] => {
    return Object.keys(v);
};


export const forEach = <T extends { [key: string|number]: any }>(
    v: T,
    func: <V extends keyof T>(
        value: T[V],
        key: V,
        index: number
    ) => void
): void => {

    getKeys(v).forEach((key, index) => func(v[key], key, index));
};


export const map = <T extends { [key: string|number]: any }, V extends any>(
    v: T,
    func: <U extends keyof T>(
        value: T[U],
        key: U,
        index: number
    ) => V
): { [key in keyof T]: V } => {

    const result = {} as { [key in keyof T]: V };

    getKeys(v).forEach((key, index) => {
        result[key] = func(v[key], key, index);
    });

    return result;
};


export const forEachAsync = async (V: any) => {

};


export const mapAsync = async(V: any) => {

};

export const object = {
    getKeys,
    forEach,
    map
};