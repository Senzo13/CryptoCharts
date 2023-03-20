import { google } from "googleapis";
import dotenv from "dotenv";
import { getAccessToken } from "../../../src/utils/smtp";
dotenv.config();
const OAuth2 = google.auth.OAuth2;
const clientSecret = process.env.SMTP_CLIENT_SECRET;
const redirectUri = process.env.SMTP_REDIRECT_URI;
const refreshToken = process.env.SMTP_REFRESH_TOKEN;
const clientId = process.env.SMTP_CLIENT_ID;

describe("Testing smtp functionalities", () => {
  it("should return a token", () => {
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    getAccessToken(oauth2Client).then((token) =>
      expect(token.res.status).toBe(200)
    );
  });
  it("should fail creating a token", async () => {
    const oauth2Client = new OAuth2(undefined, clientSecret, redirectUri);
    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });
   
    await expect(getAccessToken(oauth2Client)).rejects.toThrowError();
    
    
  });
});
