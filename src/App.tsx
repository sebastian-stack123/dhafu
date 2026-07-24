/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewCollection from './components/NewCollection';
import WhyDhafu from './components/WhyDhafu';
import Promotions from './components/Promotions';
import Lookbook from './components/Lookbook';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

export default function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <NewCollection />
      <WhyDhafu />
      <Promotions />
      <Lookbook />
      <AboutUs />
      <Contact />
      <Footer />
      <FloatingControls />
    </div>
  );
}
