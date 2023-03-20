import express from "express";
import https from "https";
import fs from "fs";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import auth from "./controllers/auth.controller";
import adminController from "./controllers/admin.controller";
import cryptoController from "./controllers/crypto.controller";
import db from "./config/DataBase/mongodb";
import cors from "cors";
import healthCheck from "./controllers/healthcheck.controller";
import userController from "./controllers/user.controller";
import { verify } from "./utils/auth/jwt";

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8081 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    const symbol = JSON.parse(message).symbol;
    console.log(`Listening for symbol: ${symbol}`);
    const socket = new WebSocket(
      `wss://stream.binance.com/ws/${symbol.toLowerCase()}@kline_1m`
    );
    socket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      // console.log(`Data received for symbol ${symbol}:`, data.k.c);
      ws.send(event.data);
    };
    socket.onclose = function () {
      ws.close();
    };
    socket.onerror = function (error) {
      console.log(error);
    };
  });
});
console.log("WebSocket server is running on port 8081");

db()
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

dotenv.config();
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("../br-project-b0179-firebase-adminsdk-fswm4-1ef41b8105.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//JWT Bearer middleware

//Ignored routes
const ignoredRoutes = ["/auth/login", "/auth/register", "/healthcheck/ping", "/api/crypto", "/api/get_historical_bars"];
app.use((req, res, next) => {
  if (ignoredRoutes.includes(req.path)) {
    console.log("Ignored route: " + req.path);
    next();
    return;
  }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  console.log("Token: " + token);
  
  verify(token)
    .then(() => {
      console.log("JWT valid");
      return next();
    })
    .catch(() => {
      admin
        .auth()
        .verifyIdToken(token)
        .then(() => {
          console.log("Firebase token valid");
          return next();
        })
        .catch((error) => {
          console.log("Firebase token not valid");
          return res.status(401).json({error: error.message});
        });
    });
});

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/auth", auth);
app.use("/healthcheck", healthCheck);
app.use("/api", userController);
app.use("/api", adminController);
app.use("/api", cryptoController);
// Utilisation d'une route pour choisir le symbole

export const listener = app.listen(process.env.APP_PORT, () =>
  console.info(`The application is running on port: ${process.env.APP_PORT}`)
);

export default app;
