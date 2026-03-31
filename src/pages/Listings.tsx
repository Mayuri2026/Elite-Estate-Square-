import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, MapPin, ArrowRight, Grid, BedDouble, Bath, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  { 
    id: 1, 
    title: 'Skyborne Villa', 
    location: 'Neo Tokyo, High Orbit', 
    type: 'Sky Villa', 
    price: '$15,000,000', 
    beds: 4, 
    baths: 5, 
    specs: '12,000 sq ft', 
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', 
    video: 'https://cdn.pixabay.com/video/2021/09/01/87107-595304627_large.mp4',
    description: 'Experience gravity-defying architecture with 360-degree views of the Neo Tokyo nebula.',
    featured: true 
  },
  { 
    id: 2, 
    title: 'Lunar Oasis Estate', 
    location: 'Sea of Tranquility', 
    type: 'Orbital Estate', 
    price: '$8,500,000', 
    beds: 6, 
    baths: 7, 
    specs: '24,000 sq ft', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', 
    video: 'https://cdn.pixabay.com/video/2023/11/04/187747-881026040_large.mp4',
    description: 'A serene sanctuary featuring bio-integrated oxygen systems and lunar-dust filtration.',
    featured: false 
  },
  { 
    id: 3, 
    title: 'Aura Penthouse', 
    location: 'New York, Sector 7', 
    type: 'Penthouse', 
    price: '$22,000,000', 
    beds: 3, 
    baths: 3, 
    specs: '6,500 sq ft', 
    image: 'https://images.unsplash.com/photo-1600607687931-cebf0746e48e?auto=format&fit=crop&q=80', 
    video: 'https://cdn.pixabay.com/video/2021/02/11/64741-512061386_large.mp4',
    description: 'Ultra-luxurious sky-living with smart-glass transparency control and private landing pad.',
    featured: true 
  },
  { 
    id: 4, 
    title: 'Nebula Retreat', 
    location: 'Mars Alpha Colony', 
    type: 'Sky Villa', 
    price: '$5,200,000', 
    beds: 5, 
    baths: 4, 
    specs: '8,000 sq ft', 
    image: 'https://images.unsplash.com/photo-1628108398466-93d43d395ecb?auto=format&fit=crop&q=80', 
    video: 'https://cdn.pixabay.com/video/2021/04/13/71018-537446419_large.mp4',
    description: 'Eco-friendly Mars habitat with integrated geothermal heating and red-planet aesthetics.',
    featured: false 
  },
  { 
    id: 5, 
    title: 'Zenith Apex Tower', 
    location: 'London, Sky District', 
    type: 'Penthouse', 
    price: '$18,500,000', 
    beds: 4, 
    baths: 4, 
    specs: '9,200 sq ft', 
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80', 
    video: 'https://cdn.pixabay.com/video/2024/02/25/201934-916912304_large.mp4',
    description: 'The pinnacle of London sky-living with automated climate adjustment and butler AI.',
    featured: true 
  },
  { 
    id: 6, 
    title: 'Ceres Bio-Dome', 
    location: 'Asteroid Belt', 
    type: 'Orbital Estate', 
    price: '$42,000,000', 
    beds: 8, 
    baths: 10, 
    specs: '100,000 sq ft', 
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80', 
    video: 'https://cdn.pixabay.com/video/2023/11/17/189396-884841797_large.mp4',
    description: 'Massive orbital estate with artificial gravity parks and deep-space observation decks.',
    featured: false 
  },
];

const types = ['All', 'Sky Villa', 'Orbital Estate', 'Penthouse'];

const Listings = () => {
  const [filterType, setFilterType] = useState('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredProperties = filterType === 'All' 
    ? properties 
    : properties.filter(p => p.type === filterType);

  return (
    <div className="w-full relative z-10 pt-16">
      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)] border border-white/10"
            >
              <video 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
              >
                <source src={activeVideo} type="video/mp4" />
              </video>
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-colors text-white"
              >
                <Grid size={24} className="rotate-45" />
              </button>
              <div className="absolute bottom-10 left-10 text-white z-10">
                <h2 className="text-3xl font-bold mb-2">Immersive Walkthrough</h2>
                <p className="text-gray-300">Experiencing the future of living, powered by Elite Estate Square.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Orbs */}
      <div className="fixed top-20 left-10 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[150px] animate-float-slow -z-10" />
      <div className="fixed bottom-20 right-10 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] animate-float -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center md:text-left mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 italic"
          >
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent-purple">Elite Spaces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-lg font-light"
          >
            Discover our curated collection of gravity-defying properties across the most exclusive sectors. Experience the 3D walkthrough of your future home.
          </motion.p>
        </div>

        {/* Filters Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-[2rem] p-6 mb-12 flex flex-col md:flex-row gap-6 relative z-20 border border-white/5"
        >
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold pl-1">Search</label>
            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary-light/50 transition-colors">
              <MapPin className="text-gray-400" size={18} />
              <input type="text" placeholder="Location or keywords..." className="bg-transparent w-full text-white focus:outline-none placeholder:text-gray-700 text-sm" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold pl-1">Property Type</label>
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
          
          <div className="flex items-end">
            <button className="w-full md:w-auto bg-primary text-white text-sm font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Filter size={18} />
              Apply Filters
            </button>
          </div>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="glass-card rounded-[2.5rem] overflow-hidden group relative transition-all duration-500 border border-white/5 hologram-shine"
              >
                <div className="relative h-72 overflow-hidden rounded-t-[2.5rem] bg-card p-1">
                  <div className="relative h-full w-full rounded-[2.1rem] overflow-hidden">
                    {/* Static Image */}
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:opacity-0" 
                    />
                    
                    {/* Immersive Video Teaser on Hover */}
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
                    
                    <button 
                      onClick={() => setActiveVideo(prop.video)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 flex items-center gap-2"
                    >
                      <Rocket size={18} /> Watch Experience
                    </button>

                    {prop.featured && (
                      <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary-light flex items-center gap-2 backdrop-blur-xl border border-primary/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                        Elite Priority
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">{prop.title}</h3>
                      <p className="flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin size={16} className="text-primary" /> {prop.location}
                      </p>
                    </div>
                    <div className="text-2xl font-black text-white text-glow">
                      {prop.price}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{prop.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="bg-white/5 py-3 px-2 rounded-2xl border border-white/5 text-center">
                      <div className="text-primary-light flex justify-center mb-1"><BedDouble size={16}/></div>
                      <div className="text-xs text-white font-bold">{prop.beds} Beds</div>
                    </div>
                    <div className="bg-white/5 py-3 px-2 rounded-2xl border border-white/5 text-center">
                      <div className="text-primary-light flex justify-center mb-1"><Bath size={16}/></div>
                      <div className="text-xs text-white font-bold">{prop.baths} Baths</div>
                    </div>
                    <div className="bg-white/5 py-3 px-2 rounded-2xl border border-white/5 text-center">
                      <div className="text-primary-light flex justify-center mb-1"><Grid size={16}/></div>
                      <div className="text-xs text-white font-bold">{prop.specs.split(' ')[0]}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-white/10">
                    <Link 
                      to={`/property/${prop.id}`}
                      className="text-white hover:text-primary-light font-bold text-sm transition-colors flex items-center gap-2 group/link"
                    >
                      Specifications <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/20" />
                      <span className="w-2 h-2 rounded-full bg-primary/40" />
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Listings;
