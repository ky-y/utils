import { assertType, expect, test } from "vitest";

import { forEach, getKeys, map } from "~/utils";


test("Positive Testing: getKeys", () => {
    const test_object_1 = { a: "hogehoge", b: "hogehoge" };

    expect(getKeys(test_object_1)).toStrictEqual(["a", "b"]);
    assertType<("a"|"b")[]>(getKeys(test_object_1));

    const test_object_2 = { 1: "hogehoge", testtest: "hogehoge", piyo: "piyo" };

    expect(getKeys(test_object_2)).toStrictEqual(["1", "testtest", "piyo"]);
    assertType<(1|"testtest"|"piyo")[]>(getKeys(test_object_2));
});


test("Positive Testing: forEach", () => {
    const test_object_1 = { a: "hogehoge", b: "hogehoge" };

    let i = 0;
    forEach(test_object_1, (v1, v2, v3) => {

        expect(v3).toBe(i);
        expect(v2).toBe(getKeys(test_object_1)[i]);
        expect(v1).toBe(test_object_1[
            getKeys(test_object_1)[i]
        ]);
        i++;
    });
});


test("Positive Testing: map", () => {
    const test_object_1 = { a: "hogehoge", b: "hogehoge" };

    let i = 0;
    const result = map(test_object_1, (v1, v2, v3) => {

        expect(v3).toBe(i);
        expect(v2).toBe(getKeys(test_object_1)[i]);
        expect(v1).toBe(test_object_1[
            getKeys(test_object_1)[i]
        ]);
        i++;
        return "aiueo";
    });
    expect(result).toStrictEqual({ a: "aiueo", b: "aiueo" });
});
