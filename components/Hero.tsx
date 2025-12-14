import React from 'react';
import { ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          {/* Abstract Blue Tech/Particles Video */}
          <source 
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark overlay to ensure text contrast and blend with theme */}
        <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
      </div>

      {/* 2. Cyber Effects (Glows & Grid) - Kept on top of video for style */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[128px] animate-pulse-slow"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 3. Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-mono mb-8 animate-float">
          <ShieldCheck size={14} />
          <span>AUSTRALIAN STANDARDS COMPLIANT</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Asbestos Removal with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">
            Surgical Precision
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Protecting your health and property. We utilize advanced containment technology to safely remove and dispose of hazardous materials.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-neon"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-cyan to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2 group-hover:text-slate-900 transition-colors text-lg">
              Get a Free Quote <ArrowRight size={20} />
            </span>
          </a>
          
          <a 
            href="#problem"
            className="flex items-center gap-2 px-8 py-4 text-slate-300 border border-slate-700 rounded-lg hover:border-neon-danger hover:text-neon-danger transition-all duration-300 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]"
          >
            <AlertTriangle size={18} />
            <span>Understand the Risks</span>
          </a>
        </div>

        {/* Stats overlay */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8 opacity-70">
          <div>
            <div className="text-3xl font-mono font-bold text-white">15+</div>
            <div className="text-sm text-slate-500">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-bold text-white">5k+</div>
            <div className="text-sm text-slate-500">Safe Projects</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-bold text-white">100%</div>
            <div className="text-sm text-slate-500">EPA Compliant</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-bold text-white">24/7</div>
            <div className="text-sm text-slate-500">Emergency Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};