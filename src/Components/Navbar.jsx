import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ShoppingBag } from 'lucide-react';
import logo from '../assets/oldmill-logo-EBhyPMVL.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full h-20 border-b border-[#d4c5ae] flex items-center justify-evenly sticky top-0 z-50 transition-colors duration-300 [&_.l]:cursor-pointer [&_.icon]:cursor-pointer [&_.navlink>ul>li]:cursor-pointer ${isScrolled ? 'bg-[#F9F2E6]/60 backdrop-blur-sm' : 'bg-[#F9F2E6]'}`}>
            <div className='l'>
                <Link to="/">
                    <img className='w-16 h-40 object-contain ' src={logo} alt="Old Mill logo" />
                </Link>
            </div>
            <div className="navlink">
                <ul className='flex gap-x-8 inter-tt text-[14px] font-normal tracking-[.2em] [&>li]:hover:text-[#ce6400]'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/heritage">HERITAGE</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
            <div className="icon">
                <ShoppingBag size={18} />
            </div>
        </div>
    );
};

export default Navbar;
