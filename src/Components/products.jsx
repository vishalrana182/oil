const ig = "https://image.cdn.shpy.in/505502/fortunemustardoil-1777958403882.webp?width=1200&format=webp";

import { Link } from 'react-router';

function products({ image = "https://image.cdn.shpy.in/505502/fortunemustardoil-1777958403882.webp?width=1200&format=webp", name = "Premium Mustard Oil", price = "₹350" }) {
    return (
        <Link to="/shopping" state={{ image, name, price }} className="flex flex-col items-center w-72 group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 cursor-pointer">
            {/* Image Section */}
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out z-0 drop-shadow-md"
                />
            </div>
            
            {/* Details Section */}
            <div className="w-full px-6 pt-6 pb-4 flex flex-col items-center text-center bg-white relative z-20">
                <span className="inter-tt text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2 font-medium">Cold Pressed</span>
                <h3 className="fraunces-tt text-xl font-bold text-gray-900 leading-snug mb-1">{name}</h3>
                <p className="inter-tt text-md font-semibold text-[#ce6400] mb-2">{price}</p>
            </div>
            
            {/* Add to Cart Button */}
            <div className="w-full px-6 pb-6 bg-white relative z-20">
                <div className="w-full flex items-center justify-center border border-gray-900 text-gray-900 px-6 py-3 inter-tt text-xs font-bold tracking-widest uppercase group-hover:bg-[#ce6400] group-hover:border-[#ce6400] group-hover:text-white transition-all duration-300 rounded-none cursor-pointer">
                    Add to Cart
                </div>
            </div>
        </Link>
    );
}

export default products;