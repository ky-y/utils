import { expect, test } from "vitest";
import { sort } from "fast-sort";

import { range, toFlatArray, shuffle } from "~/utils";

test("Positive Testing: range", () => {
    expect(range(5)).toStrictEqual([0, 1, 2, 3, 4]);
});

test("Positive Testing: toFlatArray", () => {
    const a = [0, 1, 2, 3, 4, 5, 6];
    const b = [0, [1, 2], [3, 4], 5, 6];

    expect(toFlatArray(a)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(toFlatArray(b)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
});


test("Positive Testing: shuffle", () => {
    const test = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    ];

    expect(shuffle(test)).not.toStrictEqual(test);
    expect(sort(shuffle(test)).asc()).toStrictEqual(sort(test).asc());
});