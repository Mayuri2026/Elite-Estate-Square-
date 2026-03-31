import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MapPin, Grid, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "Skyborne Villa",
    location: "Neo Tokyo, High Orbit",
    price: "$15,000,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Lunar Oasis Estate",
    location: "Sea of Tranquility",
    price: "$8,500,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Aura Penthouse",
    location: "New York, Sector 7",
    price: "$22,000,000",
    image: "https://images.unsplash.com/photo-1600607687931-cebf0746e48e?auto=format&fit=crop&q=80",
  }
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
                <input type="text" placeholder="Location, City, or Planet..." className="bg-transparent w-full text-white focus:outline-none placeholder:text-gray-500" />
              </div>
            </div>
            
            <div className="flex-1 relative z-10 w-full flex gap-4">
              <div className="flex-1 flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary-light/50 transition-colors">
                <Grid className="text-gray-400" size={20} />
                <select className="bg-transparent w-full text-gray-300 focus:outline-none appearance-none cursor-pointer">
                  <option value="" className="bg-card">Property Type</option>
                  <option value="sky-villa" className="bg-card">Sky Villa</option>
                  <option value="orbital" className="bg-card">Orbital Estate</option>
                  <option value="penthouse" className="bg-card">Gravity Penthouse</option>
                </select>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.6)" }}
              whileTap={{ scale: 0.95 }}
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

      {/* Featured Properties Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Listings</span>
              </h2>
              <p className="text-gray-400 max-w-xl">Curated floating spaces that elevate luxury to the stars. Experience breathtaking views and anti-gravity architecture.</p>
            </div>
            <Link to="/listings" className="hidden md:flex items-center gap-2 text-primary-light hover:text-white transition-colors group">
              View All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {properties.map((prop, idx) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer block relative transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] neon-border p-1"
              >
                <Link to={`/property/${prop.id}`}>
                  <div className="relative h-64 overflow-hidden rounded-xl bg-card">
                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                    
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold text-primary-light flex items-center gap-1 backdrop-blur-xl border border-primary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                      Available
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">{prop.title}</h3>
                        <p className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin size={14} /> {prop.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                      <div className="text-xl font-bold text-white">
                        {prop.price}
                      </div>
                      <span className="text-sm text-primary-light flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        View Details <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/listings" className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors">
              View All Listings <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
