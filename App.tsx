import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-neon-cyan selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <Process />
        <WhyUs />
        <Gallery />
        <FAQ />
      </main>
      <Contact />
    </div>
  );
}

export default App;