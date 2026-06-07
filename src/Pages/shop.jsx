import React, { useState } from 'react';
import PD from '../Components/products';

const Shop = () => {
    const [cols, setCols] = useState(4);

    const getGridClass = () => {
        switch (cols) {
            case 1: return 'grid-cols-1';
            case 2: return 'grid-cols-2';
            case 3: return 'grid-cols-3';
            case 4: return 'grid-cols-4';
            default: return 'grid-cols-4';
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#F9F2E6]">
            <div className="w-full py-16 flex flex-col items-center border-b border-[#d4c5ae]">
                <h1 className="fraunces-tt text-5xl font-semibold text-gray-900">Shop Our Collection</h1>
                <p className="inter-tt text-sm tracking-[0.2em] mt-4 uppercase text-gray-500">Pure, Wood-Pressed Oils</p>
            </div>

            {/* Grid Customization Toolbar */}
            <div className="w-full flex justify-center py-6 border-b border-[#d4c5ae] bg-[#F9F2E6]/50">
                <div className="w-[80%] flex justify-end items-center gap-3">
                    <span className="inter-tt text-xs tracking-widest uppercase text-gray-500 mr-2">View:</span>
                    <button
                        onClick={() => setCols(1)}
                        className={`px-4 py-2 border text-xs tracking-widest uppercase transition-colors duration-300 ${cols === 1 ? 'bg-gray-900 text-white border-gray-900' : 'bg-transparent text-gray-600 border-[#d4c5ae] hover:border-gray-900'}`}
                    >
                        List
                    </button>
                    <button
                        onClick={() => setCols(2)}
                        className={`px-4 py-2 border text-xs tracking-widest uppercase transition-colors duration-300 ${cols === 2 ? 'bg-gray-900 text-white border-gray-900' : 'bg-transparent text-gray-600 border-[#d4c5ae] hover:border-gray-900'}`}
                    >
                        2 Col
                    </button>
                    <button
                        onClick={() => setCols(3)}
                        className={`px-4 py-2 border text-xs tracking-widest uppercase transition-colors duration-300 ${cols === 3 ? 'bg-gray-900 text-white border-gray-900' : 'bg-transparent text-gray-600 border-[#d4c5ae] hover:border-gray-900'}`}
                    >
                        3 Col
                    </button>
                    <button
                        onClick={() => setCols(4)}
                        className={`px-4 py-2 border text-xs tracking-widest uppercase transition-colors duration-300 ${cols === 4 ? 'bg-gray-900 text-white border-gray-900' : 'bg-transparent text-gray-600 border-[#d4c5ae] hover:border-gray-900'}`}
                    >
                        4 Col
                    </button>
                </div>
            </div>

            {/* Product Cards Component */}
            <div className="w-full flex justify-center py-16">
                <div className={`w-[65%] grid gap-x-4 gap-y-10 justify-center place-items-center transition-all duration-500 ${getGridClass()}`}>
                    <PD name="Premium Mustard Oil" price="₹350" />
                    <PD name="Groundnut Oil" price="₹450" />
                    <PD name="White Sesame Oil" price="₹550" />
                    <PD name="Coconut Oil" price="₹400" />
                    <PD name="Flaxseed Oil" price="₹600" />
                    <PD name="Almond Oil" price="₹1200" />
                    <PD name="Black Sesame Oil" price="₹650" />
                </div>
            </div>

        </div>
    );
};

export default Shop;
