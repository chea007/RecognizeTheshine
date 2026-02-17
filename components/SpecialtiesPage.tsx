
import React from 'react';
import { SERVICES } from '../constants';

interface SpecialtiesPageProps {
  onServiceClick: (serviceId: string) => void;
}

const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({ onServiceClick }) => {
  return (
    <div className="pt-24 bg-white animate-fade-in">
      {/* Page Header */}
      <div className="relative py-24 bg-royal-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury home background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-bold tracking-[0.5em] uppercase text-xs mb-4 block">The Royal Standard</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Our Specialties</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            From historic Philadelphia townhomes to modern Main Line estates, our specialized cleaning protocols are tailored to meet the highest standards of luxury and care.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col lg:flex-row gap-8 items-center group cursor-pointer ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              onClick={() => onServiceClick(service.id)}
            >
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-royal-blue/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  <i className={`fa-solid ${service.icon} text-royal-blue text-xl`}></i>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-gold font-bold text-xs tracking-widest uppercase">Specialty {index + 1}</span>
                  <div className="h-px w-8 bg-gold/30"></div>
                </div>
                <h3 className="text-3xl font-bold text-royal-blue mb-4 group-hover:text-shine-blue transition-colors font-serif">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {service.detailedDescription.split('.')[0]}. {service.detailedDescription.split('.')[1]}.
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pricing From</span>
                    <span className="text-xl font-bold text-royal-blue">${service.priceStart}</span>
                  </div>
                  <button className="text-gold font-bold flex items-center space-x-2 group-hover:space-x-4 transition-all">
                    <span>EXPLORE SERVICE</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Highlight */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-royal-blue mb-4">Why Philadelphia Chooses Our Specialists</h2>
            <div className="h-1 w-12 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white shadow-sm rounded-sm">
              <i className="fa-solid fa-microscope text-4xl text-gold mb-6"></i>
              <h4 className="font-bold text-royal-blue mb-4 uppercase tracking-widest text-xs">Vetted Protocols</h4>
              <p className="text-sm text-slate-500">Every service follows a rigorous multi-point checklist inspected by a field manager.</p>
            </div>
            <div className="text-center p-8 bg-white shadow-sm rounded-sm">
              <i className="fa-solid fa-users-gear text-4xl text-gold mb-6"></i>
              <h4 className="font-bold text-royal-blue mb-4 uppercase tracking-widest text-xs">Expert Training</h4>
              <p className="text-sm text-slate-500">Our staff undergoes continuous elite-standard cleaning training in luxury material care.</p>
            </div>
            <div className="text-center p-8 bg-white shadow-sm rounded-sm">
              <i className="fa-solid fa-award text-4xl text-gold mb-6"></i>
              <h4 className="font-bold text-royal-blue mb-4 uppercase tracking-widest text-xs">Premium Supplies</h4>
              <p className="text-sm text-slate-500">We exclusively use high-performance, non-toxic, and surface-safe cleaning agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-white py-24 text-center">
        <h2 className="text-4xl font-bold text-royal-blue mb-8">Ready to Restore Your Home's Shine?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
             onClick={() => { window.location.href = '#quote' }}
             className="bg-gold text-white px-12 py-4 rounded-sm font-bold shadow-xl hover:bg-yellow-600 transition-all"
          >
            GET AN INSTANT QUOTE
          </button>
          <a href="tel:2155557446" className="border border-royal-blue text-royal-blue px-12 py-4 rounded-sm font-bold hover:bg-royal-blue hover:text-white transition-all">
            CONSULT WITH AN EXPERT
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesPage;
