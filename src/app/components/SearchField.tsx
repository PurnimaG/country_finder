import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchFieldProps {
  onSearch: (searchStr: string) => void;
  isLoading: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch, isLoading }) => {
  return (
    <div className='relative flex items-center flex-col mr-auto ml-auto  gap-2'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <IoSearch className=" w-6 h-6"/>
        </div>
        <input
          placeholder="Search your country..."
          onChange={(e) => onSearch(e.target.value)}
          className='search_input'
          />
          {isLoading && (
            <div
              className="inline-block h-8 w-8 right-5 top-4 absolute animate-spin rounded-full border-4 border-solid border-gray-300 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
          )}
    </div>
  );
};

export default SearchField;
