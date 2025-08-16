const Card = ({ title, description, imageUrl, orientation = "vertical" }) => {
    return (
        <div
            className={`
                    bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm md:max-w-full 
                    ${orientation === 'horizontal' ? 'flex flex-col md:flex-row' : 'flex flex-col'}
                    smooth-scale-1000
                `}>
            <div className={`${orientation === 'horizontal' ? 'w-full md:w-1/2 h-48 md:h-auto' : 'h-48'} relative`}>
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className={`${orientation === 'horizontal' ? 'w-full md:w-1/2' : 'flex-1'} p-6 flex flex-col justify-start`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed line-clamp-6">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Card;