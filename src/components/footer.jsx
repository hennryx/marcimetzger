import React from 'react'
import { ReactComponent as FacebookIcon } from '../assets/socials/FacebookL.svg';
import { ReactComponent as LinkedinIcon } from '../assets/socials/LinkedinL.svg';
import { ReactComponent as InstagramIcon } from '../assets/socials/InstagramL.svg';
import { ReactComponent as YelpIcon } from '../assets/socials/YelpL.svg';
import { ReactComponent as WhatsApp } from '../assets/socials/WhatsAppL.svg';
import LOGO from '../assets/logoL.png'

const Footer = () => {
    return (
        <div className='bg-gray-950 mx-auto'>
            <div className="mx-auto max-w-7xl py-4 pl-4 pr-8">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="flex items-center">
                        <img src={LOGO} alt="logo" className='h-14 w-auto bg-cover' />
                    </div>

                    <div className="flex gap-2 items-center justify-center">
                        <div className="p-1 bg-black/10 rounded-md">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className="w-8 h-8 fill-black text-black" />
                            </a>
                        </div>
                        <div className="p-1 bg-black/10 rounded-md">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon className="w-8 h-8 fill-black text-black" />
                            </a>
                        </div>
                        <div className="p-1 bg-black/10 rounded-md">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="w-8 h-8 fill-black text-black" />
                            </a>
                        </div>
                        <div className="p-1 bg-black/10 rounded-md">
                            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">
                                <YelpIcon className="w-8 h-8 fill-black text-black" />
                            </a>
                        </div>
                        <div className="p-1 bg-black/10 rounded-md">
                            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">
                                <WhatsApp className="w-8 h-8 fill-black text-black" />
                            </a>
                        </div>
                    </div>

                    <div className="">
                        <ul className='flex flex-row gap-2 items-center justify-center text-white'>
                            <li className='underline underline-offset-5'>Home</li>
                            <li className='underline underline-offset-5'>Listing</li>
                            <li className='underline underline-offset-5'>Let's move</li>
                            <li className='underline underline-offset-5'>About us</li>
                        </ul>
                    </div>
                    <p className='text-white'>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer