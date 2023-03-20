import React from 'react';
import formatNumber from './../formatNumber';

type Props = {
  blackrock_token: string;
};
const BlackRockBalance: React.FC<Props> = ({ blackrock_token }) => {
  var blackrock = formatNumber(blackrock_token);
  return (
    <div className="SelectDisable">
      <div className="flex flex-row py-3 text-l font-bold border-[#303241] bg-[#171822] rounded-xl border-2 text-[#fff] SelectDisable">
        <p className="ml-4 font-semibold">
          BALANCE :
        </p>
          {blackrock_token.length < 12 ? <p className="mx-2">
            {blackrock}
          </p> : <p className="mx-2 w-28 truncate">
            {blackrock}
          </p>
          }
          <p className="mr-4 text-left">BLR</p>
      </div>
    </div>
  );
};

export default BlackRockBalance;
