import React from 'react'
import Card from '../components/card'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

const Service = () => {
    const services = [
        {
            title: "Real Estate Done Right",
            desc: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
            img: image1
        },
        {
            title: "Commercial & Residential",
            desc: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
            img: image2
        },
        {
            title: "Rely on Expertise",
            desc: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
            img: image3
        },
    ]

    return (
        <div className='bg-white mx-auto'>
            <div className="mx-auto max-w-7xl py-4 pl-4 pr-8">
                <h2 className="text-center text-2xl sm:text-4xl font-bold md:text-left mb-8 px-0 md:px-4">Our Services</h2>

                <div className='flex flex-col h-full items-center justify-center gap-8 md:flex-row w-full'>
                    {services.map((item, i) => (
                        <div key={i} className='flex flex-1 min-w-[300px]'>
                            <Card
                                title={item.title}
                                description={item.desc}
                                imageUrl={item.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service