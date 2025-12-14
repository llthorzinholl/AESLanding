import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">Have Questions?</h2>
          <h3 className="text-3xl font-bold text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={index} width="100%">
              <div 
                className={`rounded-lg border transition-all duration-300 ${openIndex === index ? 'bg-slate-900 border-neon-cyan/30' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold ${openIndex === index ? 'text-neon-cyan' : 'text-slate-200'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus size={20} className="text-neon-cyan" />
                  ) : (
                    <Plus size={20} className="text-slate-500" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};