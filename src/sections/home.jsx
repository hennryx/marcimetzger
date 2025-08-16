import React, { useState } from 'react'
import { Phone } from 'lucide-react';
import SearchForm from '../components/searchForm';
import BG_IMAGE from '../assets/bg-Image.png'

const Home = () => {
    const [searchData, setSearchData] = useState({
        type: 'Type',
        location: 'Location',
        rooms: '2 rooms',
        price: ''
    });
    const [showSearchForm, setShowSearchForm] = useState(false);


    return (
        <>
            <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 h-full flex items-center">
                <div className="max-w-7xl absolute bottom-0 top-30 left-0 right-0 sm:left-[10%] sm:top-[25%] lg:left-[10%] lg:top-[25%]">
                    <div className="text-center lg:text-left">
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <p className="text-xs sm:text-sm text-gray-900 uppercase tracking-wide mb-2">
                                    MARCI METZGER - THE RIDGE REALTY GROUP
                                </p>
                                <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                    Pahrump Realtor
                                </h1>

                                <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors group mx-auto lg:mx-0">
                                    <Phone size={18} />
                                    <span className="text-sm sm:text-base">Call now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <SearchForm
                searchData={searchData}
                setSearchData={setSearchData}
                showSearchForm={showSearchForm}
                setShowSearchForm={setShowSearchForm}
            />
        </>
    );
}

export default Home