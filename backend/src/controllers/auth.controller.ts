import express from "express";
const router = express.Router();
import { main } from "../utils/smtp";
import { createHmac, pbkdf2Sync, randomBytes } from "crypto";
import create from "../utils/auth/createSecretKey";
import renderHTML from "../utils/smtp/methods/renderHTML";
import userModel, { IUser } from "../models/user.model";
import {
  findOneUserByEmail,
  updateUserPassword,
  updateUserVerification,
} from "../services/user.service";
import { generateToken } from "../utils/auth/jwt";
import {
  compareHashAndPassword,
  hashPassword,
} from "../utils/auth/hashPassword";
router.post("/login", async (req, res) => {
  const { email, password, provider } = req.body;
  if (!email) {
    return res.status(400).json({
      code: "missing_email",
      message: "Please provide an email",
    });
  }

  const user = await findOneUserByEmail(email);
  if (user.provider && !provider) {
    res.status(400).json({
      code: "wrong_provider",
      message: "This user is already registered with another provider",
    });
  }

  if (provider && user && provider !== user.provider) {
    return res.status(400).json({
      code: "wrong_provider",
      message: "This user is already registered with another provider",
    });
  }

  if (!user) {
    if (provider) {
      const user = await userModel.create({
        email,
        provider,
      });
      return res.status(200).json({
        token: await generateToken({
          id: user._id,
        }),
      });
    }
    return res.status(404).json({
      code: "user_not_found",
      message: "User not found",
    });
  }

  if (user && provider) {
    return res.status(200).json({
      token: await generateToken({
        id: user._id,
      }),
    });
  }

  const isSame = await compareHashAndPassword(password, user.password);

  if (isSame) {
    res.status(200).json({
      token: await generateToken({
        id: user._id,
      }),
    });
  } else {
    res.status(401).json({
      code: "wrong_password",
      message: "Wrong password",
    });
  }
});

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  if (!email) {
    return res.status(400).json({
      code: "missing_email",
    });
  }
  if (!username) {
    return res.status(400).json({
      code: "missing_username",
    });
  }
  if (!password) {
    return res.status(400).json({
      code: "missing_password",
    });
  }

  let user;
  try {
    user = await userModel.create({
      email,
      username,
      password,
    });
  } catch (error) {
    console.log(error.code);
    switch (error.code) {
      case 11000:
        return res
          .status(409)
          .json({ code: "email_already_exists_or_malformed" });
      default:
        console.log(error);

        return res.status(500).json({ code: "internal_server_error" });
    }
  }

  const secret = create();

  const hash = createHmac("sha256", secret)
    .update(JSON.stringify({ uid: user._id.toString() }))
    .digest("hex");

  const params = {
    dest: email,
    sub: "Activate your crypto world account",
    text: "In order to activate your account, follow this url",
    html: await renderHTML("confirmAccount.html", {
      url: `${process.env.FRONT_URL}/confirm-account?email=${email}&token=${hash}`,
    }),
  };
  main(params.dest, params.sub, params.text, params.html)
    .then(() => {
      res.status(200).send({
        message: "ok  ²",
      });
    })
    .catch((error) => {
      console.log(error);

      res.status(500).send({ code: "unhandled_error" });
    });
});

router.post("/confirm-account", async (req, res) => {
  const { email, token } = req.body;
  if (!email) {
    return res.status(400).json({
      code: "missing_email",
    });
  }

  if (!token) {
    return res.status(400).json({
      code: "missing_token",
    });
  }
  let user;
  try {
    user = await findOneUserByEmail(email);
  } catch (error) {
    return res.status(500).json({ code: "internal_server_error" });
  }
  if (!user) {
    return res.status(404).json({ code: "user_not_found" });
  }

  if (user.verified) {
    return res.status(403).json({ code: "already_verified" });
  }

  const secret = create();
  const hash = createHmac("sha256", secret)
    .update(JSON.stringify({ uid: user._id?.toString() }))
    .digest("hex");
  if (hash !== token) {
    return res.status(401).json({ code: "invalid_token" });
  } else {
    updateUserVerification(user._id)
      .then(() => {
        res.status(200).json({ code: "ok" });
      })
      .catch((e) => {
        console.error(e);
        res.status(500).json({ code: "internal_server_error" });
      });
  }
});

router.post("/reset_password", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      code: "missing_email",
    });
  }
  let user;
  try {
    user = await findOneUserByEmail(email);
  } catch (error) {
    console.log(error);

    return res.status(404).json({ code: "user_not_found" });
  }

  if (!user) {
    return res.status(404).json({ code: "user_not_found" });
  }

  const secret = create();
  const hash = createHmac("sha256", secret)
    .update(JSON.stringify({ uid: user._id?.toString() }))
    .digest("hex");

  const params = {
    dest: email,
    sub: "Reset your password",
    text: "In order to reset your password, please follow the instructions",
    html: await renderHTML("changePassword.html", {
      url: `${process.env.FRONT_URL}/change-password?email=${email}&token=${hash}`,
    }),
  };

  main(params.dest, params.sub, params.text, params.html).then(() => {
    res.status(200).send({
      message: "ok",
    });
  });
});

router.post("/change-password", async (req, res) => {
  const { email, token, password } = req.body;
  if (!email) {
    return res.status(400).json({
      code: "missing_email",
    });
  }

  if (!token) {
    return res.status(400).json({
      code: "missing_token",
    });
  }
  if (!password) {
    return res.status(400).json({
      code: "missing_password",
    });
  }
  let user;
  try {
    user = await findOneUserByEmail(email);
  } catch (error) {
    return res.status(500).json({ code: "internal_server_error" });
  }
  if (!user) {
    return res.status(404).json({ code: "user_not_found" });
  }
  console.log(user);

  const secret = create();
  const hash = createHmac("sha256", secret)
    .update(JSON.stringify({ uid: user._id.toString() }))
    .digest("hex");
  if (hash !== token) {
    return res.status(401).json({ code: "invalid_token" });
  } else {
    const salt = randomBytes(16).toString("hex");

    const hashedPassword = await hashPassword(password);
    console.log("New password", hashPassword);
    updateUserPassword(user._id, hashedPassword)
      .then(() => {
        res.status(200).json({ code: "ok" });
      })
      .catch((e) => {
        console.error(e);
        res.status(500).json({ code: "internal_server_error" });
      });
  }
});

export default router;
