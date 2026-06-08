import React, { useEffect, useRef } from 'react';
import h from '../assets/hero-ghani-CVIke6jG.jpg';
import PD from '../Components/products';
import { MoveUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import bull from '../assets/heritage-bull-TkP4esK2.jpg';
import gsap from 'gsap';

const Home = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.matchMedia();

        ctx.add("(max-width: 767px)", () => {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 15,
                ease: "none",
            });
        });

        return () => ctx.revert();
    }, []);

    const scrollToTop = () => {
        const scrollObj = { y: window.scrollY };
        gsap.to(scrollObj, {
            y: 0,
            duration: 1.2,
            ease: "power3.inOut",
            onUpdate: () => window.scrollTo(0, scrollObj.y)
        });
    };

    return (
        <>
            <div className="h-auto lg:h-[87vh] w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-[87vh] lg:h-full bg-[#FAF2E6] flex flex-col items-center lg:items-start justify-center px-4 py-8 lg:pl-16 lg:py-0 text-center lg:text-left">
                    <p className='inter-tt text-[10px] md:text-[12px] font-thin tracking-[.20rem] md:tracking-[.30rem] mb-3 lg:mb-5 uppercase'>Est. by tradition · Pressed by patience</p>
                    <h2 className='fraunces-tt text-5xl md:text-6xl lg:text-8xl font-semibold'>Oil, the way the</h2>
                    <h1 className='fraunces-tt text-5xl md:text-6xl lg:text-8xl font-semibold'><span className='text-[#ce6400]'>bulls</span> made it.</h1>
                    <p className='mt-6 lg:mt-8 inter-tt text-[14px] md:text-[14px] lg:text-[16px] text-slate-900 px-4 lg:px-0'>Every bottle of Oldmill begins with hand-picked seeds <br className="hidden lg:block"></br> and a wooden ghani turned slowly, the old way, by <br className="hidden lg:block"></br> gentle bulls. No heat. No haste. No shortcuts.</p>
                    
                    <div className="mt-10 lg:mt-12">
                        <Link to="/shop" onClick={scrollToTop} className='px-8 py-4 bg-gray-900 text-white rounded-full flex items-center justify-center gap-3 hover:scale-105 hover:bg-[#ce6400] transition-all duration-300 shadow-xl cursor-pointer w-max mx-auto lg:mx-0'>
                            <span className="inter-tt text-xs tracking-widest uppercase font-bold pt-[2px]">Shop the oil</span>
                            <ArrowRight size={20} className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-blue-700 h-[60vh] lg:h-full">
                    <img className='w-full h-full object-cover' src={h} alt="" />
                </div>
            </div >
            
            <div className='w-full overflow-hidden bg-black text-white h-14 md:h-15 inter-tt flex items-center relative'>
                <div ref={marqueeRef} className='flex md:w-full md:justify-evenly w-max items-center text-sm md:text-base'>
                    <div className='flex gap-10 md:gap-0 md:w-full md:justify-evenly px-5 md:px-0 shrink-0'>
                        <div className="whitespace-nowrap">Cold-pressed below 40°C</div>
                        <div className="whitespace-nowrap">Glass bottled</div>
                        <div className="whitespace-nowrap">Free shipping over ₹999</div>
                        <div className="whitespace-nowrap">Hand-picked seeds</div>
                    </div>
                    <div className='flex gap-10 px-5 shrink-0 md:hidden' aria-hidden="true">
                        <div className="whitespace-nowrap">Cold-pressed below 40°C</div>
                        <div className="whitespace-nowrap">Glass bottled</div>
                        <div className="whitespace-nowrap">Free shipping over ₹999</div>
                        <div className="whitespace-nowrap">Hand-picked seeds</div>
                    </div>
                </div>
            </div>

            <div className='w-full min-h-[80vh] bg-[#ce6400] flex flex-col items-center lg:items-start justify-center px-4 py-16 lg:pl-20 xl:pl-40 lg:py-20'>
                <p className='inter-tt text-xs font-normal tracking-widest uppercase mb-4'>our process</p>
                <h2 className='fraunces-tt font-semibold text-4xl md:text-[48px] text-center lg:text-left mb-8'>A small range. Pressed <br className="hidden lg:block"></br> with great care.</h2>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 2xl:flex 2xl:flex-row 2xl:flex-nowrap gap-3 md:gap-6 lg:gap-4 pb-13 justify-items-center 2xl:justify-start overflow-x-auto px-4 lg:px-0'>
                    <PD name="Premium Mustard Oil" price="₹350" />
                    <PD name="Groundnut Oil" price="₹450" />
                    <PD name="White Sesame Oil" price="₹550" />
                    <PD name="Coconut Oil" price="₹400" />
                    <Link to="/shop" onClick={scrollToTop} className='col-span-2 2xl:col-span-1 self-center shrink-0 w-full md:w-48 h-12 md:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center gap-2 hover:scale-110 hover:bg-[#ce6400] transition-all duration-300 shadow-lg cursor-pointer mx-0 2xl:mx-3 mt-4 2xl:mt-0'>
                        <span className="inter-tt text-[10px] md:text-xs tracking-widest uppercase font-bold pt-1">See More</span>
                        <MoveUpRight size={20} className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                </div>

            </div>

            <div className="heritage w-full min-h-screen lg:h-[70vh] flex flex-col-reverse lg:flex-row justify-evenly items-center lg:items-stretch bg-[#8B543B] py-16 lg:py-0">
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:items-center mt-10 lg:mt-0'>
                    <img className='w-[90%] md:w-[70%] lg:w-[80%] h-auto lg:h-[70%] object-cover' src={bull} alt="" />
                </div>

                <div className='w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-10 xl:px-20'>
                    <p className='inter-tt tracking-widest uppercase mb-4 text-center lg:text-left'>heritage</p>
                    <h2 className='fraunces-tt font-semibold text-4xl md:text-5xl lg:text-6xl leading-snug text-center lg:text-left'>The bull, the wood, the <br className="hidden md:block" /> seed.</h2>
                    <p className='inter-tt mt-6 text-base md:text-lg leading-relaxed text-center lg:text-left'>For centuries before steel screws and gas-flame refining, oil came from a single <br className="hidden lg:block" />circling animal, a wooden mortar carved from a tree, and a seed that knew the <br className="hidden lg:block" /> sun. We've kept that quiet rhythm.</p>
                    <p className='inter-tt mt-6 text-base md:text-lg leading-relaxed text-center lg:text-left'>Slow turns mean low temperatures. Low temperatures keep the aroma, <br className="hidden lg:block" />the nutrients, and the soul of the seed intact. You taste the difference in the first<br className="hidden lg:block" /> drop.</p>
                    <div className="flex justify-center lg:justify-start mt-8">
                        <Link to="/heritage" onClick={scrollToTop} className='px-6 py-3 no-underline bg-black text-white rounded-full inline-block hover:bg-[#ce6400] transition-colors'>
                            Read our story
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
