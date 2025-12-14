import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Reveal } from './ui/Reveal';

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-neon-green font-mono text-sm mb-2 tracking-widest uppercase">Methodology</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Certified Workflow</h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 text-white flex items-center justify-center font-mono font-bold text-lg mb-6 relative group hover:border-neon-green hover:bg-neon-green/10 transition-colors">
                    <span className="group-hover:text-neon-green transition-colors">{step.id}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-400 max-w-[200px]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};