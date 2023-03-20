import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  title: string;
  options: boolean;
};

const SectionLabel: React.FC<Props> = ({ title, options }) => {
  return (
    <div className="flex flex-wrap justify-between items-center my-3 h-auto select-none">
      <h1 className="text-white text-3xl font-semibold select-none">{title}</h1>
      {options ? (
        <>
          <div className="flex items-center cursor-pointer my-2">
            <p className="text-white text-2xl mr-7 select-none">See all</p>
            <FontAwesomeIcon
              icon="angle-right"
              size="1x"
              color="white"
              style={{ transform: 'scale(1.5)' }}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SectionLabel;
