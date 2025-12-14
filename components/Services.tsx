import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">Our Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Specialized Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1} className="h-full">
              <div className="h-full p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-neon-cyan/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-6 text-neon-cyan group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};