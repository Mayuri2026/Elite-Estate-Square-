import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandCoins, Home, TrendingUp, Sparkles, Navigation, Layers, ChevronDown } from 'lucide-react';

const services = [
  { icon: <Home size={40} />, title: 'Elite Buying', desc: 'Exclusive access to unlisted orbital and gravity-defying properties. We navigate the complexities of multi-planetary real estate.' },
  { icon: <HandCoins size={40} />, title: 'Premium Selling', desc: 'AI-driven valuations, holographic staging, and a targeted network of ultra-high-net-worth buyers across off-world sectors.' },
  { icon: <TrendingUp size={40} />, title: 'Investment Consulting', desc: 'Identify emerging sky-districts and lunar colonies before the curve. Full-scale portfolio management and ROI optimization.' },
  { icon: <Layers size={40} />, title: 'Architectural Overhauls', desc: 'Collaborate with our renowned designers to customize energy fields, atmospheric domes, and zero-G recreational areas.' },
  { icon: <Navigation size={40} />, title: 'Interstellar Relocation', desc: 'Seamless moving logistics, quantum legal clearances, and biometric transition support for your new premium space.' },
  { icon: <Sparkles size={40} />, title: 'Concierge Services', desc: 'Post-purchase lifestyle management including hyper-yacht docking, automated robotic staffing, and security deployment.' },
];

const faqs = [
  { q: "How is oxygen density regulated in high-orbit units?", a: "Each elite unit is equipped with a tri-redundant AtmosSync system that maintains Earth-standard O2/N2 levels with zero fluctuations, even during solar flares." },
  { q: "What security measures are in place for off-world residences?", a: "We utilize quantum-encrypted entry protocols and orbital drone surveillance grids to ensure absolute discretion and safety for our high-profile residents." },
  { q: "Are inter-sector transport services included in the purchase?", a: "Yes, every primary resident receives unlimited access to our Elite Shuttle Fleet for transit between Neo Tokyo and Mars Base Alpha." },
  { q: "Is gravity simulated or natural in the asteroid sectors?", a: "Most asteroid units use centrifugal rotation to provide 0.9G Earth-standard gravity, which is adjustable via your central CoreOS unit." }
];

const Services = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Protocol & Services | Elite Estate Squad";
  }, []);

  return (
    <div className="w-full relative z-10 pt-20 pb-20">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[200px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <Sparkles className="text-primary-light" size={28} />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Beyond Ordinary <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400 font-black">Consulting</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light leading-relaxed"
          >
            We provide the technical and legal framework to ensure your transition into elevated living is perfectly synchronized, secure, and luxurious.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-[2rem] p-10 border border-white/5 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
              
              <div className="relative z-10">
                <div className="text-primary-light mb-8 group-hover:scale-110 group-hover:text-white transition-all duration-500 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Frequently <span className="text-primary-light font-black">Analyzed</span> Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left group transition-all"
                >
                  <span className="text-white font-bold text-sm uppercase tracking-widest group-hover:text-primary-light transition-colors">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-600 transition-transform duration-500 ${activeFaq === idx ? 'rotate-180 text-primary-light' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-8 pb-7"
                    >
                      <p className="text-gray-400 text-sm font-light leading-relaxed border-t border-white/5 pt-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-5xl mx-auto glass-card rounded-[3rem] p-16 text-center border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-accent-purple/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">Ready to <span className="text-primary-light font-black">Initiate?</span></h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">Connect with our dedicated consultants to align your coordinates with the future of luxury living.</p>
            <button className="bg-primary hover:bg-primary-light text-white font-black py-5 px-14 rounded-2xl uppercase tracking-[0.3em] text-xs shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition-all hover:scale-105 active:scale-95">
              Request Full Protocol
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
