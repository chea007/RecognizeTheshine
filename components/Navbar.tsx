
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navTextColor = isScrolled || currentView !== 'home' ? 'text-slate-600' : 'text-white/90';
  const logoTextColor = isScrolled || currentView !== 'home' ? 'text-royal-blue' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className={`text-2xl font-bold tracking-tighter flex items-center ${logoTextColor}`}>
              <i className="fa-solid fa-crown mr-2 text-gold"></i>
              <span className="font-serif">
                Recognize The <span className={isScrolled || currentView !== 'home' ? 'text-shine-blue' : 'text-blue-300'}>Shine</span>
              </span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              <button onClick={() => handleLinkClick('home')} className={`${navTextColor} hover:text-gold font-medium transition-colors`}>Home</button>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  onClick={() => handleLinkClick('specialties')}
                  className={`flex items-center space-x-1 ${navTextColor} hover:text-gold font-medium transition-colors`}
                >
                  <span>Services</span>
                  <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-sm py-4 border-t-2 border-gold animate-fade-in">
                    <button
                      onClick={() => handleLinkClick('specialties')}
                      className="w-full text-left px-6 py-3 text-xs font-bold text-gold bg-slate-50 border-b border-slate-100 hover:bg-slate-100 uppercase tracking-widest"
                    >
                      View All Specialties
                    </button>
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleLinkClick(s.id)}
                        className="w-full text-left px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-royal-blue flex items-center justify-between group"
                      >
                        <span>{s.title}</span>
                        <i className="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}), 100); }} className={`${navTextColor} hover:text-gold font-medium transition-colors`}>About</a>
              
              <button onClick={() => handleLinkClick('contact')} className={`${navTextColor} hover:text-gold font-medium transition-colors`}>Contact</button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className={`border px-4 py-2 rounded-sm font-bold transition-all flex items-center space-x-2 ${isScrolled || currentView !== 'home' ? 'border-royal-blue text-royal-blue hover:bg-slate-50' : 'border-white/30 text-white hover:bg-white/10'}`}
                >
                  <i className="fa-solid fa-phone text-xs"></i>
                  <span>Call Now</span>
                </button>
                <a
                  href="#quote"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('home'); setTimeout(() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                  className="bg-gold text-white px-5 py-2 rounded-sm font-bold hover:bg-yellow-600 transition-all shadow-lg"
                >
                  Instant Quote
                </a>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => handleLinkClick('contact')} className={`${isScrolled || currentView !== 'home' ? 'text-royal-blue' : 'text-white'}`}>
              <i className="fa-solid fa-phone text-xl"></i>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled || currentView !== 'home' ? 'text-royal-blue' : 'text-white'} p-2`}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-2xl absolute w-full top-16 left-0 border-t border-slate-100 h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-6 space-y-4">
            <button onClick={() => handleLinkClick('home')} className="block w-full text-left text-lg font-bold text-royal-blue">Home</button>
            <div className="pt-4 border-t border-slate-100">
              <button onClick={() => handleLinkClick('specialties')} className="text-xs uppercase tracking-widest text-gold font-bold mb-4 block underline">Our Specialties Landing Page</button>
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleLinkClick(s.id)}
                  className="block w-full text-left py-3 text-slate-600 flex items-center justify-between"
                >
                  {s.title}
                  <i className="fa-solid fa-chevron-right text-xs text-gold"></i>
                </button>
              ))}
            </div>
            <button onClick={() => handleLinkClick('contact')} className="block w-full text-left text-lg font-bold text-royal-blue pt-4 border-t border-slate-100">Contact Us</button>
            <a href="#about" onClick={() => handleLinkClick('home')} className="block w-full text-left text-lg font-bold text-royal-blue pt-4 border-t border-slate-100">About Us</a>
            
            <div className="grid grid-cols-1 gap-4 mt-6">
               <button onClick={() => handleLinkClick('contact')} className="w-full bg-royal-blue text-white py-4 rounded-sm font-bold text-center flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-phone"></i>
                  <span>Call Now</span>
               </button>
               <button
                onClick={() => { handleLinkClick('home'); setTimeout(() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                className="w-full bg-gold text-white py-4 rounded-sm font-bold text-center"
               >
                Get Instant Quote
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
