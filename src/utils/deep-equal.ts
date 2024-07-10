export const deepEqual = (val1: unknown, val2: unknown): boolean => {
    const val1Type = typeof val1;
    const val2Type = typeof val2;
    
    if (val1 === val2)
        return true;

    if (val1Type !== val2Type)
        return false;

    if (
        (val1Type === "undefined" && val2Type === "undefined")
        || (val1Type === "boolean" && val2Type === "boolean")
        || (val1Type === "number" && val2Type === "number")
        || (val1Type === "bigint" && val2Type === "bigint")
        || (val1Type === "string" && val2Type === "string")
    )
        return false;

    if (val1 === null || val2 === null)
        return false;

    if (val1 === undefined || val2 === undefined)
        return false;

    if (val1Type === "function" && val2Type === "function")
        return val1.toString() === val2.toString();

    if (val1Type === "symbol" && val2Type === "symbol")
        return val1.toString() === val2.toString();

    const val1ArrFlg = Array.isArray(val1);
    const val2ArrFlg = Array.isArray(val2);
    if (val1ArrFlg !== val2ArrFlg)
        return false;

    if (val1ArrFlg && val2ArrFlg) {

        return val1.every((v, i) => {
            return deepEqual(v, val2[i]);
        });
    }

    if (
        val1Type === "object" && val2Type === "object"
        && !val1ArrFlg && !val2ArrFlg
    ) {

        const val1Keys = Object.keys(val1);
        const val2Keys = Object.keys(val2);

        if (!deepEqual(val1Keys, val2Keys))
            return false;

        return val1Keys.every(key => {

            return deepEqual(val1[key as keyof typeof val1], val2[key as keyof typeof val2]);
        });
    }

    return Object.is(val1, val2);
};