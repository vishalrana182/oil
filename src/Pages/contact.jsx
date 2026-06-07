import React from 'react';
import contactSvg from '../assets/undraw_content-team_1p7b.svg';

const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-[#F9F2E6] flex items-center justify-center p-10">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-16">

                {/* Left Side - Transparent Form Card */}
                <div className="w-full md:w-1/2 p-10 bg-white/10 backdrop-blur-md border border-[#d4c5ae]/40 rounded-4xl shadow-xl">
                    <div className="mb-10">
                        <h2 className="fraunces-tt text-5xl font-bold text-gray-900 mb-3">Get in Touch</h2>
                        <p className="inter-tt text-xs tracking-[0.2em] uppercase text-gray-500">We'd love to hear from you</p>
                    </div>

                    <form className="space-y-8 inter-tt">
                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="block text-xs font-semibold tracking-wider text-gray-700 uppercase mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-gray-400 focus:border-[#ce6400] outline-none py-2 transition-colors placeholder-gray-400 text-gray-900"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="w-1/2">
                                <label className="block text-xs font-semibold tracking-wider text-gray-700 uppercase mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-gray-400 focus:border-[#ce6400] outline-none py-2 transition-colors placeholder-gray-400 text-gray-900"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold tracking-wider text-gray-700 uppercase mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-gray-400 focus:border-[#ce6400] outline-none py-2 transition-colors placeholder-gray-400 text-gray-900"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold tracking-wider text-gray-700 uppercase mb-4">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-transparent border border-gray-400 focus:border-[#ce6400] rounded-2xl outline-none p-5 transition-colors placeholder-gray-400 text-gray-900 resize-none"
                                placeholder="Tell us more about your inquiry..."
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full py-4 mt-2 bg-gray-900 text-white rounded-full inter-tt tracking-widest uppercase font-bold text-xs hover:bg-[#ce6400] hover:scale-[1.02] transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side - SVG */}
                <div className="w-full md:w-1/2 flex justify-center p-10">
                    <img src={contactSvg} alt="Contact Us" className="w-full max-w-lg drop-shadow-2xl" />
                </div>

            </div>
        </div>
    );
};

export default Contact;
