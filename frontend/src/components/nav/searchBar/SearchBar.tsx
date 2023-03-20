import React from 'react';

type Props = {
  research: string;
};
const SearchBar: React.FC<Props> = () => {
  return (
    <div className="relative w-100">
      <input
        type="text"
        className="focus:outline-none focus:shadow-outline-blue rounded-lg py-3 px-4 block w-full appearance-none leading-normal border-[#303241] bg-[#171822] rounded-[14px] border-[1.5px] text-[#fff]"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
