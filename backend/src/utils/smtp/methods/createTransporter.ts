import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const createTransporter = async (
  accessToken: Promise<unknown>,
  user: string,
  clientId: string,
  clientSecret: string,
  refreshToken: string
) => {
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: user, // generated ethereal user
        accessToken: await accessToken,
        clientId: clientId,
        clientSecret: clientSecret, // generated ethereal password
        refreshToken: refreshToken,
      }
    } as SMTPTransport.Options);
};

export default createTransporter;
