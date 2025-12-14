import React from 'react';
import { Award, CheckCircle2, FileCheck2, Shield } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const WhyUs = () => {
  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">Our Credentials</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-neon-green">Absolute Enviromental Services</span>?
              </h3>
              <p className="text-slate-400 mb-8">
                We are not just a demolition crew. We are environmental remediation specialists focused on eliminating biological and chemical risks with full legal documentation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "SafeWork Licensed",
                  "Asbestos Awareness",
                  "EPA Waste Tracking",
                  "Public Liability Insurance",
                  "Seamless Hygienist Handover",
                  "Advanced HEPA Equipment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 size={16} className="text-neon-green" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-900 flex gap-6">
                 {/* Pseudo-badges */}
                 <div className="flex items-center gap-2 text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
                    <Shield size={32} />
                    <span className="text-xs font-mono font-bold">EPA<br/>LICENSED</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
                    <FileCheck2 size={32} />
                    <span className="text-xs font-mono font-bold">WHS<br/>COMPLIANT</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
                    <Award size={32} />
                    <span className="text-xs font-mono font-bold">TOP<br/>RATED</span>
                 </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2 w-full">
            <Reveal delay={0.2} width="100%" className="pt-6 pr-6">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm relative">
                <div className="absolute -top-4 -right-4 bg-neon-cyan text-slate-950 px-4 py-2 font-bold font-mono text-sm rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  100% COMPLIANT
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Compliance Guarantee</h4>
                <p className="text-slate-400 text-sm mb-6">
                  Removing asbestos without a license is a serious offence. We protect your business from massive fines and ensure the site is ready for independent clearance.
                </p>
                <div className="space-y-3">
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-neon-green"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-mono">
                    <span>Safety Standard</span>
                    <span>100%</span>
                  </div>
                  
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-neon-cyan"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-mono">
                    <span>Legal Compliance</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};