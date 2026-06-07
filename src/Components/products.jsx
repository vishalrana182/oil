const ig = "https://image.cdn.shpy.in/505502/fortunemustardoil-1777958403882.webp?width=1200&format=webp";

function products({ image = ig, name = "Premium Mustard Oil", price = "₹350" }) {
    return (
        <div className="flex flex-col items-center w-72 group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">
            {/* Image Section */}
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                    src={image || ig} 
                    alt={name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out z-0 drop-shadow-md"
                />
            </div>
            
            {/* Details Section */}
            <div className="w-full p-6 flex flex-col items-center text-center bg-white relative z-20">
                <span className="inter-tt text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2 font-medium">Cold Pressed</span>
                <h3 className="fraunces-tt text-xl font-bold text-gray-900 leading-snug mb-1">{name}</h3>
                <p className="inter-tt text-md font-semibold text-[#ce6400] mb-6">{price}</p>
                
                {/* Add to Cart Button */}
                <button className="w-full border border-gray-900 text-gray-900 px-6 py-3 inter-tt text-xs font-bold tracking-widest uppercase hover:bg-[#ce6400] hover:border-[#ce6400] hover:text-white transition-all duration-300 rounded-none">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default products;