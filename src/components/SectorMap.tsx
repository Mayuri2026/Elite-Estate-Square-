import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sectors = [
  { id: 'Neo Tokyo', name: 'Neo Tokyo Upper', x: '15%', y: '25%', color: '#60A5FA' },
  { id: 'Mars', name: 'Mars Colonies', x: '55%', y: '15%', color: '#F87171' },
  { id: 'Sea of Tranquility', name: 'Lunar Tranquility', x: '40%', y: '50%', color: '#E5E7EB' },
  { id: 'Asteroid Belt', name: 'Belt Outer Rim', x: '82%', y: '70%', color: '#A78BFA' },
  { id: 'London', name: 'London Sky District', x: '10%', y: '72%', color: '#34D399' },
  { id: 'Dubai', name: 'Dubai Sky Marina', x: '68%', y: '40%', color: '#FBBF24' },
  { id: 'Pacific', name: 'Deep Blue Sector', x: '30%', y: '80%', color: '#06B6D4' },
  { id: 'Reykjavik', name: 'Arctic Sky Ring', x: '88%', y: '22%', color: '#C084FC' },
];

const SectorMap = () => {
  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] glass-card rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Pulsing Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Title */}
      <div className="absolute top-8 left-8 z-10">
        <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Sector Navigation</h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Status: Active Link established</p>
      </div>

      {/* Connection Lines (Pseudo) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <path d="M 20 30 L 70 20 L 85 75 L 45 60 L 20 30" fill="none" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1" strokeDasharray="5,5" />
        <path d="M 15 80 L 45 60" fill="none" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1" strokeDasharray="5,5" />
      </svg>

      {/* Sectors */}
      {sectors.map((sector) => (
        <Link 
          key={sector.id} 
          to={`/listings?search=${sector.id}`}
          className="absolute group/node"
          style={{ left: sector.x, top: sector.y }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Pulsing Rings */}
            <div 
              className="absolute w-12 h-12 rounded-full opacity-0 group-hover/node:opacity-30 animate-ping"
              style={{ backgroundColor: sector.color }}
            />
            <div 
              className="absolute w-8 h-8 rounded-full opacity-0 group-hover/node:opacity-50 animate-pulse"
              style={{ backgroundColor: sector.color }}
            />
            
            {/* Node */}
            <div 
              className="w-3 h-3 rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20"
              style={{ backgroundColor: sector.color }}
            />
            
            {/* Label */}
            <div className="absolute left-6 whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-all duration-300 translate-x-2 group-hover/node:translate-x-0 pointer-events-none">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 ring-1 ring-white/20">
                {sector.name}
              </span>
            </div>
          </motion.div>
        </Link>
      ))}

      {/* Scanner Effect */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-light/40 to-transparent shadow-[0_0_20px_rgba(96,165,250,0.5)] pointer-events-none opacity-50"
      />
    </div>
  );
};

export default SectorMap;
