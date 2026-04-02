import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Rocket } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Elite Squad | Secure Communication";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full relative z-10 pt-20 pb-20">
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Initiate <span className="text-primary-light">Contact</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Secure communication channels are open. Connect with the Elite Estate Squad to begin your ascension into luxury.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Global Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-light border border-white/10 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Central Hub</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Level 99, Apex Spire<br/>Neo Tokyo, NT 100-0099</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-light border border-white/10 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Encrypted Comm</h4>
                      <p className="text-gray-400 text-sm">concierge@eliteestatesquad.com<br/>security@eliteestatesquad.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-light border border-white/10 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Direct Line</h4>
                      <p className="text-gray-400 text-sm">+88 000 111 9999<br/>Available 24/7 Orbital Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-3xl p-8 md:p-10 border border-primary/20 neon-border relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary-light mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                      <Send size={40} className="animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 italic uppercase tracking-tighter">Transmission Successful</h3>
                    <p className="text-gray-400 max-w-sm">Your coordinates and message have been received. A liaison officer will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <Rocket size={120} className="text-primary-light" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send a Secure Transmission</h3>
                    
                    <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold pl-1">Identification</label>
                          <input required type="text" placeholder="Full Name" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary-light focus:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold pl-1">Comm Link</label>
                          <input required type="email" placeholder="Email Address" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary-light focus:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold pl-1">Objective</label>
                        <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-light focus:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all appearance-none cursor-pointer">
                          <option className="bg-card">I'm looking to buy property</option>
                          <option className="bg-card">I'm looking to sell property</option>
                          <option className="bg-card">Investment Consultation</option>
                          <option className="bg-card">Other Inquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold pl-1">Message Data</label>
                        <textarea required rows={5} placeholder="Provide details requirements or coordinates..." className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary-light focus:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all resize-none"></textarea>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-bold rounded-xl py-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
                      >
                        <Send size={20} />
                        Transmit Message
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 h-96 w-full rounded-3xl glass-card overflow-hidden border border-white/10 relative p-1"
        >
          <div className="w-full h-full bg-card rounded-[1.3rem] overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center animate-ping">
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,1)]" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
