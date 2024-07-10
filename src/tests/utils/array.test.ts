import { expect, test } from "vitest";

import { toFlatArray, range } from "~/utils";

test("Positive Testing: range", () => {
    expect(range(5)).toStrictEqual([0, 1, 2, 3, 4]);
});

test("Positive Testing: toFlatArray", () => {
    const a = [0, 1, 2, 3, 4, 5, 6];
    const b = [0, [1, 2], [3, 4], 5, 6];

    expect(toFlatArray(a)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(toFlatArray(b)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
});