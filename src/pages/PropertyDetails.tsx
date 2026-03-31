import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, ChevronLeft, Calendar, Video, ArrowRight } from 'lucide-react';

const PropertyDetails = () => {
  // Hardcoded for demo purposes
  const property = {
    id: 1, 
    title: 'Skyborne Villa', 
    location: 'Neo Tokyo, High Orbit, Sector 4', 
    price: '$15,000,000', 
    beds: 4, 
    baths: 5, 
    area: '12,000 sq ft',
    description: "Experience the pinnacle of anti-gravity architecture. The Skyborne Villa features self-sustaining energy fields, biometric security integration, and unbroken panoramic views of Neo Tokyo. Its floating structure uses state-of-the-art magnetic levitation technology, providing a completely serene and vibration-free living environment.",
    amenities: ['Anti-Gravity Drive', 'Holographic Deck', 'Bio-filtered Atmosphere', 'Quantum Secure Vault', 'Hyper-elevator Access', 'Solar sails'],
    agent: {
      name: 'Elena Vance',
      role: 'Elite Broker',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687931-cebf0746e48e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80'
    ]
  };

  return (
    <div className="w-full relative min-h-screen pb-20">
      {/* Background Orbs */}
      <div className="fixed top-20 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] -z-10" />

      {/* Hero Gallery Section */}
      <section className="relative h-[70vh] w-full overflow-hidden mt-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20" />
        </motion.div>
        
        <div className="absolute top-8 left-8 z-20">
          <Link to="/listings" className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 text-white hover:bg-white/10 transition-colors text-sm font-medium border border-white/20">
            <ChevronLeft size={16} /> Back to Listings
          </Link>
        </div>

        <div className="absolute bottom-10 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary-light text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                Available Now
              </div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-2xl"
              >
                {property.title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 flex items-center gap-2"
              >
                <MapPin className="text-primary-light" /> {property.location}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-right"
            >
              <div className="text-3xl md:text-5xl font-bold text-white text-glow mb-2">{property.price}</div>
              <div className="text-gray-400 text-sm">Estimated Monthly: $75,000</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column (Details) */}
          <div className="w-full lg:w-2/3">
            {/* Quick Specs */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-6 mb-10 flex flex-wrap gap-8 justify-around items-center border border-white/10"
            >
              <div className="flex flex-col items-center">
                <BedDouble size={28} className="text-primary-light mb-2" />
                <span className="text-xl font-bold text-white">{property.beds}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Bedrooms</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex flex-col items-center">
                <Bath size={28} className="text-primary-light mb-2" />
                <span className="text-xl font-bold text-white">{property.baths}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Bathrooms</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex flex-col items-center">
                <Square size={28} className="text-primary-light mb-2" />
                <span className="text-xl font-bold text-white">{property.area}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Living Space</span>
              </div>
            </motion.div>

            {/* Description */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" /> Architecture & Design
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {property.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent-purple rounded-full" /> Elite Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map(amenity => (
                  <div key={amenity} className="glass p-4 rounded-xl flex items-center gap-3 border border-white/5 hover:border-primary/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary-light" />
                    <span className="text-sm font-medium text-gray-200">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Floating Sidebar) */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="sticky top-28 glass-card rounded-3xl p-8 border border-primary/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] neon-border"
            >
              <h3 className="text-xl font-bold text-white mb-6">Schedule a Viewing</h3>
              
              <div className="space-y-4 mb-8">
                <button className="w-full bg-white/5 border border-white/10 hover:border-primary hover:bg-white/10 text-white rounded-xl py-4 px-6 flex items-center justify-between transition-all group">
                  <span className="flex items-center gap-3"><Video className="text-primary-light" /> Virtual Tour</span>
                  <ArrowRight size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                </button>
                <button className="w-full bg-primary hover:bg-primary-light text-white font-semibold rounded-xl py-4 px-6 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-105">
                  <Calendar size={20} /> Request Private Showing
                </button>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Listing Agent</p>
                <div className="flex items-center gap-4">
                  <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full border-2 border-primary object-cover" />
                  <div>
                    <div className="text-white font-bold">{property.agent.name}</div>
                    <div className="text-sm text-primary-light">{property.agent.role}</div>
                  </div>
                </div>
                <button className="w-full mt-6 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white text-sm font-medium rounded-lg py-2 transition-colors">
                  Contact Agent
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
