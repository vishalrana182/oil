import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ShoppingBag, X, Trash2, Menu } from 'lucide-react';
import gsap from 'gsap';
import logo from '../assets/oldmill-logo-EBhyPMVL.png';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount, cartItems, removeFromCart } = useCart();

    const scrollToTop = () => {
        if (window.scrollY === 0) return;
        
        const scrollObj = { y: window.scrollY };
        gsap.to(scrollObj, {
            y: 0,
            duration: 1.2,
            ease: "power3.inOut",
            onUpdate: () => window.scrollTo(0, scrollObj.y)
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <div className={`w-full h-20 border-b border-[#d4c5ae] flex items-center justify-between px-4 lg:px-0 lg:justify-evenly sticky top-0 z-50 transition-colors duration-300 [&_.l]:cursor-pointer [&_.icon]:cursor-pointer [&_.navlink>ul>li]:cursor-pointer ${isScrolled ? 'bg-[#F9F2E6]/60 backdrop-blur-sm' : 'bg-[#F9F2E6]'}`}>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden z-50 cursor-pointer p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>

            {/* Logo */}
            <div className='l absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none z-40'>
                <Link to="/" onClick={scrollToTop}>
                    <img className='w-16 h-40 object-contain ' src={logo} alt="Old Mill logo" />
                </Link>
            </div>
            
            {/* Desktop Links */}
            <div className="navlink hidden lg:block">
                <ul className='flex gap-x-8 inter-tt text-[14px] font-normal tracking-[.2em] [&>li]:hover:text-[#ce6400]'>
                    <li><Link to="/" onClick={scrollToTop}>HOME</Link></li>
                    <li><Link to="/shop" onClick={scrollToTop}>SHOP</Link></li>
                    <li><Link to="/heritage" onClick={scrollToTop}>HERITAGE</Link></li>
                    <li><Link to="/contact" onClick={scrollToTop}>CONTACT</Link></li>
                </ul>
            </div>
            
            {/* Cart Icon */}
            <div className="icon relative z-50">
                <div onClick={() => setIsCartOpen(!isCartOpen)} className="relative p-2">
                    <ShoppingBag size={20} />
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 bg-[#ce6400] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>

                {/* Cart Dropdown */}
                {isCartOpen && (
                    <div className="absolute top-12 right-0 w-80 bg-white border border-[#d4c5ae] rounded-2xl shadow-2xl p-6 cursor-default z-50 flex flex-col" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                            <h3 className="fraunces-tt font-bold text-xl text-gray-900">Your Cart</h3>
                            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-900 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        
                        {cartItems.length === 0 ? (
                            <p className="inter-tt text-sm text-gray-500 text-center py-6">Your cart is empty.</p>
                        ) : (
                            <div className="flex flex-col gap-6 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center">
                                        <div className="w-16 h-16 bg-[#F9F2E6] rounded-xl flex items-center justify-center p-2 shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="fraunces-tt font-semibold text-gray-900 text-sm leading-tight truncate">{item.name}</h4>
                                            <p className="inter-tt text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                                            <p className="inter-tt text-[#ce6400] font-semibold text-sm mt-1">{item.price}</p>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.name)} 
                                            className="text-gray-300 hover:text-red-500 transition-colors p-2 shrink-0"
                                            title="Remove item"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {cartItems.length > 0 && (
                            <button className="w-full bg-gray-900 text-white py-4 mt-6 rounded-xl inter-tt tracking-widest uppercase font-bold text-xs hover:bg-[#ce6400] transition-colors shadow-md">
                                Checkout
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 left-0 h-screen w-1/2 bg-[#F9F2E6] shadow-[20px_0_30px_rgba(0,0,0,0.1)] z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col pt-24 px-8 h-full border-r border-[#d4c5ae]">
                    <ul className='flex flex-col gap-y-10 inter-tt text-[14px] font-normal tracking-[.2em] [&>li]:hover:text-[#ce6400] uppercase'>
                        <li><Link to="/" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>HOME</Link></li>
                        <li><Link to="/shop" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>SHOP</Link></li>
                        <li><Link to="/heritage" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>HERITAGE</Link></li>
                        <li><Link to="/contact" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>CONTACT</Link></li>
                    </ul>
                </div>
            </div>
            
            {/* Mobile Overlay (clicking it closes the menu) */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Navbar;
