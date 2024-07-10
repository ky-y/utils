import { expect, test } from "vitest";

import { cn } from "~/utils";

test("Positive Testing: cn", () => {
    expect(cn("test", "hoge", "piyo")).toBe("test hoge piyo");
    expect(cn("test", "hoge", "")).toBe("test hoge");
    expect(cn("test", "hoge", null)).toBe("test hoge");
    expect(cn("test", "hoge", undefined)).toBe("test hoge");
});