import React, { useEffect, useState } from 'react';
import { Skull, Wind, ShieldAlert, Activity } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const ProblemSection = () => {

  // 🔁 TEXTOS DINÂMICOS COM TÍTULO E COR
  const messages = [
    {
      title: "CRITICAL RISK",
      color: "bg-neon-danger text-slate-950",
      text: "Australian homes built before 1990 have a high probability of containing asbestos in fibro sheeting, eaves, roofing, and wet areas."
    },
    {
      title: "HIGH ALERT",
      color: "bg-yellow-400 text-slate-900",
      text: "Even minor renovations can release dangerous asbestos fibres into the air if materials are not properly tested and managed."
    },
    {
      title: "DANGER",
      color: "bg-orange-500 text-slate-900",
      text: "Licensed asbestos professionals are essential to safely identify, manage, and remove asbestos-containing materials."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // troca cada 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="problem" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-neon-danger/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-start gap-12">
            
            {/* LEFT SIDE — ORIGINAL */}
            <div className="md:w-1/2">
              <h2 className="text-neon-danger font-mono text-sm mb-2 tracking-widest uppercase">The Invisible Danger</h2>
              <h3 className="text-4xl font-bold text-white mb-6">Why is Asbestos a Ticking Time Bomb?</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Asbestos fibers are microscopic—700 times thinner than a human hair. When inhaled, they lodge permanently in the lungs, leading to severe diseases like Mesothelioma and Asbestosis, often decades later.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-neon-danger/50 transition-colors">
                  <div className="p-2 bg-neon-danger/10 rounded text-neon-danger">
                    <Wind size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Airborne Contamination</h4>
                    <p className="text-sm text-slate-400">Invisible dust remains airborne for days after "fibro" is disturbed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-neon-danger/50 transition-colors">
                  <div className="p-2 bg-neon-danger/10 rounded text-neon-danger">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Health Risks</h4>
                    <p className="text-sm text-slate-400">The leading cause of occupational cancer in Australia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — APENAS TEXTOS DINÂMICOS ADICIONADOS */}
            <div className="md:w-1/2 relative h-full min-h-[400px] w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 group">

              {/* 👇 VÍDEO ORIGINAL */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/*
                  Use a cover technique: position iframe centered and scale width >100%
                  so the video preserves aspect ratio and fills container on mobile.
                */}
                <iframe
                  src="https://player.vimeo.com/video/1146343746?autoplay=1&loop=1&muted=1&playsinline=1&background=1"
                  className="absolute top-0 left-1/2 h-full"
                  style={{ width: '177.78%', transform: 'translateX(-50%)' }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Landing video"
                />
              </div>

              {/* 👇 VINHETA ORIGINAL (mantida exatamente como estava) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

              {/* 👇 TEXTOS DINÂMICOS */}
              <div className="absolute bottom-8 left-8 right-8">

                {/* Título dinâmico + cor dinâmica */}
                <div className={`${messages[index].color} text-xs font-bold px-2 py-1 inline-block rounded mb-2`}>
                  {messages[index].title}
                </div>

                {/* Texto dinâmico */}
                <p className="text-white font-mono text-sm">
                  {messages[index].text}
                </p>

              </div>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};
