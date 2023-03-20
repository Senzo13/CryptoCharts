import { generateToken, verify } from "../../../src/utils/auth/jwt";

describe("Testing JWT methods", () => {
  it("should generate and verify token", async () => {
    const uid = "23F3";
    const token: string | Uint8Array = await generateToken(uid);
    expect(typeof token).toBe("string");
    const verified = await verify(token);
    expect(typeof verified).toBe("object");
    expect(verified.payload.user_id).toBe(uid);
  });
});
