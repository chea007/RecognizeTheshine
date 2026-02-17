
import React, { useState, useEffect } from 'react';
import { getInstantQuoteAI } from '../services/gemini';
import { QuoteRequest } from '../types';

interface BookingFormProps {
  preSelectedService?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ preSelectedService }) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    serviceType: preSelectedService || 'deep-cleaning',
    bedrooms: 2,
    bathrooms: 2,
    frequency: 'one-time',
    address: '',
    phone: '',
  });

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceType: preSelectedService }));
    }
  }, [preSelectedService]);

  const [aiResult, setAiResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await getInstantQuoteAI(formData);
    setAiResult(result);
    setIsLoading(false);
  };

  return (
    <section id="quote" className="py-24 bg-royal-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <i className="fa-solid fa-crown text-[25rem]"></i>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Claim Your Crown Service</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Fill out the form to receive an instant premium estimate powered by our Shine-Intelligence AI. We specialize in high-end properties in the Philadelphia area.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <i className="fa-solid fa-shield-heart text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Fully Insured & Bonded</h4>
                    <p className="text-white/60 text-sm">Rest easy knowing your palace is protected.</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <i className="fa-solid fa-leaf text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Eco-Luxury Products</h4>
                    <p className="text-white/60 text-sm">Safe for royalty, children, and pets.</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <i className="fa-solid fa-star text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Satisfaction Guaranteed</h4>
                    <p className="text-white/60 text-sm">We don't leave until it's perfectly polished.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-sm p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Service Type</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-royal-blue text-sm"
                  >
                    <option value="recurring-cleaning">Recurring Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="commercial-cleaning">Commercial Cleaning</option>
                    <option value="move-in-cleaning">Move-In Cleaning</option>
                    <option value="move-out-cleaning">Move-Out Cleaning</option>
                    <option value="post-construction-cleaning">Post-Construction</option>
                    <option value="post-event-cleaning">Post-Event Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Frequency</label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value as any })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-royal-blue text-sm"
                  >
                    <option value="one-time">One Time</option>
                    <option value="weekly">Weekly (15% Off)</option>
                    <option value="bi-weekly">Bi-Weekly (10% Off)</option>
                    <option value="monthly">Monthly (5% Off)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: parseInt(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: parseFloat(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(215) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-royal-blue"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-royal-blue text-white font-bold py-5 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 text-lg"
              >
                {isLoading ? (
                  <i className="fa-solid fa-crown fa-spin text-gold"></i>
                ) : (
                  <>
                    <i className="fa-solid fa-sparkles text-gold"></i>
                    <span>GENERATE ROYAL QUOTE</span>
                  </>
                )}
              </button>
            </form>

            {aiResult && (
              <div className="mt-8 p-8 bg-slate-50 rounded-sm border-2 border-gold/30 animate-fade-in">
                <h4 className="font-bold text-royal-blue mb-4 flex items-center uppercase tracking-widest text-sm">
                  <i className="fa-solid fa-robot mr-3 text-gold"></i>
                  Shine-Intelligence Report
                </h4>
                <div className="text-slate-600 text-sm whitespace-pre-line italic leading-relaxed">
                  {aiResult}
                </div>
                <button className="mt-6 w-full bg-gold text-white font-bold py-3 rounded-sm hover:bg-yellow-600 transition-all shadow-lg">
                  CONFIRM BOOKING
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
