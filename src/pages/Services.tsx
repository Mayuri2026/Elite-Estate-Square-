import { motion } from 'framer-motion';
import { HandCoins, Home, TrendingUp, Sparkles, Navigation, Layers } from 'lucide-react';

const services = [
  {
    icon: <Home size={40} />,
    title: 'Elite Buying',
    desc: 'Exclusive access to unlisted orbital and gravity-defying properties. We navigate the complexities of multi-planetary real estate.',
  },
  {
    icon: <HandCoins size={40} />,
    title: 'Premium Selling',
    desc: 'AI-driven valuations, holographic staging, and a targeted network of ultra-high-net-worth buyers across off-world sectors.',
  },
  {
    icon: <TrendingUp size={40} />,
    title: 'Investment Consulting',
    desc: 'Identify emerging sky-districts and lunar colonies before the curve. Full-scale portfolio management and ROI optimization.',
  },
  {
    icon: <Layers size={40} />,
    title: 'Architectural Overhauls',
    desc: 'Collaborate with our renowned designers to customize energy fields, atmospheric domes, and zero-G recreational areas.',
  },
  {
    icon: <Navigation size={40} />,
    title: 'Interstellar Relocation',
    desc: 'Seamless moving logistics, quantum legal clearances, and biometric transition support for your new premium space.',
  },
  {
    icon: <Sparkles size={40} />,
    title: 'Concierge Services',
    desc: 'Post-purchase lifestyle management including hyper-yacht docking, automated robotic staffing, and security deployment.',
  }
];

const Services = () => {
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
            Beyond Ordinary <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Consulting</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light"
          >
            We provide comprehensive services to ensure your transition into elevated living is absolutely smooth, secure, and luxurious.
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
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-[2rem] p-10 border border-white/5 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
              
              <div className="relative z-10">
                <div className="text-primary-light mb-8 group-hover:scale-110 group-hover:text-white transition-all duration-500 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center border border-primary/20 neon-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-accent-purple/10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to elevate your portfolio?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Connect with our dedicated consultants to align your investments with the future of luxury living.</p>
            <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all hover:scale-105">
              Request Consultation
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
