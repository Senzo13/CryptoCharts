import React from 'react';
import formatNumber from './../formatNumber';

type Props = {
  cryptocurrency: string;
  currentPrice: number;
  low: number;
  high: number;
  volume: number;
  tradecount: number;
  imageUrl: string;
  index: number;
};
const ListingCrypto: React.FC<Props> = ({
  cryptocurrency,
  currentPrice,
  low,
  high,
  volume,
  tradecount,
  imageUrl,
  index
}) => {
  return (
    <div className="SelectDisable mb-1 h-14 text-l flex flex-wrap items-center border-[#303241] bg-[#171822] rounded-xl border-[1.5px] text-[#86878C] max-w-[1619px] mr-2">
      <div className="flex flex-row front-[10px] text-center w-full ">
        <p className="font-bold ml-0 w-full text-white">{index + 1}</p>
        <img
          src={imageUrl}
          width="32"
          alt={cryptocurrency}
          className="SelectDisable block mx-auto rounded-full mx-10"
          onDragStart={(e) => e.preventDefault()}
        />
        <p className="text-white font-normal w-full">{cryptocurrency}</p>
        <p className="text-white font-normal w-full">
          Current value: {formatNumber(currentPrice)}$
        </p>
        <p className="text-white font-normal w-full">High: {formatNumber(high)}$</p>
        <p className="text-white font-normal w-full">Low: {formatNumber(low)}$</p>
        <p className="text-white font-normal w-full">Volume: {formatNumber(volume)}</p>
        <p
          className="text-white font-normal
w-full">
          Tradecount: {formatNumber(tradecount)}
        </p>
      </div>
    </div>
  );
};

export default ListingCrypto;
