import { expect, test } from "vitest";

import { isNumber } from "~/utils";

test("Positive Testing: isNumber", () => {
    expect(isNumber(10000)).toBe(true);
    expect(isNumber("100")).toBe(true);
    expect(isNumber("-10")).toBe(true);
    expect(isNumber("0.1")).toBe(true);

    expect(isNumber("aa")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber([1, "aa"])).toBe(false);
    expect(isNumber({ a: 10 })).toBe(false);
    expect(isNumber(Symbol("This is test!! 🥸"))).toBe(false);
});
