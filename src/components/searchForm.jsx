import React from 'react'
import { Search, ChevronUp, ChevronDown, MoreHorizontal } from 'lucide-react'
import { SlidersVertical } from 'lucide-react'

const SearchForm = ({ searchData, setSearchData, showSearchForm, setShowSearchForm }) => {

    const handleClick = (e) => {
        e.preventDefault()

        console.log("click");
        setShowSearchForm((prev) => !prev)
    }
    return (
        <div className="absolute w-11/12 lg:w-full lg:max-w-7xl lg:px-6 z-10 bottom-4 sm:bottom-6 lg:bottom-8 searchContainer transition-all duration-500 ease-in-out">
            <div className={`bg-white/95 backdrop-blur-sm shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${showSearchForm
                ? 'w-full mx-auto rounded-2xl'
                : 'w-16 mx-auto lg:mx-0 lg:ml-auto lg:mr-auto rounded-full'
                }`}
            >

                <div className={`${showSearchForm ? 'pb-4 px-4' : ''} flex flex-col items-center justify-center`}>
                    <button
                        onClick={handleClick}
                        className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        aria-label="Toggle search form"
                    >
                        {showSearchForm ?
                            <ChevronDown className="h-6 w-6 text-gray-600" /> :
                            <ChevronUp className="h-6 w-6 text-gray-600" />
                        }
                    </button>
                </div>

                {/* Search Form - Collapsible */}
                <div className={`transition-all duration-500 ease-in ${showSearchForm ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="p-4 sm:pb-6 sm:px-6 pt-0">

                        {/* Mobile Layout (Stacked) */}
                        <div className="block lg:hidden space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                {/* Looking for */}
                                <div>
                                    <label className="block text-start text-xs font-medium text-gray-700 mb-1">
                                        Looking for
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full text-gray-900 p-2.5 text-sm border border-gray-200 rounded-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                            value={searchData.type}
                                            onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
                                        >
                                            <option disabled value='Type' >Type</option>
                                            <option value='House' >House</option>
                                            <option value='Apartment' >Apartment</option>
                                            <option value='Condo' >Condo</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Locations */}
                                <div>
                                    <label className="block text-start text-xs font-medium text-gray-700 mb-1">
                                        Locations
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full text-gray-900 p-2.5 text-sm border border-gray-200 rounded-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                            value={searchData.location}
                                            onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                                        >
                                            <option value="Location" disabled>Location</option>
                                            <option value="Pahrump">Pahrump</option>
                                            <option value="Las Vegas">Las Vegas</option>
                                            <option value="Henderson">Henderson</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {/* Number of rooms */}
                                <div>
                                    <label className="block text-start text-xs font-medium text-gray-700 mb-1">
                                        Rooms
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full p-2.5 text-gray-900  text-sm border border-gray-200 rounded-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                            value={searchData.rooms}
                                            onChange={(e) => setSearchData({ ...searchData, rooms: e.target.value })}
                                        >
                                            <option value="2 rooms">2 rooms</option>
                                            <option value="1 room">1 room</option>
                                            <option value="3 rooms">3 rooms</option>
                                            <option value="4+ rooms">4+ rooms</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="block text-start text-xs font-medium text-gray-700 mb-1">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="$ Range"
                                        className="w-full p-2.5 text-gray-900 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                        value={searchData.price}
                                        onChange={(e) => setSearchData({ ...searchData, price: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Mobile Buttons */}
                            <div className="flex space-x-3 pt-2">
                                <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors flex items-center justify-center space-x-2 font-medium">
                                    <Search size={16} />
                                    <span className="text-sm">Search</span>
                                </button>

                                <button className="min-w-fit flex items-center gap-1 p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black transition-colors">
                                    {/* <MoreHorizontal className="h-4 w-4 text-gray-600" /> */}
                                    <SlidersVertical className="h-4 w-4 text-gray-600" />
                                    <span>More</span>
                                </button>
                            </div>
                        </div>

                        {/* Desktop Layout (Horizontal) */}
                        <div className="hidden lg:block">
                            <div className="grid grid-cols-5 gap-4 items-end">
                                <div>
                                    <label className="block text-start text-sm font-medium text-gray-700 mb-1">
                                        Looking for
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full p-3 border text-gray-900 border-gray-200 rounded-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                            value={searchData.type}
                                            onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
                                        >
                                            <option value="Type" disabled>Type</option>
                                            <option value="House">House</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Condo">Condo</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Locations */}
                                <div>
                                    <label className="block text-start text-sm font-medium text-gray-700 mb-1">
                                        Locations
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full text-gray-900 p-3 border border-gray-200 rounded-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                            value={searchData.location}
                                            onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                                        >
                                            <option value="Location" disabled>Location</option>
                                            <option value="Pahrump">Pahrump</option>
                                            <option value="Las Vegas">Las Vegas</option>
                                            <option value="Henderson">Henderson</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Number of rooms */}
                                <div>
                                    <label className="block text-start text-sm font-medium text-gray-700 mb-1">
                                        Number of rooms
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full text-gray-900 p-3 border border-gray-200 rounded-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                            value={searchData.rooms}
                                            onChange={(e) => setSearchData({ ...searchData, rooms: e.target.value })}
                                        >
                                            <option value="2 rooms">2 rooms</option>
                                            <option value="1 room">1 room</option>
                                            <option value="3 rooms">3 rooms</option>
                                            <option value="4+ rooms">4+ rooms</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="block text-start text-sm font-medium text-gray-700 mb-1">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="$ Price range"
                                        className="w-full text-gray-900 p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                        value={searchData.price}
                                        onChange={(e) => setSearchData({ ...searchData, price: e.target.value })}
                                    />
                                </div>

                                {/* Desktop Buttons */}
                                <div className="flex space-x-2">
                                    <button className="p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black transition-colors flex gap-2">
                                        <SlidersVertical className="h-5 w-5 text-gray-600" />
                                        <span>More</span>
                                    </button>

                                    <button className="flex-1 bg-black text-white p-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors flex items-center justify-center space-x-2 font-medium">
                                        <Search size={18} />
                                        <span>Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-white font-bold mt-2' >Find Your Dream Home</p>
        </div>
    )
}

export default SearchForm