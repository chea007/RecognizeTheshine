
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    email: '',
    services: [] as string[],
    message: '',
    consent: false
  });

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen animate-fade-in">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
          Have questions? We have answers! Get in touch with us!
        </h1>
        <p className="text-xl text-slate-600 font-medium">Ready for your clean home?</p>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#26c6da] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-location-dot text-2xl text-white"></i>
            </div>
            <h3 className="text-[#26c6da] font-bold mb-4 uppercase tracking-wider text-sm">Location</h3>
            <p className="text-slate-600 font-medium">
              280 W Essex Ave, Lansdowne, PA<br />
              19050, United States
            </p>
          </div>

          {/* Call Us Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#26c6da] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-phone text-2xl text-white"></i>
            </div>
            <h3 className="text-[#26c6da] font-bold mb-4 uppercase tracking-wider text-sm">Call Us</h3>
            <p className="text-slate-600 font-medium">
              Phone : +1 215-555-7446
            </p>
          </div>

          {/* Email Us Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#26c6da] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-envelope text-2xl text-white"></i>
            </div>
            <h3 className="text-[#26c6da] font-bold mb-4 uppercase tracking-wider text-sm">Email Us</h3>
            <p className="text-slate-600 font-medium">
              hello@recognizetheshine.com
            </p>
          </div>
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Estimate Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-royal-blue mb-8 font-serif">Get a Free Cleaning Estimate</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#26c6da] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#26c6da] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">ZIP Code <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter ZIP Code"
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#26c6da] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#26c6da] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-widest text-[10px]">Desired Service</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-md border border-slate-100">
                  {[
                    'Recurring Cleaning', 'Deep Cleaning', 'Move-In Cleaning',
                    'Move-Out Cleaning', 'Post-Event Cleaning',
                    'Post-Construction Cleaning', 'Commercial Cleaning'
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-3 text-sm text-slate-600 cursor-pointer hover:text-royal-blue transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 text-[#26c6da] border-slate-300 rounded focus:ring-[#26c6da]"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Describe your issue, question, or any other details you'd like us to know about"
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#26c6da] resize-none transition-all"
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 text-[#26c6da] border-slate-300 rounded focus:ring-[#26c6da]"
                />
                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                  By checking the box, you agree to receive email, text, or voice updates from Recognize The Shine. Carrier fees may apply.
                </label>
              </div>

              <button
                type="button"
                className="w-full bg-[#26c6da] text-white font-bold py-5 rounded-md hover:bg-[#21b1c3] transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl active:translate-y-px"
              >
                Request a free quote now
              </button>
            </form>
          </div>

          {/* Map Embed */}
          <div className="relative min-h-[500px] lg:min-h-full bg-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.231263884351!2d-75.2635431846182!3d39.93621497942421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c1676f00199d%3A0xc3f7a450c2a8f89c!2s280%20W%20Essex%20Ave%2C%20Lansdowne%2C%20PA%2019050%2C%20USA!5e0!3m2!1sen!2sus!4v1708892113112!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-90"
            ></iframe>
            {/* Custom Info Box atop map */}
            <div className="absolute top-8 left-8 bg-white p-6 shadow-2xl rounded-sm text-xs hidden sm:block max-w-[240px] border-t-4 border-gold">
              <h4 className="font-bold text-royal-blue text-sm mb-2">Recognize The Shine</h4>
              <p className="text-slate-500 mb-3">Serving Lansdowne, Philadelphia & the Main Line.</p>
              <div className="flex items-center text-gold mb-3">
                <span className="font-bold mr-1 text-sm">5.0</span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span className="text-slate-400 ml-2 font-normal">78 reviews</span>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-royal-blue text-white px-4 py-2 rounded-sm font-bold block text-center hover:bg-slate-800 transition-colors">
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
