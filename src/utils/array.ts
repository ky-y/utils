export const toFlatArray = <T>(array: T[] | T[][]): T[] => {
    return array.flat(1) as T[];
};


export const range = (num: number): number[] => {
    return [...Array(num).keys()];
};

export const array = {
    toFlatArray,
    range
};