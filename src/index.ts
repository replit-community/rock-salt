import crypto from "crypto";

const SEPARATOR = ".";

export default class RockSalt {
    static generateSalt(length = 16) {
        return crypto
            .randomBytes(Math.ceil(length / 2))
            .toString("hex")
            .substring(0, length);
    }

    static hash(password: string, salt: string) {
        const hashedPassword = crypto
            .createHmac("sha512", salt)
            .update(password)
            .digest("hex");

        return `${salt}${SEPARATOR}${hashedPassword}`;
    }

    static compare(password: string, saltHashedPassword: string) {
        const salt = saltHashedPassword.split(SEPARATOR)[0];

        return RockSalt.hash(password, salt) === saltHashedPassword;
    }
}
