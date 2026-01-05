
import React from 'react';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="relative py-32 px-8 sm:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80" alt="Abstract workflow and coordination" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-surface-dark border border-white/10 shadow-xl z-10 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-primary rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Ops Enabler</span>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 size-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">The Background</span>
              <h2 className="text-white text-4xl sm:text-5xl font-extralight tracking-tight leading-tight">
                An Operations Mindset <br />
                <span className="font-semibold">Driven by Precision.</span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-text text-lg font-light leading-relaxed">
              <p>
                I work across the full operational lifecycle—supporting client implementation, proposals, contracts, and ongoing project execution—giving me a well-rounded understanding of how work moves from intake to delivery.
              </p>
              <p>
                I've led and supported proposal efforts by organizing technical and commercial inputs, aligning Price Worksheets with customer goals and internal margin requirements, and coordinating cross-functional teams to ensure pricing is <span className="text-white font-normal">accurate, defensible, and executable</span>. This includes managing timelines, refining narratives, and ensuring every submission is on-brand and ready for presentation as proposals advance.
              </p>
              <p>
                Alongside proposal work, I've supported client-facing operations and internal systems—maintaining clean data, validating pricing calculations, improving workflows, and building tools that reduce manual effort and risk. Whether I'm managing details, coordinating stakeholders, or automating repetitive tasks, my focus is always the same: <span className="text-white font-normal">clarity, consistency, and follow-through</span> that teams and clients can rely on.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <span className="material-symbols-outlined text-primary">diversity_3</span>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Collaborative</h4>
                <p className="text-xs text-neutral-text leading-relaxed">Expert at aligning diverse teams under a single strategic objective.</p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-primary">analytics</span>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Data-Aligned</h4>
                <p className="text-xs text-neutral-text leading-relaxed">Leveraging metrics to support pricing decisions and operational capacity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
