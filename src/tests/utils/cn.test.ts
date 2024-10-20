import { describe, expect, test } from "vitest";

import { cn } from "~/utils";

describe("cn function", () => {

    describe("Positive Testing", () => {

        test("Strings should be correctly concatenated.", () => {

            expect(cn("test", "hoge", "piyo")).toBe("test hoge piyo");
        });

        test("Empty strings should be ignored.", () => {

            expect(cn("test", "hoge", "")).toBe("test hoge");
        });

        test("Null values should be ignored.", () => {

            expect(cn("test", "hoge", null)).toBe("test hoge");
        });

        test("Undefined values should be ignored.", () => {

            expect(cn("test", "hoge", undefined)).toBe("test hoge");
        });

        test("Boolean values should be ignored.", () => {

            expect(cn("test", "hoge", false)).toBe("test hoge");
            expect(cn("test", "hoge", true)).toBe("test hoge");
        });

        test("Non-string values should return empty strings.", () => {

            expect(cn(true, false, null, undefined)).toBe("");
        });
    });
});