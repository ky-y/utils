import { expect, test } from "vitest";

import { sum, average, median } from "~/utils";

test("Positive Testing: sum", () => {
    expect(sum(1, 5, 7, 8)).toBe(21);
    expect(sum([1, 5, 7, 8])).toBe(21);

    expect(sum(1, -5, -100)).toBe(-104);
    expect(sum([1, -5, -100])).toBe(-104);

    expect(sum(0, 0, 0)).toBe(0);
    expect(sum([0, 0, 0])).toBe(0);
});

test("Positive Testing: average", () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3);
    expect(average([1, 2, 3, 4, 5])).toBe(3);

    expect(average(1, 2, 3, 4)).toBe(2.5);
    expect(average([1, 2, 3, 4])).toBe(2.5);

    expect(average(-1, -2, 3, 4)).toBe(1);
    expect(average([-1, -2, 3, 4])).toBe(1);

    expect(average(-1, -2, -3, -4)).toBe(-2.5);
    expect(average([-1, -2, -3, -4])).toBe(-2.5);
});

test("Positive Testing: median", () => {
    expect(median(1, 3, 5, 2, 4)).toBe(3);
    expect(median([1, 3, 5, 2, 4])).toBe(3);

    expect(median(1, 6, 2, 4)).toBe(3);
    expect(median([1, 6, 2, 4])).toBe(3);

    expect(median(-1, -3, 5, 2, 4)).toBe(2);
    expect(median([-1, -3, 5, 2, 4])).toBe(2);

    expect(median(1, -6, 2, 4)).toBe(1.5);
    expect(median([1, -6, 2, 4])).toBe(1.5);
});