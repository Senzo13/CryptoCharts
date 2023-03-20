import { ObjectId } from "mongodb";
import CryptocurrencyModel from "../../src/models/cryptocurrency.model";

describe('testing cryptocurrency model', () => { 
    it('When creating a new cryptocurrency, it should send the right object', () => {
        const object = new CryptocurrencyModel({ 
            name: "bitcoin",
            symbol: "test",
            activated:true,
            values:
            [{ 
                timestamp: "20/21/2021",
                exchange: "test",
                open: 1,
                high:1,
                low:1,
                close:1,
                volume:1,
                trade_count:1,
                vwap:1
            }]
        })
      
        expect(object).toBeInstanceOf(CryptocurrencyModel)

    });
});

