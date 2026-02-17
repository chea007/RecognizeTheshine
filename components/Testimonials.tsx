
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-blue text-4xl font-bold mb-4">Voices of Luxury</h2>
          <p className="text-slate-600">Hear from our esteemed clients across Philadelphia and the Main Line.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-gold mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-sm"></i>
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.comment}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-royal-blue/10 rounded-full flex items-center justify-center text-royal-blue font-bold">
                  {t.name[0]}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
