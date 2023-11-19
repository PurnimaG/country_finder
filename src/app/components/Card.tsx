import React from 'react'
import { CountryData } from '../../types'

interface Props {
    data: CountryData
}

const Card: React.FC<Props> = ({ data }) => {
    // Get base Currency
    const baseCurrency = Object.keys(data.currencies)[0];

    return (
        <div className=" w-[720px] p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <div className="w-full h-[180px] sm:h-[200px] bg-cover bg-center focus:ring-4 text-white rounded-lg inline-flex items-center justify-center">
                    <img src={data.flags.png} alt=""  className=' max-w-xs w-full h-full rounded-lg ' />
                </div>
                { data.coatOfArms.png && (
                    <div className="w-full h-[180px]  text-white rounded-lg inline-flex items-center justify-center ">
                        <img src={data.coatOfArms.png} alt=""  className=' w-[90px] '/>
                    </div>
                )}
            </div>
            <h1 className="mb-2 text-2xl font-bold text-slate-800 sm:mt-6">{data.name.official}</h1>
            <div className=' text-left mt-6'>
                <div className="mb-3 text-base text-gray-800 sm:text-lg"><span className='text-gray-500 pr-4'>Currency: </span>{data.currencies[baseCurrency].name}</div>
                <div className="mb-3 text-base text-gray-800 sm:text-lg"><span className='text-gray-500 pr-4'>Symbol: </span>{data.currencies[baseCurrency].symbol}</div>
                <div className="mb-3 text-base text-gray-800 sm:text-lg"><span className='text-gray-500 pr-4'>Driving Side: </span>{data.car.side}</div>
            </div>
        </div>
    )
}

export default Card
