import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
const sendEmail = async (
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>,
  dest: string,
  sub: string,
  text: string,
  html: string
): Promise<SMTPTransport.SentMessageInfo> => {
  return await transporter.sendMail({
    from: '"Crypto world 👻" <noreply.cryptoworld@gmail.com', // sender address
    to: dest, // list of receivers
    subject: sub, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
};
export const email = {
  sendEmail,
}

export default sendEmail;
