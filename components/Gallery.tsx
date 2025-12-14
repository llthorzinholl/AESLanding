import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Gallery = () => {
  // Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Gallery Carousel State
  const [activeProject, setActiveProject] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Determine items per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // -- Testimonial Handlers --
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // -- Gallery Handlers --
  const itemsPerPage = isDesktop ? 2 : 1;
  const maxProjectIndex = GALLERY_ITEMS.length - itemsPerPage;

  const nextProject = () => {
    setActiveProject((prev) => (prev >= maxProjectIndex ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev <= 0 ? maxProjectIndex : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        
        {/* Gallery Carousel */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">Real Results</h2>
              <h3 className="text-3xl font-bold text-white">Before & After</h3>
            </div>
            
            {/* Gallery Controls */}
            <div className="flex gap-2">
              <button 
                onClick={prevProject}
                className="p-3 rounded-full border border-slate-700 text-slate-300 hover:border-neon-cyan hover:text-neon-cyan hover:bg-slate-900 transition-all"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextProject}
                className="p-3 rounded-full border border-slate-700 text-slate-300 hover:border-neon-cyan hover:text-neon-cyan hover:bg-slate-900 transition-all"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <Reveal width="100%">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${activeProject * (100 / itemsPerPage)}%)` 
                }}
              >
                {GALLERY_ITEMS.map((item) => (
                  <div 
                    key={item.id} 
                    className="min-w-full md:min-w-[50%] px-2" // px-2 adds gap between slides
                  >
                    <div className="relative group overflow-hidden rounded-xl border border-slate-800 bg-slate-950 h-full">
                      <div className="grid grid-cols-2 h-64 sm:h-80">
                        <div className="relative h-full overflow-hidden border-r border-slate-800">
                            <img src={item.beforeUrl} alt="Before" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity" />
                            <span className="absolute top-2 left-2 bg-slate-900/80 text-neon-danger text-[10px] font-bold px-2 py-1 rounded border border-neon-danger/30">BEFORE</span>
                        </div>
                        <div className="relative h-full overflow-hidden">
                            <img src={item.afterUrl} alt="After" className="w-full h-full object-cover" />
                            <span className="absolute top-2 right-2 bg-slate-900/80 text-neon-green text-[10px] font-bold px-2 py-1 rounded border border-neon-green/30">AFTER</span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-900">
                        <h4 className="text-white font-bold">{item.label}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gallery Indicators */}
            <div className="flex justify-center mt-6 gap-2">
               {Array.from({ length: maxProjectIndex + 1 }).map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setActiveProject(idx)}
                   className={`h-1.5 rounded-full transition-all duration-300 ${activeProject === idx ? 'w-8 bg-neon-cyan' : 'w-2 bg-slate-700 hover:bg-slate-600'}`}
                 />
               ))}
            </div>
          </Reveal>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto border-t border-slate-800 pt-24">
           <div className="text-center mb-12">
            <h2 className="text-neon-green font-mono text-sm mb-2 tracking-widest uppercase">Testimonials</h2>
            <h3 className="text-2xl font-bold text-white">What Our Clients Say</h3>
           </div>

           <Reveal>
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Star size={120} fill="white" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-slate-200 italic mb-8 min-h-[100px]">
                  "{TESTIMONIALS[activeTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">{TESTIMONIALS[activeTestimonial].name}</h4>
                    <p className="text-neon-cyan text-sm">{TESTIMONIALS[activeTestimonial].role}</p>
                    {TESTIMONIALS[activeTestimonial].company && (
                      <p className="text-slate-500 text-xs mt-1">{TESTIMONIALS[activeTestimonial].company}</p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={prevTestimonial}
                      className="p-3 rounded-full bg-slate-800 text-white hover:bg-neon-cyan hover:text-slate-950 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-3 rounded-full bg-slate-800 text-white hover:bg-neon-cyan hover:text-slate-950 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};