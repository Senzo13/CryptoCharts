import dotenv from "dotenv";
import { google } from "googleapis";
import { getAccessToken } from "../../../src/utils/smtp";
import createTransporter from "../../../src/utils/smtp/methods/createTransporter";
dotenv.config();
const OAuth2 = google.auth.OAuth2;
const clientSecret = process.env.SMTP_CLIENT_SECRET;
const redirectUri = process.env.SMTP_REDIRECT_URI;
const refreshToken = process.env.SMTP_REFRESH_TOKEN;
const clientId = process.env.SMTP_CLIENT_ID;
const user = process.env.SMTP_USER;
describe("Testing createTransporter method", () => {
  it("Should return an SMTPTransport.Options object", async () => {
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    const token = getAccessToken(oauth2Client);
    await expect(
      typeof await createTransporter(token, user, "clientId", clientSecret, refreshToken)
    ).toEqual("object")
  }, 10000);
});
