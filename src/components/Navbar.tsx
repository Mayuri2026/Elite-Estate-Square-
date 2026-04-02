import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, Shield, Lock, Cpu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Listings', path: '/listings' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-8 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass py-4 shadow-lg shadow-primary/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                className="text-primary-light"
              >
                <Rocket size={32} />
              </motion.div>
              <span className="font-bold text-xl tracking-wider text-white group-hover:text-glow transition-all uppercase">
                Elite Estate <span className="text-primary-light">Squad</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-xs font-black uppercase tracking-widest transition-colors hover:text-white ${
                    location.pathname === link.path ? 'text-primary-light' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-light shadow-[0_0_10px_rgba(96,165,250,1)]"
                    />
                  )}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
                onClick={() => setShowLogin(true)}
                className="bg-primary/20 hover:bg-primary text-white text-[10px] uppercase font-black tracking-widest px-6 py-2.5 rounded-xl border border-primary/50 backdrop-blur-md transition-all ml-4"
              >
                Secure Access
              </motion.button>
            </div>

            {/* Mobile Button omitted for brevity in replace, but keeping structure */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass overflow-hidden"
            >
              <div className="px-6 py-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-black text-gray-400 hover:text-white uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                ))}
                <button 
                  onClick={() => { setIsOpen(false); setShowLogin(true); }}
                  className="w-full text-left text-sm font-black text-primary-light uppercase tracking-widest"
                >
                  Secure Access
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={() => setShowLogin(false)} />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass-card p-10 rounded-[2.5rem] border border-primary/30 shadow-[0_0_100px_rgba(59,130,246,0.1)]"
            >
              <button onClick={() => setShowLogin(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
              
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-light mb-6 shadow-inner">
                  <Shield size={32} />
                </div>
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Identity Verification</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Accessing Elite Terminal 01</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-1">Quantum ID</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-primary-light transition-colors" size={16} />
                    <input type="email" placeholder="Verification Email" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary-light transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-1">Access Key</label>
                  <div className="relative group">
                    <Cpu className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-primary-light transition-colors" size={16} />
                    <input type="password" placeholder="Passkey" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary-light transition-all" />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs shadow-[0_10px_20px_rgba(0,0,0,0.3)] mt-4"
                >
                  Bypass Encryption
                </motion.button>

                <div className="text-center pt-2">
                  <a href="#" className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Request New Credentials</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
