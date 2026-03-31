import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4 shadow-lg shadow-primary/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-primary-light"
            >
              <Rocket size={32} />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider text-white group-hover:text-glow transition-all">
                ELITE ESTATE <span className="text-primary-light">SQUAD</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors hover:text-white ${
                  location.pathname === link.path ? 'text-primary-light' : 'text-gray-300'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-light origin-left opacity-100 shadow-[0_0_10px_rgba(96,165,250,1)]"
                  />
                )}
              </Link>
            ))}
            <motion.button
              whileHover={{ y: -3, boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
              className="bg-primary/20 hover:bg-primary/30 text-white px-6 py-2 rounded-full border border-primary/50 backdrop-blur-md transition-all font-medium ml-4"
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full text-left px-3 py-3 rounded-md text-base font-medium text-primary-light hover:bg-white/5 uppercase tracking-wide">
              Sign In
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
