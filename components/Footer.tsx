
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold tracking-tighter flex items-center mb-6">
              <i className="fa-solid fa-crown mr-2 text-gold"></i>
              <span className="font-serif">Recognize The <span className="text-shine-blue">Shine</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Philadelphia's most trusted premium cleaning service. We combine elite training with advanced technology to deliver royal results.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-gold transition-colors">Residential Cleaning</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Deep Clean Specialist</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Commercial & Office</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Move In/Out Experts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-gold text-xs"></i>
                <span>(215) SHINE-ON</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-gold text-xs"></i>
                <span>hello@recognizetheshine.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-location-dot text-gold text-xs"></i>
                <span>Philadelphia, PA</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Recognize The Shine. All rights reserved. Philadelphia, PA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
