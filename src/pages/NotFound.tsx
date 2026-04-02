import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Transmission Lost | Elite Estate Squad";
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse" />
      
      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={{ rotate: [0, 5, -5, 0], y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="text-primary-light mb-12"
      >
        <Rocket size={120} />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-7xl md:text-9xl font-black text-white mb-6 italic tracking-tighter"
      >
        404
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold text-gray-300 mb-8 uppercase tracking-widest"
      >
        Transmission <span className="text-primary-light">Lost in Orbit</span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 max-w-md mb-12 font-light italic"
      >
        The coordinates you provided do not exist in our current sector. You may have entered a black hole or a localized data anomaly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link 
          to="/" 
          className="bg-primary hover:bg-primary-light text-white font-black py-4 px-10 rounded-2xl flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)] group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          Retrace to Home Base
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
