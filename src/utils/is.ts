export const isNumber = (val: unknown) => {
    if (typeof val !== "string" && typeof val !== "number")
        return false;

    return !Number.isNaN(parseInt(String(val)));
};