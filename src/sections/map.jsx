import React from 'react'

const Map = () => {
    return (
        <div className='bg-white mx-auto min-h-[60dvh]'>
            <div className="mx-auto max-w-7xl py-4 pl-4 pr-8 h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d20884.91547880912!2d-115.97692693011909!3d36.190791519705144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3190%20HW-160%2C%20Suite%20F%2C%20Pahrump%2C%20Nevada%2089048%2C%20United%20States!5e0!3m2!1sen!2sph!4v1755324984202!5m2!1sen!2sph"
                    width="100%"
                    height="600px"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                ></iframe>
            </div>
        </div>
    )
}

export default Map