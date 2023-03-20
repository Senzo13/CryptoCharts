import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import createTransporter from "../../../src/utils/smtp/methods/createTransporter";
import { email } from "../../../src/utils/smtp/methods/sendEmail";

describe("sendEmail", () => {
  let transporter;
  let sendMailSpy: jest.SpyInstance;
  beforeEach(async () => {
    // Create a mock transporter for the test
    transporter = {
      sendMail: jest.fn().mockReturnValue(Promise.resolve({})),
    };
    sendMailSpy = jest.spyOn(transporter, "sendMail");
  });

  it("should send an email", async () => {
    const dest = "test@example.com";
    const subject = "Test email";
    const text = "This is a test email.";
    const html = "<p>This is a test email.</p>";

    const result = await email.sendEmail(
      transporter,
      dest,
      subject,
      text,
      html
    );
    expect(result).toEqual({});
    expect(transporter.sendMail).toHaveBeenCalledWith({
      from: '"Crypto world 👻" <noreply.cryptoworld@gmail.com',
      to: dest,
      subject: subject,
      text: text,
      html: html,
    });
  });
});
