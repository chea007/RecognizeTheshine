
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import SpecialtiesPage from './components/SpecialtiesPage';
import { SERVICES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const activeService = SERVICES.find(s => s.id === currentView);

  const renderContent = () => {
    if (currentView === 'home') {
      return (
        <>
          <Hero 
            onSpecialtiesClick={() => setCurrentView('specialties')} 
            onBookClick={() => setCurrentView('contact')}
          />
          
          {/* Trust Bar */}
          <div className="bg-royal-blue py-10 border-y border-gold/20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-wrap justify-around items-center gap-10">
                <div className="flex flex-col items-center">
                  <span className="text-gold font-bold text-3xl mb-1">4.9/5</span>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Google Reviews</span>
                </div>
                <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                <div className="flex flex-col items-center">
                  <span className="text-gold font-bold text-3xl mb-1">1k+</span>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Homes Polished</span>
                </div>
                <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                <div className="flex flex-col items-center">
                  <span className="text-gold font-bold text-3xl mb-1">100%</span>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Vetted Staff</span>
                </div>
              </div>
            </div>
          </div>

          <Services onServiceClick={setCurrentView} />
          
          {/* About Section */}
          <section id="about" className="py-24 bg-white border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2 relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=1200"
                    alt="Professional cleaner working"
                    className="rounded-sm shadow-2xl relative z-10 border-8 border-white"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-royal-blue text-white p-10 shadow-2xl z-20 border-b-4 border-gold">
                    <p className="text-5xl font-bold mb-1 text-gold">15+</p>
                    <p className="text-xs uppercase tracking-widest text-white/70 font-bold leading-tight">Years of Elite<br/>Experience</p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-4">The Standard of Excellence</h2>
                  <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-8 leading-tight">Why We "Recognize<br/>The <span className="text-shine-blue">Shine</span>"</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed italic">
                    "Luxury is not just in the aesthetic, but in the attention to the unseen."
                  </p>
                  <p className="text-slate-500 mb-10 leading-relaxed">
                    We believe that every home has a natural brilliance waiting to be revealed. Our team doesn't just "clean"; we perform a royal treatment, paying attention to the details that others miss. From the Main Line to Center City, we are the first choice for Philadelphia's most distinguished residents.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div className="flex items-start space-x-4">
                      <div className="text-gold text-2xl pt-1">
                        <i className="fa-solid fa-crown"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-royal-blue uppercase tracking-widest text-xs mb-2">Elite Training</h4>
                        <p className="text-sm text-slate-500">Every cleaner is trained in white-glove protocols.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-gold text-2xl pt-1">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-royal-blue uppercase tracking-widest text-xs mb-2">Eco-Conscious</h4>
                        <p className="text-sm text-slate-500">Premium non-toxic supplies for a safer home.</p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="#quote"
                    onClick={(e) => { e.preventDefault(); document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'}) }}
                    className="bg-royal-blue text-white px-12 py-4 rounded-sm font-bold hover:bg-slate-800 transition-all shadow-xl inline-block"
                  >
                    SCHEDULE A CONSULTATION
                  </a>
                </div>
              </div>
            </div>
          </section>

          <BookingForm />
          <Testimonials />
        </>
      );
    }

    if (currentView === 'contact') {
      return <ContactPage />;
    }

    if (currentView === 'specialties') {
      return <SpecialtiesPage onServiceClick={setCurrentView} />;
    }

    if (activeService) {
      return <ServicePage service={activeService} />;
    }

    return null;
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      {renderContent()}
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
