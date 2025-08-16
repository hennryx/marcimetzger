import React from 'react'
import Card from '../components/card'
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"

import logo1 from "../assets/logos/logo1.png"
import logo2 from "../assets/logos/logo2.png"
import logo3 from "../assets/logos/logo3.png"
import logo4 from "../assets/logos/logo4.png"

const Achivements = () => {
    const achivements = [
        {
            title: "Real Estate Done Right",
            desc: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
            img: image4
        },
        {
            title: "Commercial & Residential",
            desc: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
            img: image5
        },
        {
            title: "Rely on Expertise",
            desc: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
            img: image6
        },
    ]

    return (
        <div className='bg-white mx-auto'>
            <div className="mx-auto max-w-7xl py-4 pl-4 pr-8">
                <h2 className="text-center text-2xl sm:text-4xl font-bold md:text-left mb-8 px-0 md:px-4">Achivements</h2>
                <div className='flex flex-col items-center justify-center gap-8 min-h-dvh h-full w-full'>
                    {achivements.map((item, i) => (
                        <div key={i} className='flex flex-1 justify-center h-full w-full md:min-w-[300px] '>
                            <Card
                                title={item.title}
                                description={item.desc}
                                imageUrl={item.img}
                                orientation="horizontal"
                            />
                        </div>
                    ))}
                </div>

                <div className='flex flex-col md:flex-row items-center justify-around gap-8 md:gap-2 h-fit mt-16'>
                    <img src={logo1} alt="logo1" />
                    <img src={logo2} alt="logo1" />
                    <img src={logo3} alt="logo1" />
                    <img src={logo4} alt="logo1" />
                </div>
            </div>
        </div>
    )
}

export default Achivements