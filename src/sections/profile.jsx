import React from 'react'
import PROFILE from '../assets/profile-Image.png'
import { Phone } from 'lucide-react'

const Profile = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto py-4 pl-4 pr-8'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16'>
                    <div className='flex-shrink-0'>
                        <div className='w-64 h-80 lg:w-80 lg:h-96 relative'>
                            <div className='w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden shadow-xl'>
                                <img src={PROFILE} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex-1 lg:pt-8 text-center lg:text-left max-w-3xl'>
                        <div className='space-y-6'>
                            <h2 className='text-2xl sm:text-4xl font-bold text-gray-900 tracking-wider'>
                                MARCI METZGER
                            </h2>
                            
                            <p className='text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-light'>
                                With nearly 30 years of experience transforming real estate dreams into reality, I don't just sell homes. I create life-changing experiences for every client.
                            </p>
                            
                            <div className='pt-4'>
                                <button className="bg-black text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mx-auto lg:mx-0">
                                    <Phone size={20} />
                                    <span className="text-base font-medium">Call now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile