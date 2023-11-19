import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { debounce } from "lodash"
import SearchField from '../components/SearchField';
import ListItems from '../components/ListItems';
import { CountryData } from '../../types'
import Card from '../components/Card';


const CountrySearch: React.FC = () => {

   const [searchData, setSearchData] = useState<CountryData[] | null>(null);
   const [countryInfo, setCountryInfo] = useState<CountryData>();
   const [isLoading, setIsLoading] = useState<boolean>(false);

   // Fetching country data for the search string
   const getSearchedData = async(search: string) => {
      await fetch(`https://restcountries.com/v3.1/name/${search}?official=true`)
        .then((response) => {
         if (response.ok) {
            return response.json();
          }
          toast.error('There was a problem with the fetch operation', { toastId: "apiError"});
        })
        .then((json) => {
          setIsLoading(false);
          setSearchData(json);
        })
        .catch((error) => {
         toast.error(`There was a problem with the fetch operation: ${error}`);
         setSearchData(null);
        });
    };
   
   // Debounce the getSearchData function to manage api calls
   const debouncedSearch = debounce(getSearchedData, 500);
   

   const onSearch = (searchStr: string) => {
      const search = debouncedSearch;
      if (!searchStr) {
        // when the user clear the field, need to clear the state and do nothing else
        debouncedSearch.cancel();
        setIsLoading(false);
      } else {
        setIsLoading(true);
        search(searchStr);
      }
    };
   
   // To display country details on click of the search suggestion
   const showResult = (country:CountryData) => {
      setCountryInfo(country);
      setSearchData(null);
   };

   return (
      <section className='w-full flex items-center justify-center flex-col '>
         <div className=" w-full flex px-6 mx-auto justify-center ">
            <div className='relative w-full sm:w-[720px] mt-8'>
               <h1 className="text-4xl text-center py-4 font-bold text-slate-700">Country Finder</h1>
               <p className='text-center text-xl pt-4 m-auto pb-8 max-w-lg font-medium text-slate-600'>Discover the world easily with Country Finder – search your country by name to get details.</p>
               <SearchField isLoading={isLoading} onSearch={onSearch} />
               { searchData && searchData.length > 0 && ( 
                  <ListItems showResult={showResult} items={searchData} />
               )}
            </div>
         </div>
         <div className='w-full flex px-6 mx-auto justify-center items-center py-12 gap-2'>
            { countryInfo ? (
               <Card data={countryInfo}/>
            ): (
               <div className=" w-[720px] p-4 text-center bg-slate-200 border border-gray-200 text-slate-500 rounded-lg shadow sm:p-8 ">
                  Country will display here
               </div>
            )}
         </div>
      </section>
   )
}

export default CountrySearch
