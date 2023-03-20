import dotenv from "dotenv";
import { SignJWT, jwtVerify, JWTVerifyResult } from "jose";
import create from "./createSecretKey";
dotenv.config();
const secret = create();
export const generateToken = async (payload): Promise<string | Uint8Array> => {
  console.log(payload);
  
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.APP_ISSUER)
    .setAudience("http://localhost:3000")
    .setExpirationTime("1h")
    .sign(secret);
};

export const verify = async (
  token: string | Uint8Array
): Promise<JWTVerifyResult> => {
  return jwtVerify(token, secret, {
    issuer: process.env.APP_ISSUER,
    audience: "http://localhost:3000",
  });
};
