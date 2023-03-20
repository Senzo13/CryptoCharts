import React, { useEffect, useState } from 'react';
import mySvgGreen from '../../assets/tendance_green.svg';
import mySvgRed from '../../assets/tendance_red.svg';
import myPercentGreen from '../../assets/percent_green.svg';
import myPercentRed from '../../assets/percent_red.svg';
import clt from '@netlify/classnames-template-literals';
import formatNumber from './../formatNumber';
import ClipLoader from 'react-spinners/ClipLoader';

type Props = {
  cryptocurrency: string;
  evolution: number;
  imageUrl: string
};

const TopCards: React.FC<Props> = ({ cryptocurrency, evolution, imageUrl }) => {
  const classes = {
    evolution: clt(`
                ${evolution >= 0 ? 'mt-0.5 ml-1 text-[11px] text-[#22D49F]' : 'mt-0.5 ml-1 text-[11px] text-[#FF5B6D]'}`)
  };
  const [loadingInProgress, setLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [prevPrice, setPrevPrice] = useState(0);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prevData;
    let prevPrices = 0;
    const socket = new WebSocket('ws://localhost:8081');
    socket.onopen = function () {
      // console.log('Connected to WebSocket server');
      socket.send(JSON.stringify({ symbol: `${cryptocurrency.toLowerCase()}usdt` }));
    };
    socket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      const number = data.k.c;
      // cast number in int and to fixed 2
      const numberFixed = number;
      const prices = numberFixed > 1 ? parseFloat(numberFixed).toFixed(2) : numberFixed;
      setPrevPrice(prevPrices);
      setPrice(prices);
      setLoading(false);
      prevPrices = prices;
      prevData = data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    };
    socket.onclose = function () {
      // console.log('Disconnected from WebSocket server');
    };
    return () => {
      socket.close();
    };
  }, [cryptocurrency]);

  return (
    <div className="pr-3.5 pb-2">
      <div
        style={ evolution >= 0 ? { backgroundImage: `url(${mySvgGreen})`, backgroundPosition: 'bottom' } : { backgroundImage: `url(${mySvgRed})`, backgroundPosition: 'bottom' }}
        className="flex bg-no-repeat rounded-xl border-[1.5px] overflow-hidden border-[#303241] bg-[#171822] w-[277px] h-36 text-white SelectDisable">
        <div>
          <div className="flex flex-row mt-4 ml-3">
              <img
                src={imageUrl}
                width="30"
                alt={cryptocurrency}
                className="SelectDisable block mx-auto rounded-full"
                onDragStart={(e) => e.preventDefault()}
                />
            <h1 className="ml-2 text-lg">{cryptocurrency} (24h)</h1>
            {evolution >= 0 ? <img width="9" src={myPercentRed} className="pb-2.5 ml-1"/> : <img width="9" src={myPercentGreen} className="pb-2.5 ml-1"/>}
            <p className={formatNumber(classes.evolution)}>{evolution >= 0 ? '+' : ''}{formatNumber(evolution)}%</p>
          </div>
          {price  ? <div className="flex mt-2 ml-5 text-2xl font-bold"><span className="text-[#86878C] font-normal">$</span><p className={`${price && price > prevPrice && !loadingInProgress ? 'text-green-400' : 'text-red-400'}`}>{formatNumber(price)}</p></div> : <div className="flex mt-2 ml-5 text-2xl font-bold"><span className="text-[#86878C] font-normal">$</span><div className="loader-container mt-1">
                  <ClipLoader color={'#fff'} size={25} />
                  </div>
                  </div>}

        </div>
      </div>
      </div>
  );
};

export default TopCards;
