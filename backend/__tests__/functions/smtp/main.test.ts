import { createHmac } from "crypto";
import { SentMessageInfo } from "nodemailer";
import create from "../../../src/utils/auth/createSecretKey";
import { accessToken, main } from "../../../src/utils/smtp";
import createTransporter from "../../../src/utils/smtp/methods/createTransporter";
import renderHTML from "../../../src/utils/smtp/methods/renderHTML";
import * as sendEmail from "../../../src/utils/smtp/methods/sendEmail";

const clientId = process.env.SMTP_CLIENT_ID;
const clientSecret = process.env.SMTP_CLIENT_SECRET;
const redirectUri = process.env.SMTP_REDIRECT_URI;
const refreshToken = process.env.SMTP_REFRESH_TOKEN;
const user = process.env.SMTP_USER;
describe("Testing main method", () => {
  it("Should resolve main", async () => {
    jest
      .spyOn(sendEmail.email, "sendEmail")
      .mockImplementation(() => Promise.resolve({} as SentMessageInfo));

    await expect(main("dest@example.com", "subject", "text", "html")).resolves;
  }, 10000);
  it("should call sendEmail while calling main", async () => {
    // Create a spy for the sendEmail function
    const sendEmailSpy = jest
      .spyOn(sendEmail.email, "sendEmail")
      .mockImplementation(() => Promise.resolve({} as SentMessageInfo));

    // Call the main function

    // Assert that the sendEmail function was called
    await main("dest@example.com", "subject", "text", "html");

    expect(sendEmailSpy).toHaveBeenCalled();
  });
});
