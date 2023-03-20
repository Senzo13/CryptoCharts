import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";
import createTransporter from "./methods/createTransporter";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import sendEmail, { email } from "./methods/sendEmail";
dotenv.config();
const OAuth2 = google.auth.OAuth2;
const clientId = process.env.SMTP_CLIENT_ID;
const clientSecret = process.env.SMTP_CLIENT_SECRET;
const redirectUri = process.env.SMTP_REDIRECT_URI;
const refreshToken = process.env.SMTP_REFRESH_TOKEN;
const user = process.env.SMTP_USER;

const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
oauth2Client.setCredentials({
  refresh_token: refreshToken,
});
export const getAccessToken = async (client: OAuth2Client) => {
  return client.getAccessToken();
};
export const accessToken = new Promise(
  (resolve: (value: unknown) => void, reject: (reason?: unknown) => void) => {
    getAccessToken(oauth2Client)
      .then((token) => resolve(token))
      .catch((err) => reject(err));
  }
);

export const main = async (dest, sub, text, html) => {
  const transporter = await createTransporter(accessToken, user, clientId, clientSecret, refreshToken)
  await email.sendEmail(transporter, dest, sub, text, html).then(() => {
    console.log("Message sent");
  }).catch(error => console.log(error))
};

export default {
  main
}