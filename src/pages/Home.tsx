import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MapPin, Grid, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import Counter from '../components/Counter';
import SectorMap from '../components/SectorMap';

const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    document.title = "Elite Estate Squad | Defying Gravity in Futuristic Living";
  }, []);

  const handleSearch = () => {
    navigate(`/listings?search=${search}&type=${type}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-[150%] object-cover object-center translate-y-[-20%] opacity-60"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/20 rounded-full blur-[100px] animate-float-slow z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/20 rounded-full blur-[120px] animate-float z-10 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Defying Gravity in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-blue-400 to-accent-purple text-glow mt-2">
              Futuristic Living
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
          >
            Explore ultra-premium real estate floating beyond boundaries. Experience immersive living spaces designed for the elite.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-4xl glass-card rounded-2xl p-4 md:p-6 drop-shadow-2xl z-30 flex flex-col md:flex-row gap-4 relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="flex-1 relative z-10 w-full">
              <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary-light/50 transition-colors">
                <MapPin className="text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Location, City, or Planet..." 
                  className="bg-transparent w-full text-white focus:outline-none placeholder:text-gray-500" 
                />
              </div>
            </div>
            
            <div className="flex-1 relative z-10 w-full flex gap-4">
              <div className="flex-1 flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary-light/50 transition-colors">
                <Grid className="text-gray-400" size={20} />
                <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="bg-transparent w-full text-gray-300 focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" className="bg-card">Property Type</option>
                  <option value="Sky Villa" className="bg-card">Sky Villa</option>
                  <option value="Orbital Estate" className="bg-card">Orbital Estate</option>
                  <option value="Penthouse" className="bg-card">Gravity Penthouse</option>
                </select>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2 relative z-10 group/btn"
            >
              <Search size={20} className="group-hover/btn:animate-pulse" />
              Explore Spaces
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-gray-400"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary-light to-transparent mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* Stats Quick Preview */}
      <section className="py-20 relative z-10 border-y border-white/5 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Properties', value: 450, suffix: '+' },
              { label: 'Happy Clients', value: 1200, suffix: '+' },
              { label: 'Sectors', value: 15, suffix: '' },
              { label: 'Total Valuation', value: 25, suffix: 'B+' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-primary-light transition-colors">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Map Experience */}
      <section className="py-24 relative overflow-hidden bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center lg:text-left flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] text-gray-500 uppercase tracking-[0.5em] font-black mb-4 block"
              >
                Orbital Coverage
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">Explore the <span className="text-primary-light font-black">Sectors</span></h2>
              <p className="text-gray-400 mt-4 leading-relaxed font-light text-lg">Interactive mapping of our established orbital hubs. Select a sector to verify localized market data and active listing coordinates.</p>
            </div>
            <Link to="/listings" className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white/50 hover:text-primary-light transition-all border-b border-white/5 pb-2">
              Comprehensive List <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectorMap />
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">
                Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Listings</span>
              </h2>
              <p className="text-gray-400 max-w-xl">Curated floating spaces that elevate luxury to the stars. Experience breathtaking views and anti-gravity architecture.</p>
            </div>
            <Link to="/listings" className="hidden md:flex items-center gap-2 text-primary-light hover:text-white transition-colors group">
              View All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {featuredProperties.map((prop, idx) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer block relative transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] neon-border p-1 hologram-shine"
              >
                <Link to={`/property/${prop.id}`}>
                  <div className="relative h-72 overflow-hidden rounded-[2rem] bg-card p-1">
                    <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden">
                      <img 
                        src={prop.image} 
                        alt={prop.title} 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:opacity-0" 
                      />
                      
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 scale-110 group-hover:scale-100"
                      >
                        <source src={prop.video} type="video/mp4" />
                      </video>

                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-primary-light flex items-center gap-1 backdrop-blur-xl border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                        Live Tour
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">{prop.title}</h3>
                        <p className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin size={14} className="text-primary" /> {prop.location}
                        </p>
                      </div>
                      <div className="text-xl font-black text-white text-glow">
                        {prop.price}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm font-light mb-6 line-clamp-1">{prop.description}</p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <span className="text-sm font-bold text-white group-hover:text-primary-light transition-colors flex items-center gap-2">
                        Explore Space <ArrowRight size={16} />
                      </span>
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-card overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Agent" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card/10 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">
              Redefining <span className="text-primary-light">Architectural</span> Boundaries
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just sell properties; we curate future-proof living experiences that defy conventional limits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Anti-Gravity Tech", 
                desc: "Every property is equipped with the latest structural levitation systems for unparalleled views.",
                icon: <Grid className="text-primary-light" size={40} />
              },
              { 
                title: "Smart Ecosystems", 
                desc: "Fully autonomous home management systems that learn and adapt to your every need.",
                icon: <MapPin className="text-primary-light" size={40} />
              },
              { 
                title: "Elite Security", 
                desc: "Quantum-encrypted biometric security for absolute privacy and peace of mind.",
                icon: <Search className="text-primary-light" size={40} />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass-card rounded-3xl hover:bg-white/5 transition-colors group border border-white/5"
              >
                <div className="mb-6 p-4 bg-primary/10 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl -z-10" />
              <div className="glass-card p-2 rounded-[3.5rem] border border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                  alt="Elite Client" 
                  className="w-full aspect-square object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -bottom-8 -right-8 glass-card px-8 py-6 rounded-3xl border border-primary/50 shadow-2xl">
                  <div className="text-2xl font-black text-white italic">"Uparalleled Vision"</div>
                  <div className="text-[10px] text-primary-light font-black uppercase tracking-widest mt-1">Verified Asset Owner</div>
                </div>
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">What the <span className="text-primary-light">Elite</span> Say</h2>
              <p className="text-2xl text-gray-300 font-light leading-relaxed italic">
                "Relocating to the Neo Tokyo High Orbit was the most significant move of my life. Elite Estate Squad handled the quantum logistics and biometric security with surgical precision. My sky villa literally defies gravity and expectations."
              </p>
              <div className="pt-8 flex items-center gap-6">
                <div className="w-16 h-px bg-primary-light" />
                <div>
                  <div className="text-xl font-bold text-white uppercase tracking-widest">Elena Vance</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Executive at Stellar Dynamics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden group border border-primary/20">
            <div className="absolute inset-0 bg-primary/5 opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Stay in the <span className="text-primary-light">Orbit</span></h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">Join our exclusive mailing list to get first access to premium listings and future launches.</p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your cosmic email..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-light transition-colors text-white"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary-light text-white font-bold px-10 py-4 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  Join Now
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
