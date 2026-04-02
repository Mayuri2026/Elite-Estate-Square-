import { motion, useScroll, useSpring } from 'framer-motion';

const tickerData = [
  "NEO TOKYO HIGH ORBIT: APY +12.4% ▲",
  "MARS ALPHA BASE: ALL SECTORS OCCUPIED",
  "LUNAR TRANQUILITY: 2 NEW LISTINGS DEPLOYED",
  "ASTEROID BELT OUTER: SECURE CHANNEL ACTIVE",
  "ORBITAL RING: MAINTENANCE DRONE FLEET ONLINE",
  "DEPOSIT SECURITY: QUANTUM ENCRYPTION 100%",
  "ELITE LIAISON TEAM: 24/7 AVAILABILITY",
  "DELTA-V STATUS: STABLE FOR TRANSIT"
];

const Ticker = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-primary/10 backdrop-blur-xl border-b border-white/5 z-[100] flex items-center overflow-hidden">
      {/* Scroll Progress Bar Overlay */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-primary-light z-20 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        style={{ 
          scaleX, 
          transformOrigin: "left",
          width: "100%" 
        }}
      />
      
      <div className="absolute left-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...tickerData, ...tickerData].map((text, idx) => (
          <span key={idx} className="text-[10px] font-black text-primary-light uppercase tracking-[0.4em] flex items-center gap-4 italic">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50" />
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
