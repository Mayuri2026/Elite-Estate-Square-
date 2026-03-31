import { Rocket, Mail, Globe } from 'lucide-react';

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
            <p className="text-gray-400 text-sm mb-6">
              Defying Gravity in Luxury Living. We bring you the most exclusive floating properties from around the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-light transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition-colors"><Globe size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-primary-light transition-colors">Home</a></li>
              <li><a href="/listings" className="hover:text-primary-light transition-colors">Listings</a></li>
              <li><a href="/about" className="hover:text-primary-light transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary-light transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive dropping alerts.</p>
            <div className="flex mt-2 relative w-full group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-light group-hover:border-primary-light/50 transition-colors"
                aria-label="Email Address"
              />
              <button className="bg-primary/80 hover:bg-primary px-4 py-2 rounded-r-md text-white border border-primary/20 backdrop-blur transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Elite Estate Squad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
