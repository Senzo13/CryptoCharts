import {
  deleteUserById,
  findAllUsers,
  findUserById,
  updateUserEmail,
  updateUserUsername,
} from "../services/user.service";
import router from "./auth.controller";
import { Scrawler } from "./crypto-wss";
const io = require("socket.io-client");
const socket = io("wss://stream.binance.com:9443/ws/btcusdt@kline_1s", {
  transports: ["websocket"],
});
import alpacaController from "../controllers/alpaca.controller";

router.get("/get_historical_bars", alpacaController.getHistoricalBars);

router.get("/socket", (req, res) => {
  res.status(200).json({ code: "connect with" });
  const wanted_values = ["symbol", "timestamp", "o", "h", "l", "c", "q"];
  socket.on("connect", function () {
    console.log("Connected to Binance WebSocket");
    res.status(200).json({ code: "connect with binance" });
  });

  socket.on("kline", function (data) {
    const filteredData = {};
    wanted_values.forEach((value) => {
      filteredData[value] = data[value];
    });
    console.log(filteredData);
    res.status(200).json(filteredData);
    console.log("Received data from Binance WebSocket:", filteredData);
  });

  socket.on("disconnect", function () {
    console.log("Disconnected from Binance WebSocket");
  });
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ code: "missing_user_id" });
  }

  findUserById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ code: "user_not_found" });
      }
      return res.status(200).json(data);
    })
    .catch(() => {
      return res.status(500).json({ code: "internal_server_error" });
    });
});

router.get("/get_realtime_bars", (req, res) => {
  const symbol = req.body.symbol;
  if (!symbol) {
    return res.status(400).json({ code: "missing_symbol" });
  } else {
    Scrawler(symbol.toLowerCase());
    return res.status(200).json({ code: "success" });
  }

  // Scrawler(symbol)
  //   .then((data) => {
  //     if (!data) {
  //       return res.status(404).json({ code: "symbol_not_found" });
  //     }
  //     return res.status(200).json(data);
  //   })
  //   .catch(() => {
  //     return res.status(500).json({ code: "internal_server_error" });
  //   });
});

router.get("/users", (req, res) => {
  findAllUsers()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json({ code: "internal_server_error" });
    });
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ code: "missing_user_id" });
  }

  deleteUserById(id)
    .then((data) => {
      if (data.deletedCount === 0) {
        return res.status(404).json({ code: "user_not_found" });
      }

      return res.status(204).send();
    })
    .catch((e) => {
      console.log(e);

      res.status(500).json({
        code: "unhandled_error",
      });
    });
});

router.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ code: "missing_user_id" });
  }

  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ code: "missing_username" });
  }

  updateUserUsername(id, username)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch(() => {
      return res.status(500).json({ code: "internal_server_error" });
    });
});

router.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ code: "missing_user_id" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ code: "missing_username" });
  }

  updateUserEmail(id, email)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json({ code: "internal_server_error" });
    });
});

export default router;
