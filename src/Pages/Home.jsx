import React from 'react';
import h from '../assets/hero-ghani-CVIke6jG.jpg';
import PD from '../Components/products';
import { MoveUpRight } from 'lucide-react';
import { Link } from 'react-router';
import bull from '../assets/heritage-bull-TkP4esK2.jpg'

const Home = () => {
    return (
        <>
            <div className="h-[87vh] w-full flex">
                <div className="w-1/2 bg-[#FAF2E6] flex flex-col items-start justify-center pl-16">
                    <p className='inter-tt text-[12px] font-thin tracking-[.30rem] mb-5'>Est. by tradition · Pressed by patience</p>
                    <h2 className='fraunces-tt text-8xl font-semibold'>Oil, the way the</h2>
                    <h1 className='fraunces-tt text-8xl font-semibold'><span className='text-[#ce6400]'>bulls</span> made it.</h1>
                    <p className='mt-8 inter-tt text-[16px] text-slate-900'>Every bottle of Oldmill begins with hand-picked seeds <br></br> and a wooden ghani turned slowly, the old way, by <br></br> gentle bulls. No heat. No haste. No shortcuts.</p>
                </div>
                <div className="w-1/2 bg-blue-700">
                    <img className='w-full h-full object-cover' src={h} alt="" />
                </div>
            </div >
            <div className='w-full flex justify-evenly items-center bg-black text-white h-15 inter-tt'>
                <div>Cold-pressed below 40°C</div>
                <div>Glass bottled</div>
                <div>Free shipping over ₹999</div>
                <div>Hand-picked seeds</div>
            </div>

            <div className='w-full h-[80vh] bg-[#ce6400] flex flex-col items-start justify-center pl-90 pt-8'>
                <p className='inter-tt text-xs font-normal tracking-widest'>our process</p>
                <h2 className='fraunces-tt font-semibold text-[48px]'>A small range. Pressed <br></br> with great care.</h2>
                <div className='w-full flex gap-4 pt-8 pb-13'>
                    <PD />
                    <PD />
                    <PD />
                    <PD />
                    <Link to="/shop" className='self-center w-48 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center gap-2 hover:scale-110 hover:bg-[#ce6400] transition-all duration-300 shadow-lg cursor-pointer mx-3'>
                        <span className="inter-tt text-xs tracking-widest uppercase font-bold pt-1">See More</span>
                        <MoveUpRight size={20} />
                    </Link>
                </div>

            </div>

            <div className="heritage w-full h-[70vh]  flex justify-evenly bg-[#8B543B]">
                <div className='w-1/2'><img className='w-[80%] h-[70%] object-cover ml-60 mt-20' src={bull} alt="" /></div>

                <div className='w-1/2'>
                    <p className='inter-tt ml-20 mt-23 tracking-widest'>heritage</p>
                    <h2 className='fraunces-tt ml-20 font-semibold text-6xl leading-snug'>The bull, the wood, the <br /> seed.</h2>
                    <p className='inter-tt ml-20 mt-10 text-lg leading-relaxed'>For centuries before steel screws and gas-flame refining, oil came from a single <br />circling animal, a wooden mortar carved from a tree, and a seed that knew the <br /> sun. We've kept that quiet rhythm.</p>
                    <p className='inter-tt ml-20 mt-10 text-lg leading-relaxed'>Slow turns mean low temperatures. Low temperatures keep the aroma, <br />the nutrients, and the soul of the seed intact. You taste the difference in the first<br /> drop.</p>
                    <Link to="/heritage" className='ml-20 mt-3 px-6 py-3 underline bg-black text-white rounded-full inline-block hover:bg-[#ce6400] transition-colors'>
                        Read our story
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Home
