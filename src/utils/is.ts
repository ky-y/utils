export const isNumber = (val: any) => {
    if (typeof val !== "string" && typeof val !== "number")
        return false;

    return !Number.isNaN(parseInt(String(val)));
};