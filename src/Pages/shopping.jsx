import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import PD from '../Components/products';
import { useCart } from '../Context/CartContext';

const Shopping = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Default mock data if navigated directly without clicking a product
    const defaultProduct = {
        name: "Premium Mustard Oil",
        price: "₹350",
        image: "https://image.cdn.shpy.in/505502/fortunemustardoil-1777958403882.webp?width=1200&format=webp",
        description: "Cold-pressed using the traditional wooden ghani method to retain maximum nutrition, flavor, and aroma. Perfect for everyday cooking."
    };

    const product = location.state || defaultProduct;
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    // Scroll to top when this page opens
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="w-full min-h-screen bg-[#F9F2E6] flex flex-col pt-4">
            {/* Main Product Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col lg:flex-row gap-16 w-full items-center lg:items-start">
                
                {/* Product Image */}
                <div className="w-full lg:w-1/2 bg-white rounded-[2rem] p-12 flex items-center justify-center shadow-xl border border-[#d4c5ae]/30">
                    <img src={product.image} alt={product.name} className="w-full max-w-md object-contain drop-shadow-2xl mix-blend-multiply hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Product Info */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <span className="inter-tt text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Cold Pressed Oil</span>
                    <h1 className="fraunces-tt text-5xl font-bold text-gray-900 mb-6 leading-tight">{product.name}</h1>
                    <p className="inter-tt text-3xl text-[#ce6400] font-semibold mb-8">{product.price}</p>
                    
                    <p className="inter-tt text-gray-600 leading-relaxed mb-10 text-lg">
                        {product.description || defaultProduct.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 border-t border-b border-[#d4c5ae] py-8 w-full">
                        <div className="flex flex-col">
                            <span className="inter-tt text-xs tracking-widest uppercase text-gray-500 mb-3">Quantity</span>
                            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white w-32 justify-between">
                                <button onClick={decreaseQuantity} className="text-xl text-gray-600 hover:text-[#ce6400] px-2 transition-colors">-</button>
                                <span className="inter-tt font-semibold text-lg">{quantity}</span>
                                <button onClick={increaseQuantity} className="text-xl text-gray-600 hover:text-[#ce6400] px-2 transition-colors">+</button>
                            </div>
                        </div>

                        <div className="flex-1 mt-0 sm:mt-7 w-full">
                            <button 
                                onClick={handleAddToCart}
                                className={`w-full text-white py-4 sm:py-5 px-6 rounded-full inter-tt tracking-widest uppercase font-bold text-xs hover:scale-[1.02] transition-all duration-300 shadow-xl ${added ? 'bg-[#ce6400]' : 'bg-gray-900 hover:bg-[#ce6400]'}`}
                            >
                                {added ? 'Added to Cart!' : `Add to Cart — ${product.price}`}
                            </button>
                        </div>
                    </div>

                    <div className="inter-tt text-sm text-gray-500 space-y-3">
                        <p className="flex items-center gap-2"><span className="text-[#ce6400]">✓</span> 100% Pure & Unrefined</p>
                        <p className="flex items-center gap-2"><span className="text-[#ce6400]">✓</span> Traditional Wooden Ghani Extraction</p>
                        <p className="flex items-center gap-2"><span className="text-[#ce6400]">✓</span> Ships within 24 hours</p>
                    </div>
                </div>
            </div>

            {/* Other Products Section */}
            <div className="w-full bg-white py-24 border-t border-[#d4c5ae]/30 mt-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 gap-6">
                        <h2 className="fraunces-tt text-4xl font-bold text-gray-900">You may also like</h2>
                        <button onClick={() => navigate('/shop')} className="inter-tt text-xs tracking-widest uppercase font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-[#ce6400] hover:border-[#ce6400] transition-colors">
                            View all products
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
                        <PD name="Groundnut Oil" price="₹450" />
                        <PD name="White Sesame Oil" price="₹550" />
                        <PD name="Coconut Oil" price="₹400" />
                        <PD name="Flaxseed Oil" price="₹600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping;
