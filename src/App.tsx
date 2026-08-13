/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { Earnings } from './components/Earnings';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full min-h-screen bg-white selection:bg-igreen-200 selection:text-igreen-950 font-sans overflow-x-hidden flex flex-col">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-igreen-primary to-igreen-neon z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Institutional Website Header & Navigation */}
      <Navbar />

      {/* Main Website Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <ValueProposition />
        <Benefits />
        <About />
        <HowItWorks />
        <Earnings />
        <Testimonials />
        <FAQ />
        <FooterCTA />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Direct Contact Action */}
      <FloatingWhatsApp />
    </div>
  );
}
