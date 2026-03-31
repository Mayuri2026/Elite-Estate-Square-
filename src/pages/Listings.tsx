import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, MapPin, ArrowRight, Grid, DollarSign, BedDouble, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  { id: 1, title: 'Skyborne Villa', location: 'Neo Tokyo, High Orbit', type: 'Sky Villa', price: '$15,000,000', beds: 4, baths: 5, specs: '12,000 sq ft', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', featured: true },
  { id: 2, title: 'Lunar Oasis Estate', location: 'Sea of Tranquility', type: 'Orbital Estate', price: '$8,500,000', beds: 6, baths: 7, specs: '24,000 sq ft', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', featured: false },
  { id: 3, title: 'Aura Penthouse', location: 'New York, Sector 7', type: 'Penthouse', price: '$22,000,000', beds: 3, baths: 3, specs: '6,500 sq ft', image: 'https://images.unsplash.com/photo-1600607687931-cebf0746e48e?auto=format&fit=crop&q=80', featured: true },
  { id: 4, title: 'Nebula Retreat', location: 'Mars Alpha Colony', type: 'Sky Villa', price: '$5,200,000', beds: 5, baths: 4, specs: '8,000 sq ft', image: 'https://images.unsplash.com/photo-1628108398466-93d43d395ecb?auto=format&fit=crop&q=80', featured: false },
  { id: 5, title: 'Zenith Apex Tower', location: 'London, Sky District', type: 'Penthouse', price: '$18,500,000', beds: 4, baths: 4, specs: '9,200 sq ft', image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80', featured: true },
  { id: 6, title: 'Ceres Bio-Dome', location: 'Asteroid Belt', type: 'Orbital Estate', price: '$42,000,000', beds: 8, baths: 10, specs: '100,000 sq ft', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80', featured: false },
];

const types = ['All', 'Sky Villa', 'Orbital Estate', 'Penthouse'];

const Listings = () => {
  const [filterType, setFilterType] = useState('All');

  const filteredProperties = filterType === 'All' 
    ? properties 
    : properties.filter(p => p.type === filterType);

  return (
    <div className="w-full relative z-10 pt-16">
      {/* Background Orbs */}
      <div className="fixed top-20 left-10 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[150px] animate-float-slow -z-10" />
      <div className="fixed bottom-20 right-10 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] animate-float -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center md:text-left mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent-purple">Elite Spaces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            Discover our curated collection of gravity-defying properties across the most exclusive sectors.
          </motion.p>
        </div>

        {/* Filters Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 relative z-20"
        >
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm text-gray-400 uppercase tracking-wide font-medium">Search</label>
            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary-light/50 transition-colors">
              <MapPin className="text-gray-400" size={18} />
              <input type="text" placeholder="Location or keywords..." className="bg-transparent w-full text-white focus:outline-none placeholder:text-gray-600 text-sm" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm text-gray-400 uppercase tracking-wide font-medium">Property Type</label>
            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary-light/50 transition-colors">
              <Grid className="text-gray-400" size={18} />
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-transparent w-full text-white focus:outline-none appearance-none cursor-pointer text-sm outline-none"
              >
                {types.map(type => (
                  <option key={type} value={type} className="bg-card text-white py-2">{type}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm text-gray-400 uppercase tracking-wide font-medium">Price Range</label>
            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary-light/50 transition-colors">
              <DollarSign className="text-gray-400" size={18} />
              <select className="bg-transparent w-full text-white focus:outline-none appearance-none cursor-pointer text-sm">
                <option value="any" className="bg-card">Any Price</option>
                <option value="under-10m" className="bg-card">Under $10M</option>
                <option value="10m-20m" className="bg-card">$10M - $20M</option>
                <option value="over-20m" className="bg-card">Over $20M</option>
              </select>
            </div>
          </div>

          <div className="flex items-end">
            <button className="w-full md:w-auto bg-primary/20 hover:bg-primary/40 text-primary-light border border-primary/50 text-sm font-semibold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
              <Filter size={18} />
              Apply
            </button>
          </div>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map((prop) => (
              <motion.div 
                key={prop.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -15 }}
                className="glass-card rounded-2xl overflow-hidden group relative transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] neon-border p-1"
              >
                <Link to={`/property/${prop.id}`} className="block">
                  <div className="relative h-64 overflow-hidden rounded-xl bg-card">
                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                    
                    {prop.featured && (
                      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-accent-gold flex items-center gap-1 backdrop-blur-xl border border-accent-gold/30 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                        Premium
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">{prop.title}</h3>
                    <p className="flex items-center gap-1 text-sm text-gray-400 mb-4">
                      <MapPin size={14} /> {prop.location}
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-300 mb-6 bg-white/5 py-2 px-4 rounded-lg border border-white/5">
                      <div className="flex items-center gap-1"><BedDouble size={14} className="text-primary-light"/> {prop.beds} Beds</div>
                      <div className="flex items-center gap-1"><Bath size={14} className="text-primary-light"/> {prop.baths} Baths</div>
                      <div className="flex items-center gap-1">{prop.specs}</div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <div className="text-xl font-bold text-white text-glow">
                        {prop.price}
                      </div>
                      <span className="text-sm font-semibold text-primary-light flex items-center bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 group-hover:bg-primary/30 transition-colors">
                        View Details <ArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Listings;
