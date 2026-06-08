const ig = "https://image.cdn.shpy.in/505502/fortunemustardoil-1777958403882.webp?width=1200&format=webp";

import { Link } from 'react-router';

function products({ image = "https://image.cdn.shpy.in/505502/fortunemustardoil-1777958403882.webp?width=1200&format=webp", name = "Premium Mustard Oil", price = "₹350", isList = false }) {
    if (isList) {
        return (
            <Link to="/shopping" state={{ image, name, price }} className="flex flex-row items-center w-full group bg-transparent transition-all duration-300 overflow-hidden border-b border-[#d4c5ae] hover:bg-[#F9F2E6] cursor-pointer py-6 min-w-0">
                {/* Image Section */}
                <div className="w-1/3 md:w-1/4 h-32 md:h-48 bg-white flex items-center justify-center p-2 md:p-6 relative overflow-hidden shrink-0 rounded-xl shadow-sm border border-gray-100">
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out z-0 drop-shadow-md"
                    />
                </div>
                
                {/* Details Section */}
                <div className="w-2/3 md:w-3/4 px-6 md:px-10 py-2 flex flex-col items-start justify-center relative z-20 flex-1">
                    <span className="inter-tt text-[10px] md:text-xs tracking-widest uppercase text-gray-500 mb-2 font-medium">Cold Pressed</span>
                    <h3 className="fraunces-tt text-xl md:text-3xl font-bold text-gray-900 leading-tight mb-2 w-full break-words whitespace-normal">{name}</h3>
                    <p className="inter-tt text-lg md:text-xl font-semibold text-[#ce6400] mb-6">{price}</p>
                    
                    {/* Add to Cart Button */}
                    <div className="w-auto border border-gray-900 text-gray-900 px-6 py-2 md:py-3 inter-tt text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:bg-[#ce6400] group-hover:border-[#ce6400] group-hover:text-white transition-all duration-300 cursor-pointer text-center rounded-none shadow-sm">
                        Add to Cart
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link to="/shopping" state={{ image, name, price }} className="flex flex-col items-center w-full md:w-72 h-full group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 cursor-pointer min-w-0">
            {/* Image Section */}
            <div className="w-full h-36 md:h-80 bg-gray-50 flex items-center justify-center p-2 md:p-6 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out z-0 drop-shadow-md"
                />
            </div>
            
            {/* Details Section */}
            <div className="w-full px-2 md:px-6 pt-3 md:pt-6 pb-2 md:pb-4 flex flex-col items-center text-center bg-white relative z-20 flex-1 justify-start">
                <span className="inter-tt text-[8px] md:text-[10px] tracking-widest uppercase text-gray-400 mb-1 md:mb-2 font-medium">Cold Pressed</span>
                <h3 className="fraunces-tt text-[13px] md:text-xl font-bold text-gray-900 leading-tight mb-1 w-full break-words whitespace-normal">{name}</h3>
                <p className="inter-tt text-[12px] md:text-md font-semibold text-[#ce6400] mt-auto mb-1 md:mb-2">{price}</p>
            </div>
            
            {/* Add to Cart Button */}
            <div className="w-full px-2 md:px-6 pb-3 md:pb-6 bg-white relative z-20 shrink-0">
                <div className="w-full flex items-center justify-center border border-gray-900 text-gray-900 px-1 md:px-6 py-2 md:py-3 inter-tt text-[9px] md:text-xs font-bold tracking-widest uppercase group-hover:bg-[#ce6400] group-hover:border-[#ce6400] group-hover:text-white transition-all duration-300 rounded-none cursor-pointer text-center">
                    Add to Cart
                </div>
            </div>
        </Link>
    );
}

export default products;