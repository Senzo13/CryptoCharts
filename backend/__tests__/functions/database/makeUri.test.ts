import makeUri from "../../../src/config/DataBase/makeUri";

describe('Testing make uri function', () => {
    it('should should return local mongo uri string',async () => {
        const uri = makeUri("test", "127.0.0.1");
        expect(uri.startsWith("mongodb://")).toBeTruthy();
    });

    it('should return mongo atlas uri string', () => {
        const uri = makeUri("development", "127.0.0.1");
        expect(uri.startsWith("mongodb+srv://")).toBeTruthy();
    });
});