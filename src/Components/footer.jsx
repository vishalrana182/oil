import React from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import logo from '../assets/oldmill-logo-EBhyPMVL.png';

function Footer() {
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
        <footer className="w-full bg-[#1a1a1a] text-[#F9F2E6] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-12 md:grid-cols-4">
                <div className="md:col-span-2 space-y-6">
                    <Link to="/" onClick={scrollToTop} className="inline-block">
                        <img src={logo} alt="Oldmill Agro LLP" className="h-16 w-auto invert opacity-90 hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="inter-tt text-sm text-gray-400 max-w-sm leading-relaxed tracking-wide">
                        Cold-pressed by tradition. Bottled with care. Honouring India's bull-driven ghani heritage, one seed at a time.
                    </p>
                </div>

                <div>
                    <h4 className="fraunces-tt text-xl mb-6 text-white font-medium">Shop</h4>
                    <ul className="space-y-4 inter-tt text-sm tracking-widest uppercase text-gray-400">
                        <li><Link to="/shop" onClick={scrollToTop} className="hover:text-[#ce6400] transition-colors">All oils</Link></li>
                        <li><Link to="/shop" onClick={scrollToTop} className="hover:text-[#ce6400] transition-colors">Groundnut</Link></li>
                        <li><Link to="/shop" onClick={scrollToTop} className="hover:text-[#ce6400] transition-colors">Sesame</Link></li>
                        <li><Link to="/shop" onClick={scrollToTop} className="hover:text-[#ce6400] transition-colors">Coconut</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="fraunces-tt text-xl mb-6 text-white font-medium">Company</h4>
                    <ul className="space-y-4 inter-tt text-sm tracking-widest uppercase text-gray-400">
                        <li><Link to="/heritage" onClick={scrollToTop} className="hover:text-[#ce6400] transition-colors">Our heritage</Link></li>
                        <li><Link to="/contact" onClick={scrollToTop} className="hover:text-[#ce6400] transition-colors">Contact</Link></li>
                        <li><Link to="/policies" onClick={scrollToTop} className="hover:text-[#ce6400] transition-colors">Policies</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-4 md:items-center md:justify-between inter-tt text-[10px] text-gray-500 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Oldmill Agro LLP. All rights reserved.</p>
                <p>Pressed with patience · Bottled in India</p>
            </div>
        </footer>
    );
}

export default Footer;