import crypto from "crypto";

const default_algorithm: algorithms = "aes-256-cbc";

export type algorithms = "aes-256-cbc" | "aes-128-cbc" | "aes-192-cbc";

export class Crypto {

    public static encrypt = (
        input: string,
        secret_key?: string,
        algorithm: algorithms = default_algorithm
    ) => {
        const iv = this.iv();
        const cipher = this.cipher(
            algorithm,
            this.secretKey(secret_key, algorithm),
            iv
        );

        const encrypted = Buffer.concat([cipher.update(input, "utf-8"), cipher.final()]);

        return Buffer.concat([iv, encrypted]).toString("base64");
    };

    public static decrypt = (
        input: string,
        secret_key?: string,
        algorithm: algorithms = default_algorithm
    ) => {
        const encrypted = Buffer.from(input, "base64");

        const iv = encrypted.subarray(0, 16);
        const value = encrypted.subarray(16);

        const decipher = this.decipher(
            algorithm,
            this.secretKey(secret_key, algorithm),
            iv
        );

        const decrypted = Buffer.concat([decipher.update(value), decipher.final()]);

        return decrypted.toString("utf-8");
    };

    private static iv = () => crypto.randomBytes(16);

    private static secretKey = (key: string | undefined, algorithm: algorithms) => {
        key = key ?? process.env["SECRET_KEY"];
        if (!key)
            throw new Error("`SECRET_KEY` is required.");

        const secret_key = Buffer.from(key, "base64");
        if (algorithm === "aes-128-cbc" && secret_key.length !== 16)
            throw new Error(
                "The `SECRET_KEY` must be 16 bytes long when using AES-128-CBC.\n"
                + "run: `openssl rand -base64 16`"
            );
        if (algorithm === "aes-192-cbc" && secret_key.length !== 24)
            throw new Error(
                "The `SECRET_KEY` must be 24 bytes long when using AES-192-CBC.\n"
                + "run: `openssl rand -base64 24`"
            );
        if (algorithm === "aes-256-cbc" && secret_key.length !== 32)
            throw new Error(
                "The `SECRET_KEY` must be 32 bytes long when using AES-256-CBC.\n"
                + "run: `openssl rand -base64 32`"
            );
        return secret_key;
    };

    private static cipher = (
        algorithm: algorithms,
        secret_key: Buffer,
        iv: Buffer
    ) => crypto.createCipheriv(
        algorithm,
        secret_key,
        iv
    );

    private static decipher = (
        algorithm: algorithms,
        secret_key: Buffer,
        iv: Buffer
    ) => crypto.createDecipheriv(
        algorithm,
        secret_key,
        iv
    );
}
