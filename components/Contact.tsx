import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Twitter, Facebook, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-24 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Form */}
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Company</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all" placeholder="Your company" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase">Corporate Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all" placeholder="you@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase">Project Details</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all" placeholder="Describe the area and the issue..."></textarea>
              </div>

              <button className="w-full bg-neon-green text-slate-950 font-bold py-4 rounded hover:bg-white hover:shadow-neon-green transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Request <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-neon-cyan mb-6">
                <ShieldCheck size={32} />
                <span className="text-xl font-bold tracking-tight text-white">Absolute Enviromental Services</span>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Leaders in high-complexity environmental remediation. We protect lives and assets through science and advanced technology.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-neon-green">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Phone</h4>
                    <p className="text-slate-400">1300 237 287</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-neon-green">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email</h4>
                    <p className="text-slate-400">contact@aes.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-neon-green">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Head Office</h4>
                    <p className="text-slate-400">U 52 49-51 MITCHELL ROAD, Brookdale New South Wales 2100</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 Absolute Enviromental Services. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};