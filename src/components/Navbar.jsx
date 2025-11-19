import React, { useState, useEffect } from 'react';
import { Scan, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-teal-600">
            <Scan size={32} strokeWidth={2.5} />
            <span className="text-2xl font-bold tracking-tight text-slate-800">Derma<span className="text-teal-600">Smart</span>.AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-600 hover:text-teal-600 font-medium transition">Beranda</a>
            <a href="#technology" className="text-slate-600 hover:text-teal-600 font-medium transition">Teknologi</a>
            <a href="#scan" className="text-slate-600 hover:text-teal-600 font-medium transition">AI Scan</a>
            <a href="#doctors" className="text-slate-600 hover:text-teal-600 font-medium transition">Dokter</a>
            <button className="bg-teal-600 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-700 transition shadow-lg shadow-teal-600/20">
              Masuk Akun
            </button>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full p-4 flex flex-col gap-4 shadow-lg">
          <a href="#home" className="text-slate-600 font-medium">Beranda</a>
          <a href="#technology" className="text-slate-600 font-medium">Teknologi</a>
          <a href="#scan" className="text-slate-600 font-medium">AI Scan</a>
          <button className="bg-teal-600 text-white px-5 py-2 rounded-full w-full">Masuk Akun</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
