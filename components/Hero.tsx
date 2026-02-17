
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onSpecialtiesClick: () => void;
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSpecialtiesClick, onBookClick }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000",
      alt: "Professional cleaning team at work"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
      alt: "Pristine luxury kitchen surfaces"
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
      alt: "High-end commercial office space"
    },
    {
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000",
      alt: "Spotless luxury living environment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000); // 8 second interval

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                index === currentImage ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        {/* Deep overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/90 via-royal-blue/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4 animate-fade-in">
            <div className="h-1 w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.3em] font-semibold text-sm">Philadelphia & Suburbs</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Recognize The <br />
            <span className="text-blue-400 italic">Shine</span>.
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed animate-slide-up delay-200">
            Premium cleaning services that treat your home like a palace. Experience the royal standard in the City of Brotherly Love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
            <button
              onClick={onBookClick}
              className="bg-gold text-white px-10 py-4 rounded-sm font-bold text-center hover:bg-yellow-600 transition-all shadow-xl hover:translate-y-[-2px] active:translate-y-0"
            >
              Book Your Session
            </button>
            <button
              onClick={onSpecialtiesClick}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-sm font-bold text-center hover:bg-white/20 transition-all"
            >
              Our Specialties
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentImage ? 'w-8 bg-gold' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-10 text-white animate-bounce hidden md:block z-20">
        <i className="fa-solid fa-chevron-down text-2xl opacity-50"></i>
      </div>
    </div>
  );
};

export default Hero;
