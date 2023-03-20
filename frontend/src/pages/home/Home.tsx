import React, { useEffect, useState } from 'react';
import CryptoCard from '../../components/cards/CryptoCard';
import SectionLabel from '../../components/sectionLabel/SectionLabel';
import CryptoChart from '../../components/cards/CryptoChart';
import axios from 'axios';
import TopCards from '../../components/top-cards/topCards';
import BlackRockBalance from '../../components/balance/BlackRockBalance';
import { getToken } from '../login/utils/jwt';
import FloatingLoadingButton from '../login/FloatingLoginButton';
import ListingCrypto from '../../components/listing/ListingCrypto';
import SearchBar from '../../components/nav/searchBar/SearchBar';
import BlackRockSvg from '../../assets/black-rock.svg';
import formatNumber from './../../components/formatNumber';

type CryptoObject = {
  name: string;
  currentValue: number;
  evolution: number;
  high: number;
  low: number;
  volume: number;
  tradecount: number;
  imageUrl: string;
};

const Home = () => {
  const [isSelect, setIsSelect] = useState(true);
  const [chartIsShow, setChartIsShow] = useState(false);
  const [cryptoNameSelected, setCryptoNameSelected] = useState('BTC');
  const [cryptoList, setCryptoList] = useState<CryptoObject[]>([]);
  const [cryptoListSetted, setCryptoListSetted] = useState([
    {
      name: '',
      currentValue: 0,
      evolution: 0,
      high: 0,
      low: 0,
      volume: 0,
      tradecount: 0,
      imgUrl: ''
    }
  ]);

  const [myCryptoList, setMyCryptoList] = useState([
    {
      name: '',
      currentValue: 0,
      evolution: 0,
      high: 0,
      low: 0,
      volume: 0,
      tradecount: 0,
      imageUrl: ''
    }
  ]);

  const getCryptocurrenciesNames = async () => {
    const response = await axios.get('http://localhost:8080/api/crypto', {
      params: {
        symbol: ''
      }
    });
    const list: any[] = [];
    response.data.forEach(function (item: any) {
      list.push({
        name: item.symbol,
        currentValue: 0,
        evolution: 0,
        high: 0,
        low: 0,
        volume: 0,
        tradecount: 0,
        imageUrl: ''
      });
    });
    return list;
  };
  //   {
  //     name: 'BTC',
  //     currentValue: 0,
  //     evolution: 0,
  //     high: 0,
  //     low: 0,
  //     volume: 0,
  //     tradecount: 0,
  //     imageUrl: ''
  //   },
  //   {
  //     name: 'ETH',
  //     currentValue: 2678,
  //     evolution: -1.8,
  //     high: 0,
  //     low: 0,
  //     volume: 0,
  //     tradecount: 0,
  //     imageUrl: ''
  //   },
  //   {
  //     name: 'SHIB',
  //     currentValue: 0.692811,
  //     evolution: -1.9,
  //     high: 0,
  //     low: 0,
  //     volume: 0,
  //     tradecount: 99,
  //     imageUrl: ''
  //   },
  //   {
  //     name: 'SOL',
  //     currentValue: 0.692811,
  //     evolution: -1.9,
  //     high: 0,
  //     low: 0,
  //     volume: 0,
  //     tradecount: 99,
  //     imageUrl: ''
  //   },
  //   {
  //     name: 'ICP',
  //     currentValue: 0.692811,
  //     evolution: -1.9,
  //     high: 0,
  //     low: 0,
  //     volume: 0,
  //     tradecount: 99,
  //     imageUrl: ''
  //   },
  //   {
  //     name: 'XRP',
  //     currentValue: 0.511,
  //     evolution: -5.2,
  //     high: 0,
  //     low: 0,
  //     volume: 0,
  //     tradecount: 0,
  //     imageUrl: ''
  //   },
  //   {
  //     name: 'LTC',
  //     currentValue: 1072,
  //     evolution: 8.9,
  //     high: 0,
  //     low: 0,
  //     volume: 0,
  //     tradecount: 99,
  //     imageUrl: ''
  //   }
  // ];

  const getCryptoImgUrl = async (cryptoName: string) => {
    const response = await axios.get('https://min-api.cryptocompare.com/data/coin/generalinfo', {
      params: {
        fsyms: cryptoName,
        tsym: 'USD',
        api_key: '088da2405d05a78198770f4d88e6a4594db052e455568a26faf5fda8e1a80c21'
      }
    });
    return 'https://www.cryptocompare.com/' + response.data.Data[0].CoinInfo.ImageUrl;
  };

  const reinitializeCard = (boolean: boolean) => {
    setIsSelect(boolean);
    setChartIsShow(false);
  };

  useEffect(() => {
    const newCryptoList: any = [];
    const socket = new WebSocket('ws://localhost:8081');
    socket.onopen = function () {
      getCryptocurrenciesNames().then((data: Array<CryptoObject>) => {
        data.forEach((crypto: CryptoObject) => {
          socket.send(JSON.stringify({ symbol: `${crypto.name.toLowerCase()}usdt` }));
        });
        const updatedCryptoList = data.map(async (crypto: { name: string }) => {
          return {
            ...crypto,
            imgUrl: await getCryptoImgUrl(crypto.name)
          };
        });

        Promise.all(updatedCryptoList).then((values: any) => {
          setCryptoListSetted(values);
        });
      });
    };

    socket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      getCryptocurrenciesNames().then(async (cryptoLists: Array<CryptoObject>) => {
        setCryptoList(cryptoLists);
        cryptoLists.forEach(async (crypto: CryptoObject) => {
          if (crypto.name === data.s.substr(0, 3)) {
            newCryptoList.push({
              ...crypto,
              name: crypto.name,
              currentValue: parseInt(data.k.c),
              evolution: 0,
              high: data.k.h,
              low: data.k.l,
              volume: data.k.v,
              tradecount: data.k.n,
              imageUrl: await getCryptoImgUrl(crypto.name)
            });
          } else {
            newCryptoList.map(async (existingCrypto: any) => {
              if (existingCrypto.name === data.s.substr(0, 3)) {
                existingCrypto.currentValue = parseInt(data.k.c);
                existingCrypto.evolution = 0;
                existingCrypto.high = data.k.h;
                existingCrypto.low = data.k.l;
                existingCrypto.volume = data.k.v;
                existingCrypto.tradecount = data.k.n;
              }
            });
          }
        });
        const cryptoListNames = cryptoLists.map((crypto) => crypto.name);
        const uniqueNewCryptoList = Array.from(
          new Set(newCryptoList.map((crypto: { name: any }) => crypto.name))
        ).map((name) => {
          const crypto = newCryptoList.find((c: { name: unknown }) => c.name === name);
          return {
            ...crypto,
            name: crypto.name,
            currentValue: crypto.currentValue,
            evolution: crypto.evolution,
            high: crypto.high,
            low: crypto.low,
            volume: crypto.volume,
            tradecount: crypto.tradecount,
            imageUrl: crypto.imageUrl
          };
        });
        const sortedNewCryptoList = uniqueNewCryptoList.sort(
          (a, b) => cryptoListNames.indexOf(a.name) - cryptoListNames.indexOf(b.name)
        );
        setMyCryptoList(sortedNewCryptoList);
      });
  
    };
    socket.onclose = function () {
      // console.log('Disconnected from WebSocket server');
    };
    return () => {
      socket.close();
    };
  }, [cryptoList.length > 0]);

  const yourCallback = (name: string) => {
    setChartIsShow(!chartIsShow);
    setCryptoNameSelected(name);
  };

  // Définitions :
  // fsyms (from symbols) : c'est le symbole de la crypto-monnaie d'origine que vous souhaitez obtenir des informations. Dans votre exemple, vous utilisez name qui est la variable contenant le nom de la crypto-monnaie passée en argument de la fonction.
  // tsyms (to symbols) : c'est la liste des symboles de crypto-monnaies auxquelles vous souhaitez convertir la crypto-monnaie d'origine. Dans votre exemple, vous utilisez BTC pour indiquer que vous voulez convertir la crypto-monnaie d'origine en Bitcoin.
  // tsym (to symbol) : c'est le symbole de la crypto-monnaie auxquelle vous voulez convertir toutes les crypto-monnaies de la liste de fsyms. Dans votre exemple, vous utilisez USD pour indiquer que vous voulez convertir toutes les crypto-monnaies en dollars américains.

  return (
    <React.Fragment>
      <div id="home" className="flex ml-[100px]">
        <div className="w-full max-w-[2046px] flex flex-col py-5 pl-5">
          <div className="w-[35%]">
            <SearchBar research="bitcoin"></SearchBar>
          </div>
          <div className="flex overflow-x-scroll pt-5">
            {cryptoListSetted.map((crypto) => (
              <div key={crypto.name}>
                <TopCards
                  cryptocurrency={crypto.name}
                  evolution={crypto.evolution}
                  imageUrl={crypto.imgUrl}
                />
              </div>
            ))}
          </div>
          <div className="max-w-[1619px]" onClick={() => reinitializeCard(!isSelect)}>
            <SectionLabel title="Top Crypto this Month (Most exchange)" options={true} />
          </div>
          {chartIsShow ? (
            <div className="max-w-[1619px] h-auto rounded-[9px] border-2 border-[#303241]">
              <CryptoChart
                cryptoName={cryptoNameSelected}
                imageUrl={
                  cryptoListSetted.find((crypto) => crypto.name === cryptoNameSelected)?.imgUrl!!
                }
              />
            </div>
          ) : (
            <div className="flex max-w-[1619px] -m-1 overflow-x-scroll">
              {cryptoListSetted.length > 0
                ? cryptoListSetted.map((crypto) => (
                    <div key={crypto.name} className="pb-2 flex-col scale-10">
                      <CryptoCard
                        name={crypto.name}
                        imageUrl={crypto.imgUrl}
                        onDiscoverClick={yourCallback}
                      />
                    </div>
                ))
                : null}
            </div>
          )}

          <div onClick={() => reinitializeCard(!isSelect)}>
            <SectionLabel title="Listing - Currencies" options={false} />
          </div>
          <div className="flex flex-col pt-5 max-w-[1619px] max-h-[320px] mb-5 overflow-y-scroll">
            {cryptoList.length > 0 && myCryptoList.length > 0
              ? myCryptoList.map((crypto, index) => (
                  <div key={index}>
                    <ListingCrypto
                      cryptocurrency={crypto.name}
                      currentPrice={formatNumber(crypto.currentValue)}
                      high={formatNumber(crypto.high)}
                      low={formatNumber(crypto.low)}
                      volume={formatNumber(crypto.volume)}
                      tradecount={formatNumber(crypto.tradecount)}
                      imageUrl={crypto.imageUrl}
                      index={index}
                    />
                  </div>
              ))
              : null}
          </div>
        </div>
        <div className="fixed right-0">
          {getToken('token') ? (
            <BlackRockBalance blackrock_token="69029"></BlackRockBalance>
          ) : (
            <FloatingLoadingButton />
          )}
        </div>
        <img
          className="float-right scale-150 ml-[-200px] mt-[150px]"
          src={BlackRockSvg}
          alt="BlackRockSvg"
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
