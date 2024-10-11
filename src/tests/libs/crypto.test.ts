import crypto from "crypto";
import { describe, expect, test } from "vitest";

import { Crypto } from "~/libs";

describe("Crypto", () => {

    describe("Positive Testing", () => {

        test("The encrypted and decrypted value matches the original.", () => {
            const value = "aiueo";
            const key = crypto.randomBytes(32).toString("base64");
            const encrypted = Crypto.encrypt(value, key);
            const decrypted = Crypto.decrypt(encrypted, key);

            expect(decrypted).toBe(value);
        });

        test("Repeated encryption of the same text yields different values.", () => {
            const value = "pipipo";
            const key = crypto.randomBytes(32).toString("base64");
            const encrypted1 = Crypto.encrypt(value, key);
            const encrypted2 = Crypto.encrypt(value, key);

            expect(encrypted2).not.toBe(encrypted1);
        });

        test("Encryption works even when specifying the encryption method (AES-128-CBC).", () => {
            const value = "hello!";
            const key = crypto.randomBytes(16).toString("base64");
            const encrypted = Crypto.encrypt(value, key, "aes-128-cbc");
            const decrypted = Crypto.decrypt(encrypted, key, "aes-128-cbc");

            expect(decrypted).toBe(value);
        });

        test("Encryption works even when specifying the encryption method (AES-192-CBC).", () => {
            const value = "bonjour!";
            const key = crypto.randomBytes(24).toString("base64");
            const encrypted = Crypto.encrypt(value, key, "aes-192-cbc");
            const decrypted = Crypto.decrypt(encrypted, key, "aes-192-cbc");

            expect(decrypted).toBe(value);
        });

        test("Emojis and other special characters encrypt and decrypt correctly.", () => {
            const value = "👶👶🏻مرحبا!";
            const key = crypto.randomBytes(24).toString("base64");
            const encrypted = Crypto.encrypt(value, key, "aes-192-cbc");
            const decrypted = Crypto.decrypt(encrypted, key, "aes-192-cbc");

            expect(decrypted).toBe(value);
        });

        test("When present in both, argument override environment variable for the secret key.", () => {
            const value = "你好";
            const key1 = crypto.randomBytes(32).toString("base64");
            const key2 = crypto.randomBytes(32).toString("base64");

            process.env["SECRET_KEY"] = key1;
            const encrypted = Crypto.encrypt(value, key2);
            const decrypted = Crypto.decrypt(encrypted, key2);
            delete process.env["SECRET_KEY"];

            expect(decrypted).toBe(value);
        });
    });

    describe("Negative Testing", () => {

        test("An error occurs when the secret key is missing.", () => {
            const value = "こんにちは";

            expect(() => Crypto.encrypt(value)).toThrowError("`SECRET_KEY` is required.");
        });

        test("An error occurs if the encryption key length is incorrect. (AES-128-CBC)", () => {
            const value = "こんにちは";
            const key = crypto.randomBytes(4).toString("base64");

            expect(() => Crypto.encrypt(value, key, "aes-128-cbc"))
                .toThrowError(/The `SECRET_KEY` must be 16 bytes long when using AES-128-CBC.\n[\s\S]*/);
        });

        test("An error occurs if the encryption key length is incorrect. (AES-192-CBC)", () => {
            const value = "こんにちは";
            const key = crypto.randomBytes(4).toString("base64");

            expect(() => Crypto.encrypt(value, key, "aes-192-cbc"))
                .toThrowError(/The `SECRET_KEY` must be 24 bytes long when using AES-192-CBC.\n[\s\S]*/);
        });

        test("An error occurs if the encryption key length is incorrect. (AES-256-CBC)", () => {
            const value = "こんにちは";
            const key = crypto.randomBytes(4).toString("base64");

            expect(() => Crypto.encrypt(value, key, "aes-256-cbc"))
                .toThrowError(/The `SECRET_KEY` must be 32 bytes long when using AES-256-CBC.\n[\s\S]*/);
        });

        test("Decryption fails when using a different secret key than for encryption.", () => {
            const value = "ヤッホ！";
            const key1 = crypto.randomBytes(32).toString("base64");
            const key2 = crypto.randomBytes(32).toString("base64");

            const encrypted = Crypto.encrypt(value, key1);

            expect(() => Crypto.decrypt(encrypted, key2)).toThrowError(/error:1C800064:Provider routines::bad decrypt/);
        });
    });
});
