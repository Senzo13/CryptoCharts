import React, { useState, useEffect } from 'react';
import formatNumber from './../formatNumber';
import ClipLoader from 'react-spinners/ClipLoader';

type Props = {
  name: string;
  imageUrl: string;
  onDiscoverClick: (name: string) => void;
};

const CryptoCard: React.FC<Props> = ({ name, imageUrl, onDiscoverClick }) => {
  const [clicked, setClicked] = useState(true);
  const [price, setPrice] = useState(0);
  const [prevPrice, setPrevPrice] = useState(0);
  const [loadingInProgress, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prevData;
    let prevPrices = 0;
    const socket = new WebSocket('ws://localhost:8081');
    socket.onopen = function () {
      // console.log('Connected to WebSocket server');
      socket.send(JSON.stringify({ symbol: `${name.toLowerCase()}usdt` }));
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
      /* eslint-enable @typescript-eslint/no-unused-vars */
    };
    socket.onclose = function () {
      // console.log('Disconnected from WebSocket server');
    };
    return () => {
      socket.close();
    };
  }, [name]);

  const handleClick = () => {
    setClicked(!clicked);
    // appel le callback en lui passant name et clicked en tant que paramètre zebi
    onDiscoverClick(name);
  };

  return (
    <>
      <div
        className="inline-block bg-[#171822] rounded-[9px] p-3 w-[305px] h-auto border-[1.5px] border-[#303241] m-1"
        style={{ fontFamily: 'Montserrat,' }}>
        <img
          src={imageUrl}
          alt={name}
          className="SelectDisable block mx-auto rounded-full"
          width={150}
          onDragStart={(e) => e.preventDefault()}
        />

        <div className="flex justify-between items-end mt-16 scale-40">
          <div className="flex flex-col w-auto">
            <div className="SelectDisable text-white text-xl">{name}</div>
            <div className="SelectDisable text-white mt-3 ml-0">Current Value</div>
            {price && !loadingInProgress ? (
              <div
                className={`SelectDisable text-white mt-0 ml-0 font-bold ${
                  price && price > prevPrice ? 'text-green-400' : 'text-red-400'
                }`}>
                {formatNumber(price)}$
              </div>
            ) : (
              <div className="SelectDisable text-white mt-0 ml-0 text-red-4 font-bold">
                <div className="loader-container mt-1">
                  <ClipLoader color={'#fff'} size={15} />
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded ml-6 rounded-[10px] mb-0.5 mr-0.5">
            <button
              className="hover:bg-blue-500 transition duration-200 SelectDisable text-white py-2 px-4 rounded rounded-[10px]"
              onClick={handleClick}>
              Discover
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
