"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const smtp_1 = require("./utils/smtp");
const crypto_1 = require("crypto");
const dotenv_1 = __importDefault(require("dotenv"));
const createSecretKey_1 = __importDefault(
  require("./utils/auth/createSecretKey")
);
const body_parser_1 = __importDefault(require("body-parser"));
const renderHTML_1 = __importDefault(
  require("./utils/smtp/methods/renderHTML")
);
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get("/ping", (req, res) => {
  return res.status(200).json({
    message: "pong",
  });
});
app.post("/email-verification", async (req, res) => {
  const { user_email, user_id } = req.body;
  if (!user_email) {
    return res.status(400).json({
      code: "missing_email",
    });
  }
  if (!user_id) {
    return res.status(400).json({
      code: "missing_uid",
    });
  }
  const secret = (0, createSecretKey_1.default)();
  const hash = (0, crypto_1.createHmac)("sha256", secret)
    .update(JSON.stringify({ uid: user_id }))
    .digest("hex");
  const params = {
    dest: user_email,
    sub: "Activate your crypto world account",
    text: "In order to activate your account, follow this url",
    html: await (0, renderHTML_1.default)("confirmAccount.html", {
      url: `${process.env.FRONT_URL}/confirm-account?token=${hash}`,
    }),
  };
  (0, smtp_1.main)(params.dest, params.sub, params.text, params.html)
    .then(() => {
      res.status(200).send({
        message: "ok",
      });
    })
    .catch((error) => console.log(error));
});
exports.listener = https_1.default
  .createServer(
    //     {
    // key: fs_1.default.readFileSync("ssl/private.pem"),
    // cert: fs_1.default.readFileSync("ssl/public.pem"),
    // }
    app
  )
  .listen(process.env.APP_PORT, () =>
    console.info(
      "\x1b[46m",
      `The application is running on port: ${process.env.APP_PORT}`
    )
  );
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBQzFCLDRDQUFvQjtBQUNwQix1Q0FBb0M7QUFDcEMsbUNBQW9DO0FBQ3BDLG9EQUE0QjtBQUM1QixtRkFBa0Q7QUFDbEQsOERBQXFDO0FBQ3JDLGlGQUF5RDtBQUN6RCxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDaEQsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3pDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksRUFBRSxlQUFlO1NBQ3RCLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsSUFBSSxFQUFFLGFBQWE7U0FDcEIsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFBLHlCQUFNLEdBQUUsQ0FBQztJQUN4QixNQUFNLElBQUksR0FBRyxJQUFBLG1CQUFVLEVBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztTQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQixNQUFNLE1BQU0sR0FBRztRQUNiLElBQUksRUFBRSxVQUFVO1FBQ2hCLEdBQUcsRUFBRSxvQ0FBb0M7UUFDekMsSUFBSSxFQUFFLG9EQUFvRDtRQUMxRCxJQUFJLEVBQUUsTUFBTSxJQUFBLG9CQUFVLEVBQUMscUJBQXFCLEVBQUU7WUFDNUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLDBCQUEwQixJQUFJLEVBQUU7U0FDOUQsQ0FBQztLQUNILENBQUM7SUFDRixJQUFBLFdBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3RELElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBSVUsUUFBQSxRQUFRLEdBQUcsZUFBSztLQUMxQixZQUFZLENBQ1g7SUFDRSxHQUFHLEVBQUUsWUFBRSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUN2QyxJQUFJLEVBQUUsWUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztDQUN4QyxFQUNELEdBQUcsQ0FDSjtLQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FDakMsT0FBTyxDQUFDLElBQUksQ0FDVixVQUFVLEVBQ1YsdUNBQXVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQzlELENBQ0YsQ0FBQztBQUNKLGtCQUFlLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBodHRwcyBmcm9tIFwiaHR0cHNcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBtYWluIH0gZnJvbSBcIi4vdXRpbHMvc210cFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVIbWFjIH0gZnJvbSBcImNyeXB0b1wiO1xyXG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcclxuaW1wb3J0IGNyZWF0ZSBmcm9tIFwiLi91dGlscy9hdXRoL2NyZWF0ZVNlY3JldEtleVwiO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSBcIi4vdXRpbHMvc210cC9tZXRob2RzL3JlbmRlckhUTUxcIjtcclxuZG90ZW52LmNvbmZpZygpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5cclxuYXBwLmdldChcIi9waW5nXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICBtZXNzYWdlOiBcInBvbmdcIixcclxuICB9KTtcclxufSk7XHJcblxyXG5hcHAucG9zdChcIi9lbWFpbC12ZXJpZmljYXRpb25cIixhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IHVzZXJfZW1haWwsIHVzZXJfaWQgfSA9IHJlcS5ib2R5O1xyXG4gIGlmICghdXNlcl9lbWFpbCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgY29kZTogXCJtaXNzaW5nX2VtYWlsXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKCF1c2VyX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICBjb2RlOiBcIm1pc3NpbmdfdWlkXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3Qgc2VjcmV0ID0gY3JlYXRlKCk7XHJcbiAgY29uc3QgaGFzaCA9IGNyZWF0ZUhtYWMoXCJzaGEyNTZcIiwgc2VjcmV0KVxyXG4gICAgLnVwZGF0ZShKU09OLnN0cmluZ2lmeSh7IHVpZDogdXNlcl9pZCB9KSlcclxuICAgIC5kaWdlc3QoXCJoZXhcIik7XHJcblxyXG4gIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIGRlc3Q6IHVzZXJfZW1haWwsXHJcbiAgICBzdWI6IFwiQWN0aXZhdGUgeW91ciBjcnlwdG8gd29ybGQgYWNjb3VudFwiLFxyXG4gICAgdGV4dDogXCJJbiBvcmRlciB0byBhY3RpdmF0ZSB5b3VyIGFjY291bnQsIGZvbGxvdyB0aGlzIHVybFwiLFxyXG4gICAgaHRtbDogYXdhaXQgcmVuZGVySFRNTChcImNvbmZpcm1BY2NvdW50Lmh0bWxcIiwge1xyXG4gICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LkZST05UX1VSTH0vY29uZmlybS1hY2NvdW50P3Rva2VuPSR7aGFzaH1gLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBtYWluKHBhcmFtcy5kZXN0LCBwYXJhbXMuc3ViLCBwYXJhbXMudGV4dCwgcGFyYW1zLmh0bWwpXHJcbiAgLnRoZW4oKCkgPT4ge1xyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICBtZXNzYWdlOiBcIm9rXCJcclxuICAgIH0pXHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlbmVyID0gaHR0cHNcclxuICAuY3JlYXRlU2VydmVyKFxyXG4gICAge1xyXG4gICAgICBrZXk6IGZzLnJlYWRGaWxlU3luYyhcInNzbC9wcml2YXRlLnBlbVwiKSxcclxuICAgICAgY2VydDogZnMucmVhZEZpbGVTeW5jKFwic3NsL3B1YmxpYy5wZW1cIiksXHJcbiAgICB9LFxyXG4gICAgYXBwXHJcbiAgKVxyXG4gIC5saXN0ZW4ocHJvY2Vzcy5lbnYuQVBQX1BPUlQsICgpID0+XHJcbiAgICBjb25zb2xlLmluZm8oXHJcbiAgICAgIFwiXFx4MWJbNDZtXCIsXHJcbiAgICAgIGBUaGUgYXBwbGljYXRpb24gaXMgcnVubmluZyBvbiBwb3J0OiAke3Byb2Nlc3MuZW52LkFQUF9QT1JUfWBcclxuICAgIClcclxuICApO1xyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcbiJdfQ==
