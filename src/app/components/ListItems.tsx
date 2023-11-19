import React from "react";
import { CountryData } from "../../types";

const ListItems: React.FC<{items: CountryData[]; showResult: (item: CountryData) => void; }> = ({ items, showResult }) => {
  return (
    <div className='sm:w-[720px] absolute w-full rounded-bl-xl rounded-br-xl border-t border-r border-l border-b bg-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 max-h-[250px] mt-2 overflow-scroll'>
      { items.map((country, index) => {
          return (
              <div className=' px-4 py-2 cursor-pointer border-gray-200 text-gray-500 hover:bg-slate-300 border-b' 
                key={index}
                onClick={() => showResult(country)}>
                {country?.name?.official}
              </div>
          )}
      )}
      </div>
  );
};

export default ListItems;