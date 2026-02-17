
import React, { useState, useRef, useEffect } from 'react';
import { chatWithExpert } from '../services/gemini';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to the Palace! I am Shine, your royal cleaning advisor. How can I help you today? You can even send me a photo of a problem area for a visual consultation!' }
  ]);
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if ((!textToSend.trim() && !selectedImage) || isLoading) return;

    const userMsg: ChatMessage = { 
      role: 'user', 
      text: textToSend.trim() || (selectedImage ? "Look at this photo for me." : ""),
      image: selectedImage || undefined
    };

    setInput('');
    const currentImage = selectedImage;
    setSelectedImage(null);
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    const response = await chatWithExpert(textToSend, currentImage || undefined);
    setMessages(prev => [...prev, { role: 'model', text: response || "I've analyzed your request. How else can I assist?" }]);
    setIsLoading(false);
  };

  const quickChips = [
    "What is included in a Deep Clean?",
    "Do you serve the Main Line?",
    "How do I clean marble countertops?",
    "Get an instant quote"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-royal-blue text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-gold relative"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-wand-magic-sparkles'} text-2xl`}></i>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-gold"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[420px] h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-100 animate-slide-up">
          {/* Header */}
          <div className="bg-royal-blue p-5 text-white flex items-center justify-between border-b border-gold/30">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
                <i className="fa-solid fa-crown text-royal-blue text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight font-serif">Shine AI Advisor</h4>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Multimodal Elite Assistant</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.length === 1 && (
              <div className="grid grid-cols-1 gap-2 mb-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-center">Suggested Topics</p>
                {quickChips.map((chip) => (
                  <button 
                    key={chip}
                    onClick={() => handleSend(chip)}
                    className="text-xs bg-white border border-slate-200 px-4 py-3 rounded-sm text-royal-blue hover:bg-royal-blue hover:text-white transition-all text-left shadow-sm font-medium"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                {m.image && (
                  <div className="mb-2 max-w-[70%] rounded-lg overflow-hidden border-2 border-white shadow-md">
                    <img src={m.image} alt="User upload" className="w-full h-auto object-cover" />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-royal-blue text-white rounded-tr-none shadow-lg' 
                    : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-200 font-medium'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start items-center space-x-3">
                <div className="w-8 h-8 bg-royal-blue/10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-sparkles text-royal-blue text-xs animate-spin"></i>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex space-x-1">
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            {selectedImage && (
              <div className="mb-3 relative inline-block">
                <img src={selectedImage} className="w-16 h-16 object-cover rounded-md border-2 border-gold shadow-md" alt="Preview" />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] shadow-lg"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedImage ? 'bg-gold text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                title="Upload photo for consultation"
              >
                <i className="fa-solid fa-camera"></i>
              </button>
              
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our royal services..."
                className="flex-1 bg-slate-50 border border-slate-100 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 placeholder:text-slate-400"
              />
              
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
                  isLoading ? 'bg-slate-100 text-slate-400' : 'bg-royal-blue text-white hover:bg-slate-800'
                }`}
              >
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
