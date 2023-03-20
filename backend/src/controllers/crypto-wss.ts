import socketIOClient from "socket.io-client";

export function Scrawler(symbol : string) {

  let socket = socketIOClient("wss://stream.binance.com:9443/ws/btcusdt@kline_1s", {
    path: '/ws'
  });
  
  let wanted_values = ["symbol", "timestamp", "o", "h", "l", "c", "q"];
  
  socket.on("connect", () => {
    console.log("Connection established to Binance BTCUSD stream");
    socket.emit('subscribe', `${symbol}@kline_1s`);
  });
  
  socket.on("message", (data: any) => {
    console.log(data);
    let date = new Date(data.E).toISOString();
    data.k.timestamp = date;
    data = data.k;

    let wantedData = {};
    Object.keys(data)
      .filter((key) => wanted_values.includes(key))
      .forEach((key) => {
        wantedData[key] = data[key];
      });
    // console.log(wantedData);
  });
  
  socket.on("disconnect", () => {
    console.log("Connection closed");
  });
  
  socket.on("error", (error: any) => {
    console.log(`Error: ${error}`);
  });
}
