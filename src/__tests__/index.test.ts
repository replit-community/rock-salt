import { describe, expect, it } from "vitest";
import RockSalt from "../index";

describe("RockSalt", () => {
    const password = "My password";
    const notPassword = "Not my password";

    let salt: string;
    let hashedPassword: string;

    it("Generates a salt", () => {
        salt = RockSalt.generateSalt(16);

        expect(salt).toBeTypeOf("string");
        expect(salt.length).toBe(16);
    });

    it("Hashes a password", () => {
        hashedPassword = RockSalt.hash(password, salt);

        expect(hashedPassword).toBeTypeOf("string");
        expect(hashedPassword.includes(".")).toBeTruthy();
    });

    it("Compares a hashed password", () => {
        expect(RockSalt.compare(password, hashedPassword)).toBeTruthy();
        expect(RockSalt.compare(notPassword, hashedPassword)).toBeFalsy();
    });
});
