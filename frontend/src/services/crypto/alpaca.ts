import axios from 'axios';

export function getHistoricalBar(symbol: string, start: string, timeframe: string) {
  const config = {
    method: 'GET',
    url: 'https://localhost:8080/api/get_historical_bars',
    params: {
      symbol,
      start,
      timeframe
    }
  };

  return axios(config);
}
