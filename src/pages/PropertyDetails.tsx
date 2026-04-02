import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Square, ChevronLeft, Calendar, Video, ArrowRight, Rocket } from 'lucide-react';
import { properties } from '../data/properties';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const propertyId = parseInt(id || '1', 10);
  const property = properties.find(p => p.id === propertyId) || properties[0];

  useEffect(() => {
    document.title = `${property.title} | ${property.location} | Elite Estate Squad`;
  }, [property]);

  return (
    <div className="w-full relative min-h-screen pb-20">
      {/* Background Orbs */}
      <div className="fixed top-20 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] -z-10" />

      {/* Hero 3D Video Section */}
      <section className="relative h-[80vh] w-full overflow-hidden mt-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <video 
            key={property.video}
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={property.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>
        
        <div className="absolute top-8 left-8 z-20">
          <Link to="/listings" className="glass px-6 py-3 rounded-full inline-flex items-center gap-2 text-white hover:bg-primary transition-all text-sm font-bold border border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <ChevronLeft size={18} /> Back to Archive
          </Link>
        </div>

        <div className="absolute bottom-20 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/50 text-primary-light text-[10px] font-black tracking-[0.2em] uppercase mb-6 backdrop-blur-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-light animate-pulse" />
                  Live Walkthrough Experience
                </div>
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-8xl font-black text-white mb-6 italic"
                >
                  {property.title}
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-300 flex items-center gap-3 font-light"
                >
                  <MapPin className="text-primary" size={24} /> {property.location}
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-primary/20 backdrop-blur-2xl px-12 py-8 rounded-[2rem] border border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] text-right"
              >
                <div className="text-4xl md:text-6xl font-black text-white text-glow mb-2">{property.price}</div>
                <div className="text-primary-light text-sm font-bold tracking-widest uppercase">Certified Asset</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column (Details) */}
          <div className="w-full lg:w-2/3">
            {/* Quick Specs */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-[2.5rem] p-10 mb-12 flex flex-wrap gap-12 justify-between items-center border border-white/5 hologram-shine"
            >
              <div className="flex flex-col items-center">
                <BedDouble size={36} className="text-primary-light mb-3" />
                <span className="text-3xl font-black text-white">{property.beds}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Bedrooms</span>
              </div>
              <div className="w-px h-16 bg-white/5 hidden md:block" />
              <div className="flex flex-col items-center">
                <Bath size={36} className="text-primary-light mb-3" />
                <span className="text-3xl font-black text-white">{property.baths}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Sanitation</span>
              </div>
              <div className="w-px h-16 bg-white/5 hidden md:block" />
              <div className="flex flex-col items-center">
                <Square size={36} className="text-primary-light mb-3" />
                <span className="text-3xl font-black text-white">{property.area}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Floor Area</span>
              </div>
            </motion.div>

            {/* Description Card */}
            <div className="glass-card rounded-[2.5rem] p-12 border border-white/5 mb-12">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4 italic">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" /> Conceptual Architecture
              </h3>
              <p className="text-gray-400 leading-relaxed text-xl font-light italic">
                "{property.description}"
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4 italic pl-4">
                Elite Ecosystem Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map(amenity => (
                  <div key={amenity} className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-primary transition-all group overflow-hidden">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                      <Rocket size={20} />
                    </div>
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors uppercase tracking-widest">{amenity}</span>
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
              className="sticky top-28 glass-card rounded-[2.5rem] p-10 border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] neon-border"
            >
              <h3 className="text-2xl font-black text-white mb-8">Secure Access</h3>
              
              <div className="space-y-6 mb-12">
                <button 
                  onClick={() => window.open(property.video, '_blank')}
                  className="w-full bg-white/5 border border-white/10 hover:border-primary-light text-white rounded-2xl py-5 px-8 flex items-center justify-between transition-all group"
                >
                  <span className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm"><Video className="text-primary" /> Full Cinematic Tour</span>
                  <ArrowRight size={18} className="text-primary group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="w-full bg-primary hover:bg-primary-light text-white font-black text-sm uppercase tracking-widest rounded-2xl py-6 px-8 flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover:scale-105">
                  <Calendar size={20} /> Deploy Visit
                </button>
              </div>

              <div className="border-t border-white/10 pt-10">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-6">Liaison Officer</p>
                <div className="flex items-center gap-5 p-4 bg-white/5 rounded-3xl border border-white/5">
                  <img src={property.agent.image} alt={property.agent.name} className="w-20 h-20 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all border border-primary/20" />
                  <div>
                    <div className="text-white font-black text-lg">{property.agent.name}</div>
                    <div className="text-primary-light font-bold text-xs uppercase tracking-widest">{property.agent.role}</div>
                  </div>
                </div>
                <button className="w-full mt-8 bg-transparent border-2 border-primary/40 hover:border-primary text-primary-light hover:text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-xl py-3 transition-all">
                  Initiate Secure Channel
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
