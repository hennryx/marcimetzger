import React from 'react';
import gal1 from '../assets/gallery/gal1.png';
import gal2 from '../assets/gallery/gal2.png';
import gal3 from '../assets/gallery/gal3.png';
import gal4 from '../assets/gallery/gal4.png';
import gal5 from '../assets/gallery/gal5.png';
import gal6 from '../assets/gallery/gal6.png';
import gal7 from '../assets/gallery/gal7.png';
import gal8 from '../assets/gallery/gal8.png';
import gal9 from '../assets/gallery/gal9.png';
import { useState } from 'react';
import { ClosedCaptionIcon } from 'lucide-react';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: gal1, rowSpan: 1, colSpan: 1 },
        { src: gal2, rowSpan: 2, colSpan: 1 },
        { src: gal3, rowSpan: 1, colSpan: 1 },
        { src: gal4, rowSpan: 1, colSpan: 1 },
        { src: gal5, rowSpan: 1, colSpan: 1 },
        { src: gal9, rowSpan: 1, colSpan: 1 },
        { src: gal6, rowSpan: 1, colSpan: 2 },
        { src: gal7, rowSpan: 1, colSpan: 2 },
        { src: gal8, rowSpan: 1, colSpan: 1 },
    ];

    return (
        <div className='bg-white mx-auto'>
            <div className="mx-auto max-w-7xl py-4 pl-4 pr-8">
                <h2 className="text-center text-lg sm:text-xl font-bold md:text-left mb-8 px-0 md:px-4">Gallery</h2>

                <div className="hidden md:flex">
                    <div className="grid grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`aspect-[${image.rowSpan}/${image.colSpan}] overflow-hidden rounded-lg smooth-scale-700`}
                                style={{
                                    gridRow: `span ${image.rowSpan} / span ${image.rowSpan}`,
                                    gridColumn: `span ${image.colSpan} / span ${image.colSpan}`,
                                }}
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={`Gallery image ${image.src}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:hidden">
                    <div className="grid grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-lg smooth-scale-700`}
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={`Gallery image ${image.src}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                        />
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery