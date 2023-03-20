"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.getAccessToken = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const OAuth2 = googleapis_1.google.auth.OAuth2;
const clientId = process.env.SMTP_CLIENT_ID;
const clientSecret = process.env.SMTP_CLIENT_SECRET;
const redirectUri = process.env.SMTP_REDIRECT_URI;
const refreshToken = process.env.SMTP_REFRESH_TOKEN;
const user = process.env.SMTP_USER;
const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
oauth2Client.setCredentials({
    refresh_token: refreshToken,
});
const getAccessToken = async (client) => {
    return client.getAccessToken();
    //   try {
    //     resolve(await client.getAccessToken());
    //   } catch (error) {
    //     reject(error.response.data.error);
    //   }
};
exports.getAccessToken = getAccessToken;
const accessToken = new Promise((resolve, reject) => {
    (0, exports.getAccessToken)(oauth2Client)
        .then((token) => resolve(token))
        .catch(() => reject("unable to generate token"));
});
const main = async (dest, sub, text, html) => {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: user,
            accessToken,
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken,
        },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Crypto world 👻" <noreply.cryptoworld@gmail.com',
        to: dest,
        subject: sub,
        text: text,
        html: html, // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
};
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvc210cC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0REFBb0M7QUFDcEMsMkNBQW9DO0FBQ3BDLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sTUFBTSxHQUFHLG1CQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUM1QyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0FBQ3BELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDbEQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztBQUNwRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUVuQyxNQUFNLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRXJFLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFDMUIsYUFBYSxFQUFFLFlBQVk7Q0FDNUIsQ0FBQyxDQUFDO0FBQ0ksTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLE1BQW9CLEVBQUUsRUFBRTtJQUMzRCxPQUFPLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQixVQUFVO0lBQ1YsOENBQThDO0lBQzlDLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsTUFBTTtBQUNSLENBQUMsQ0FBQztBQVBXLFFBQUEsY0FBYyxrQkFPekI7QUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FDN0IsQ0FBQyxPQUFpQyxFQUFFLE1BQWtDLEVBQUUsRUFBRTtJQUN4RSxJQUFBLHNCQUFjLEVBQUMsWUFBWSxDQUFDO1NBQ3pCLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FDRixDQUFDO0FBQ0ssTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2xELE1BQU0sV0FBVyxHQUFHLG9CQUFVLENBQUMsZUFBZSxDQUFDO1FBQzdDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLElBQUk7WUFDVixXQUFXO1lBQ1gsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsWUFBWSxFQUFFLFlBQVk7U0FDM0I7S0FDRixDQUFDLENBQUM7SUFFSCwwQ0FBMEM7SUFDMUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3RDLElBQUksRUFBRSxrREFBa0Q7UUFDeEQsRUFBRSxFQUFFLElBQUk7UUFDUixPQUFPLEVBQUUsR0FBRztRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZO0tBQ3pCLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELG1FQUFtRTtJQUVuRSxrRUFBa0U7SUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxvQkFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQyxDQUFDO0FBN0JXLFFBQUEsSUFBSSxRQTZCZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XHJcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gXCJnb29nbGVhcGlzXCI7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5pbXBvcnQgeyBPQXV0aDJDbGllbnQgfSBmcm9tIFwiZ29vZ2xlLWF1dGgtbGlicmFyeVwiO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcbmNvbnN0IE9BdXRoMiA9IGdvb2dsZS5hdXRoLk9BdXRoMjtcclxuY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5TTVRQX0NMSUVOVF9JRDtcclxuY29uc3QgY2xpZW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU01UUF9DTElFTlRfU0VDUkVUO1xyXG5jb25zdCByZWRpcmVjdFVyaSA9IHByb2Nlc3MuZW52LlNNVFBfUkVESVJFQ1RfVVJJO1xyXG5jb25zdCByZWZyZXNoVG9rZW4gPSBwcm9jZXNzLmVudi5TTVRQX1JFRlJFU0hfVE9LRU47XHJcbmNvbnN0IHVzZXIgPSBwcm9jZXNzLmVudi5TTVRQX1VTRVI7XHJcblxyXG5jb25zdCBvYXV0aDJDbGllbnQgPSBuZXcgT0F1dGgyKGNsaWVudElkLCBjbGllbnRTZWNyZXQsIHJlZGlyZWN0VXJpKTtcclxuXHJcbm9hdXRoMkNsaWVudC5zZXRDcmVkZW50aWFscyh7XHJcbiAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKGNsaWVudDogT0F1dGgyQ2xpZW50KSA9PiB7XHJcbiAgcmV0dXJuIGNsaWVudC5nZXRBY2Nlc3NUb2tlbigpO1xyXG4gIC8vICAgdHJ5IHtcclxuICAvLyAgICAgcmVzb2x2ZShhd2FpdCBjbGllbnQuZ2V0QWNjZXNzVG9rZW4oKSk7XHJcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgLy8gICB9XHJcbn07XHJcbmNvbnN0IGFjY2Vzc1Rva2VuID0gbmV3IFByb21pc2UoXHJcbiAgKHJlc29sdmU6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPzogdW5rbm93bikgPT4gdm9pZCkgPT4ge1xyXG4gICAgZ2V0QWNjZXNzVG9rZW4ob2F1dGgyQ2xpZW50KVxyXG4gICAgICAudGhlbigodG9rZW4pID0+IHJlc29sdmUodG9rZW4pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gcmVqZWN0KFwidW5hYmxlIHRvIGdlbmVyYXRlIHRva2VuXCIpKTtcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCBtYWluID0gYXN5bmMgKGRlc3QsIHN1YiwgdGV4dCwgaHRtbCkgPT4ge1xyXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgaG9zdDogXCJzbXRwLmdtYWlsLmNvbVwiLFxyXG4gICAgcG9ydDogNDY1LFxyXG4gICAgc2VjdXJlOiB0cnVlLCAvLyB0cnVlIGZvciA0NjUsIGZhbHNlIGZvciBvdGhlciBwb3J0c1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB0eXBlOiBcIk9BdXRoMlwiLFxyXG4gICAgICB1c2VyOiB1c2VyLCAvLyBnZW5lcmF0ZWQgZXRoZXJlYWwgdXNlclxyXG4gICAgICBhY2Nlc3NUb2tlbixcclxuICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IGNsaWVudFNlY3JldCwgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHBhc3N3b3JkXHJcbiAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gc2VuZCBtYWlsIHdpdGggZGVmaW5lZCB0cmFuc3BvcnQgb2JqZWN0XHJcbiAgY29uc3QgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcclxuICAgIGZyb206ICdcIkNyeXB0byB3b3JsZCDwn5G7XCIgPG5vcmVwbHkuY3J5cHRvd29ybGRAZ21haWwuY29tJywgLy8gc2VuZGVyIGFkZHJlc3NcclxuICAgIHRvOiBkZXN0LCAvLyBsaXN0IG9mIHJlY2VpdmVyc1xyXG4gICAgc3ViamVjdDogc3ViLCAvLyBTdWJqZWN0IGxpbmVcclxuICAgIHRleHQ6IHRleHQsIC8vIHBsYWluIHRleHQgYm9keVxyXG4gICAgaHRtbDogaHRtbCwgLy8gaHRtbCBib2R5XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW50OiAlc1wiLCBpbmZvLm1lc3NhZ2VJZCk7XHJcbiAgLy8gTWVzc2FnZSBzZW50OiA8YjY1OGY4Y2EtNjI5Ni1jY2Y0LTgzMDYtODdkNTdhMGI0MzIxQGV4YW1wbGUuY29tPlxyXG5cclxuICAvLyBQcmV2aWV3IG9ubHkgYXZhaWxhYmxlIHdoZW4gc2VuZGluZyB0aHJvdWdoIGFuIEV0aGVyZWFsIGFjY291bnRcclxuICBjb25zb2xlLmxvZyhcIlByZXZpZXcgVVJMOiAlc1wiLCBub2RlbWFpbGVyLmdldFRlc3RNZXNzYWdlVXJsKGluZm8pKTtcclxufTtcclxuIl19