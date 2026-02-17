
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Specialties</span>
          <h2 className="text-royal-blue text-4xl md:text-5xl font-bold mb-6">Bespoke Cleaning Solutions</h2>
          <div className="h-1.5 w-16 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onServiceClick(service.id)}
              className="group bg-white border border-slate-100 rounded-sm shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-royal-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white text-royal-blue px-6 py-2 rounded-sm font-bold text-sm tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">EXPLORE</span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg">
                  <i className={`fa-solid ${service.icon} text-royal-blue text-lg`}></i>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-royal-blue mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">From</p>
                    <span className="text-royal-blue font-bold text-lg">${service.priceStart}</span>
                  </div>
                  <i className="fa-solid fa-arrow-right-long text-gold group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
