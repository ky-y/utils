import { toFlatArray } from "~/utils/array";

import { sort } from "~/libs/sort";


export const sum = (...vals: number[] | number[][]): number => {
    vals = toFlatArray(vals);

    return vals.reduce((a, b) => a + b, 0);
};


export const average = (...vals: number[] | number[][]): number => {
    vals = toFlatArray(vals);

    return sum(...vals) / vals.length;
};


export const median = (...vals: number[] | number[][]): number => {
    vals = toFlatArray(vals);
    vals = sort(vals).asc();

    if (vals.length % 2 === 1)
        return vals[(vals.length - 1) / 2];
    else
        return average(
            vals[vals.length / 2],
            vals[vals.length / 2 - 1]
        );
};
