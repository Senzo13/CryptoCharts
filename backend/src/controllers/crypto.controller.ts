const Cryptocurrency = require('../models/cryptocurrency.model');
import {
  FindAllCryptoCurrencies,
  CreateCryptoCurrency
} from "../services/cryptocurrency.service";
import express from "express";
const router = express.Router();

router.get("/crypto", (req, res) => {
  FindAllCryptoCurrencies()
    .then((data) => {
      return res.status(200).json(data.filter(el => el.activated));      
    })
    .catch((error) => {
      return res.status(500).json({ code: error });
    });
});

router.post("/crypto/:crypto", (req, res) => {
  CreateCryptoCurrency(req.params.crypto, true)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json({ code: error });
    });
});

export default router;