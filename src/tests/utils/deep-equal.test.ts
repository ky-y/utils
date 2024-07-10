import { expect, test } from "vitest";

import { deepEqual } from "~/utils";


// Expect `true`
test("Positive Testing: Expect `true` / number and number", () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual(1003, 1003)).toBe(true);
});

test("Positive Testing: Expect `true` / string and string", () => {
    expect(deepEqual("test", "test")).toBe(true);
    expect(deepEqual("test this is test. ok???😀", "test this is test. ok???😀")).toBe(true);
});

test("Positive Testing: Expect `true` / array and array", () => {
    expect(deepEqual([1, 3, 5], [1, 3, 5])).toBe(true);
    expect(deepEqual(["this", "is", "test", "😀"], ["this", "is", "test", "😀"])).toBe(true);
});

test("Positive Testing: Expect `true` / function and function", () => {
    const hoge = (a: number, b: number): number => a + b;
    const piyo = (a: number, b: number): number => a + b;

    expect(deepEqual(hoge, hoge)).toBe(true);
    expect(deepEqual(hoge, piyo)).toBe(true);
});

test("Positive Testing: Expect `true` / symbol and symbol", () => {
    const a = Symbol("This is test!! 🥸");
    const b = Symbol("This is test!! 🥸");

    expect(deepEqual(a, a)).toBe(true);
    expect(deepEqual(a, b)).toBe(true);
});

test("Positive Testing: Expect `true` / bigint and bigint", () => {
    const a = BigInt("9007199254740992");
    const b = BigInt("9007199254740992");

    expect(deepEqual(a, a)).toBe(true);
    expect(deepEqual(a, b)).toBe(true);
});

test("Positive Testing: Expect `true` / mix", () => {
    const a = [
        {
            id: 1001,
            name: "This is Name!! 😃",
            verify: true
        },
        {
            title: "This is Title!!",
            remarks: Symbol("VIP User"),
            views: BigInt("9007199254740992"),
            toJson: (v: object) => JSON.stringify(v)
        }
    ];

    const b = [
        {
            id: 1001,
            name: "This is Name!! 😃",
            verify: true
        },
        {
            title: "This is Title!!",
            remarks: Symbol("VIP User"),
            views: BigInt("9007199254740992"),
            toJson: (v: object) => JSON.stringify(v)
        }
    ];

    expect(deepEqual(a, a)).toBe(true);
    expect(deepEqual(a, b)).toBe(true);
});


// Expect `false`
test("Positive Testing: Expect `false` / number and number", () => {
    expect(deepEqual(1, 10)).toBe(false);
    expect(deepEqual(1003, -102)).toBe(false);
});

test("Positive Testing: Expect `false` / string and string", () => {
    expect(deepEqual("test", "tests")).toBe(false);
    expect(deepEqual("test this is test. ok???😀", "test this is test. ok???🥸")).toBe(false);
});

test("Positive Testing: Expect `false` / array and array", () => {
    expect(deepEqual([1, 3, 5], [1, 5, 3])).toBe(false);
    expect(deepEqual(["this", "is", "test", "😀"], ["this", "is", "test", "🥸"])).toBe(false);
});

test("Positive Testing: Expect `false` / function and function", () => {
    const hoge = (a: number, b: number): number => a + b;
    const piyo = (a: number, b: number): number => a * b;

    expect(deepEqual(hoge, piyo)).toBe(false);
});

test("Positive Testing: Expect `false` / symbol and symbol", () => {
    const a = Symbol("This is test!! 🥸");
    const b = Symbol("This is test!! 😃");

    expect(deepEqual(a, b)).toBe(false);
});

test("Positive Testing: Expect `false` / bigint and bigint", () => {
    const a = BigInt("9007199254740992");
    const b = BigInt("9007199254740993");

    expect(deepEqual(a, b)).toBe(false);
});

test("Positive Testing: Expect `false` / mix", () => {
    const a = [
        {
            id: 1001,
            name: "This is Name!! 😃",
            verify: true
        },
        {
            title: "This is Title!!",
            remarks: Symbol("VIP User"),
            views: BigInt("9007199254740992"),
            toJson: (v: object) => JSON.stringify(v)
        }
    ];

    const b = [
        {
            id: 1002,
            name: "This is Name!! 😃",
            verify: true
        },
        {
            title: "This is Title!!",
            remarks: Symbol("VIP User"),
            views: BigInt("9007199254740992"),
            toJson: (v: object) => JSON.stringify(v)
        }
    ];

    const c = [
        {
            id: 1002,
            name: "This is Name!! 🥸",
            verify: false
        },
        {
            title: "This is Title??",
            remarks: Symbol("Not VIP User"),
            views: BigInt("9007199254740993"),
            toJson: (h: object) => JSON.stringify(h)
        }
    ];

    expect(deepEqual(a, b)).toBe(false);
    expect(deepEqual(a, c)).toBe(false);
});