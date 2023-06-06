export default class RockSalt {
    static generateSalt(length?: number): string;
    static hash(password: string, salt: string): string;
    static compare(password: string, saltHashedPassword: string): boolean;
}
