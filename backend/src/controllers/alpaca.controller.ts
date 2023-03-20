import Alpaca from "@alpacahq/alpaca-trade-api";
import { convertDateWithValue } from "../utils/date/ConvertDateWithValue";

const alpaca = new Alpaca({
  keyId: process.env.ALPACA_KEY,
  secretKey: process.env.ALPACA_SECRET_KEY,
  paper: true,
});

async function getHistorical(symbol: any, options: any) {
  let bars = [];
  let resp = alpaca.getCryptoBars(symbol, options);
  for await (let bar of resp) {
    bars.push(bar);
  }
  return bars;
}

const getHistoricalBars = async (req: any, res: any) => {
  const options = {
    start: convertDateWithValue(req.query.start),
    end: new Date(new Date().setDate(new Date().getDate())), // Current date
    timeframe: req.query.timeframe,
    limit: 1365,
  };

  getHistorical(req.query.symbol, options)
    .then((bars) => {
      res.status(200).json({ message: bars });
    })
    .catch((err) => {
      res.status(404).json({ message: "bars not found" });
    });
};

export default {
  getHistoricalBars,
};
