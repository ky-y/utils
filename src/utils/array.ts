export const toFlatArray = <T>(array: T[] | T[][]): T[] => {
    return array.flat(1) as T[];
};


export const range = (num: number): number[] => {
    return [...Array(num).keys()];
};


export const shuffle = <T>(array: T[]): T[] => {
    const shuffled = [...array];

    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
};


export const array = {
    toFlatArray,
    range,
    shuffle
};