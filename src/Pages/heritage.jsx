import React, { useState } from 'react';
import bull from '../assets/heritage-bull-TkP4esK2.jpg';

const Heritage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="min-h-screen bg-[#F9F2E6] text-gray-900">
            {/* Header Area to match shop page */}
            <div className="w-full py-16 flex flex-col items-center border-b border-[#d4c5ae]">
                <h1 className="fraunces-tt text-5xl font-semibold text-gray-900">Our Heritage</h1>
                <p className="inter-tt text-sm tracking-[0.2em] mt-4 uppercase text-gray-500">Est. by tradition</p>
            </div>

            <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
                <p className="inter-tt text-xs uppercase tracking-[0.3em] text-gray-500 text-center mb-5">Our Heritage</p>
                <h1 className="fraunces-tt font-semibold text-5xl md:text-6xl text-center leading-tight text-gray-900">Slow oil, in a fast world.</h1>

                <div className="flex justify-center mt-10 mb-12">
                    <span className="inter-tt text-xs uppercase tracking-[0.3em] text-gray-500">Est. by tradition</span>
                </div>

                <div className="aspect-3/2 overflow-hidden rounded-xl mb-12 shadow-2xl">
                    <img src={bull} alt="A bull turning a wooden ghani in a village courtyard" loading="lazy" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed inter-tt">
                    <p className="text-2xl text-gray-900 fraunces-tt leading-snug font-medium">Oldmill Agro LLP began with a single conviction: that the oil our grandparents cooked with was better than anything a steel-screw expeller could produce today.</p>
                    <p>Across India, the wooden ghani — a circular mortar carved from a single tree, turned by a gentle bull — has pressed oil for thousands of years. The bull walks slowly; the wood doesn't heat; the seed gives up its oil at its own pace. What you get is darker, richer, more fragrant, and biologically alive in a way modern oils are not.</p>
                    <p>We restore that process at scale, without diluting it. Our seeds are <strong className="text-gray-900 font-semibold">hand-picked</strong>, sorted by workers in gloves and hairnets, weighed, then fed to wooden ghanis turned by bulls we care for as family. Nothing is heated. Nothing is refined. Nothing is blended.</p>

                    <h2 className="fraunces-tt text-4xl pt-6 text-gray-900 font-semibold">Purity is a discipline, not a claim.</h2>
                    <p>The cleanest oil starts with the cleanest seed. We audit every step — from farmer to filter — and we'd rather skip a press day than ship a bottle we wouldn't pour for our own children.</p>
                </div>

                <div className="aspect-square overflow-hidden rounded-xl my-16 shadow-2xl relative bg-gray-200/50">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-[#d4c5ae]/30 animate-pulse z-10"></div>
                    )}
                    <img 
                        src="https://design-to-go-store.lovable.app/assets/seeds-flatlay-D252FKRk.jpg" 
                        alt="Hand-picked white sesame, peanut, flax, and mustard seeds" 
                        loading="lazy" 
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed inter-tt">
                    <h2 className="fraunces-tt text-4xl text-gray-900 font-semibold">The seeds we press.</h2>
                    <p>Peanut, white sesame, black sesame, coconut, safflower, sunflower, flax, almond, mustard, walnut. Each one single-origin, each one traceable, each one pressed in its own season.</p>
                    <p>We're a small company by choice. Slow oil is the only kind we know how to make.</p>
                </div>
            </article>
        </div>
    );
};

export default Heritage;