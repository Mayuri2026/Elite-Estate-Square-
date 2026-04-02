import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import AIAssistant from './components/AIAssistant';
import Ticker from './components/Ticker';

function App() {
  const location = useLocation();

  return (
    <div className="pt-8">
      <Ticker />
      <CustomCursor />
      <ScrollToTop />
      <AIAssistant />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="listings" element={<Listings />} />
              <Route path="property/:id" element={<PropertyDetails />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
