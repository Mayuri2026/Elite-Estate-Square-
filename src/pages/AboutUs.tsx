import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Globe } from 'lucide-react';
import Counter from '../components/Counter';

const team = [
  { name: 'Marcus Sterling', role: 'Founder & Visionary', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80' },
  { name: 'Elena Vance', role: 'Elite Broker', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80' },
  { name: 'Dr. Julius Aris', role: 'Architecture Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80' },
  { name: 'Sophia Lin', role: 'Intergalactic Relations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80' },
];

const AboutUs = () => {
  useEffect(() => {
    document.title = "Our Vision & The Squad | Elite Estate Squad";
  }, []);

  return (
    <div className="w-full relative z-10 pt-20 pb-20">
      <div className="fixed top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-float" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-8"
          >
            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent-purple">Luxury Real Estate</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 font-light leading-relaxed"
          >
            At Elite Estate Squad, we operate at the bleeding edge of structural innovation and luxury living. We believe that true exclusivity defies gravity, limitations, and traditional planetary boundaries.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { label: 'Off-World Units Sold', value: 4500, suffix: '+' },
            { label: 'Elite Sectors Secured', value: 120, suffix: '' },
            { label: 'Client Satisfaction', value: 99, suffix: '%' },
            { label: 'Asset Valuation', value: 50, suffix: 'B+' },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 glass-card rounded-[2rem] border border-white/5"
            >
              <div className="text-3xl md:text-5xl font-black text-primary-light mb-2">
                <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Target size={32} />, title: 'Unmatched Precision', desc: 'Every property is rigorously selected passing our elite orbital standards.' },
            { icon: <Globe size={32} />, title: 'Global & Beyond', desc: 'From penthouses in high-orbit Neo Tokyo to bio-domes on Ceres.' },
            { icon: <Shield size={32} />, title: 'Absolute Discretion', desc: 'Quantum-encrypted transactions ensuring your privacy is absolute.' },
          ].map((val, idx) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet <span className="text-primary-light">The Squad</span></h2>
            <p className="text-gray-400">The visionaries behind your next elevation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
              >
                <div className="relative h-96 w-full overflow-hidden rounded-3xl glass-card neon-border">
                  <img src={member.image} alt={member.name} className="w-full h-[120%] object-cover group-hover:translate-y-[-10%] transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">{member.name}</h3>
                    <div className="h-px w-0 bg-primary-light group-hover:w-full transition-all duration-500 mb-2" />
                    <p className="text-gray-400 text-sm tracking-widest uppercase">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
