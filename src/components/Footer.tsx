import { Link } from 'react-router-dom';
import { Rocket, Mail, Globe, Cpu, Shield, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="text-primary-light" size={24} />
              <span className="font-bold text-lg tracking-wider text-white">
                ELITE ESTATE <span className="text-primary-light">SQUAD</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Defying Gravity in Luxury Living. We bring you the most exclusive floating properties from around the globe and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:scale-110"><Zap size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:scale-110"><Cpu size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:scale-110"><Shield size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition-all hover:scale-110"><Globe size={18} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary-light transition-colors">Home</Link></li>
              <li><Link to="/listings" className="hover:text-primary-light transition-colors">Listings</Link></li>
              <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Elite Sectors</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-light transition-colors">Neo Tokyo High Orbit</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Sea of Tranquility</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Mars Alpha Colony</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Asteroid Belt Prime</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive priority launch alerts.</p>
            <div className="flex mt-2 relative w-full group">
              <input 
                type="email" 
                placeholder="Secure email address" 
                className="w-full bg-white/5 border border-white/10 rounded-l-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-light group-hover:border-primary-light/50 transition-colors"
                aria-label="Email Address"
              />
              <button className="bg-primary/80 hover:bg-primary px-6 py-3 rounded-r-2xl text-white border border-primary/20 backdrop-blur transition-all active:scale-95 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
          <p>&copy; {new Date().getFullYear()} Elite Estate Squad. Defying Gravity Since 2026.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
