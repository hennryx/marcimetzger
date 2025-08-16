import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

import { ReactComponent as FacebookIcon } from '../assets/socials/Facebook.svg';
import { ReactComponent as LinkedinIcon } from '../assets/socials/Linkedin.svg';
import { ReactComponent as InstagramIcon } from '../assets/socials/Instagram.svg';
import { ReactComponent as YelpIcon } from '../assets/socials/Yelp.svg';
import { ReactComponent as WhatsApp } from '../assets/socials/WhatsApp.svg';

const Contacts = () => {
    return (
        <div className='bg-white mx-auto'>
            <div className="mx-4 md:mx-auto max-w-7xl py-4 pl-4 pr-8 border rounded-md">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="flex flex-col gap-4 w-full md:w-1/2 p-4">
                        <h2 className="text-center text-2xl sm:text-4xl font-bold md:text-left">
                            Get In Touch
                        </h2>

                        <p className="text-start text-lg text-gray-600">
                            Send us a message and we will be happy to assist you.
                        </p>
                        <div>

                            <p className="text-start text-gray-600">
                                Office Hours
                            </p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4'>
                                    <p className="text-start text-sm text-gray-600">
                                        Mon 08:00am - 07:00 pm
                                    </p>
                                    <p className="text-start text-sm text-gray-600">
                                        to
                                    </p>
                                    <p className="text-start text-sm text-gray-600">
                                        Sun 08:00am - 07:00 pm
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-900 max-w-fit p-1 rounded-md">
                                <p className="text-start text-sm text-white">
                                    Open daily
                                </p>
                            </div>
                        </div>

                        <p className="text-start text-gray-600 mt-4">
                            Appointments outside office hours available upon request. Just call!
                        </p>

                        <div className="flex gap-2 items-center">
                            <p className="font-semibold">Socials:</p>
                            <div className="flex gap-2">
                                <div className="p-1 bg-black/10 rounded-md">
                                    <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon className="w-8 h-8 fill-black text-black" />
                                    </a>
                                </div>
                                <div className="p-1 bg-black/10 rounded-md">
                                    <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer">
                                        <LinkedinIcon className="w-8 h-8 fill-black text-black" />
                                    </a>
                                </div>
                                <div className="p-1 bg-black/10 rounded-md">
                                    <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon className="w-8 h-8 fill-black text-black" />
                                    </a>
                                </div>
                                <div className="p-1 bg-black/10 rounded-md">
                                    <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" target="_blank" rel="noopener noreferrer">
                                        <YelpIcon className="w-8 h-8 fill-black text-black" />
                                    </a>
                                </div>
                                <div className="p-1 bg-black/10 rounded-md">
                                    <a href="https://wa.me/14259412560" target="_blank" rel="noopener noreferrer">
                                        <WhatsApp className="w-8 h-8 fill-black text-black" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">Send Message</h3>
                            <form>
                                <div className='flex gap-2'>
                                    <div className="mb-4 w-full">
                                        <label htmlFor="name" className="block text-sm text-start font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="mt-1 p-2 w-full border rounded-md focus:ring-black focus:border-black"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label htmlFor="email" className="block text-sm text-start font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="mt-1 p-2 w-full border rounded-md focus:ring-black focus:border-black"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm text-start font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 p-2 w-full border rounded-md focus:ring-black focus:border-black"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-900 transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert('Form submission is disabled in this demo.');
                                    }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full justify-around p-4">
                    <div className="bg-black hover:bg-gray-900 p-4 text-white rounded-md flex flex-row gap-2 w-full smooth-scale-1000">
                        <div className="bg-gray-800 p-4 rounded-md max-w-fit flex items-center">
                            <Mail />
                        </div>
                        <div>
                            <p className="text-start text-sm font-semibold mt-2">Email us</p>
                            <p className="text-start text-sm text-white/80">marciMetzger@gmail.com</p>
                        </div>
                    </div>
                    <div className="bg-black hover:bg-gray-900 p-4 text-white rounded-md flex flex-row gap-2 w-full smooth-scale-1000">
                        <div className="bg-gray-800 p-4 rounded-md max-w-fit flex items-center">
                            <Phone />
                        </div>
                        <div>
                            <p className="text-start text-sm font-semibold mt-2">Contact us</p>
                            <p className="text-start text-sm text-white/80">(206) 919-6886</p>
                        </div>
                    </div>
                    <div className="bg-black hover:bg-gray-900 p-4 text-white rounded-md flex flex-row gap-2 w-full smooth-scale-1000">
                        <div className="bg-gray-800 p-4 rounded-md max-w-fit flex items-center">
                            <MapPin />
                        </div>
                        <div>
                            <p className="text-start text-sm font-semibold mt-2">Our Location</p>
                            <p className="text-start text-sm text-white/80">
                                3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;