
import React from 'react';

interface HowIThinkProps {
  id: string;
}

const HowIThink: React.FC<HowIThinkProps> = ({ id }) => {
  const philosophies = [
    {
      title: "Clarity Over Chaos",
      text: "In the final hours of a major submission, I am the calm center. I turn frantic requests into structured action items.",
      icon: "center_focus_strong"
    },
    {
      title: "Sustainable Accuracy",
      text: "A won bid is a failure if it can't be delivered. I ensure our promises align with our operational capacity.",
      icon: "verified_user"
    },
    {
      title: "Continuous Optimization",
      text: "If a task is repetitive, it's a candidate for refinement. I constantly seek ways to enable the team through automation.",
      icon: "trending_up"
    }
  ];

  return (
    <section id={id} className="relative py-32 px-8 sm:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Mindset</span>
          <h2 className="text-white text-5xl font-extralight tracking-tight leading-tight">The <br/><span className="font-semibold">Philosophy</span></h2>
          <p className="text-neutral-text font-light leading-relaxed">
            Success in client operations is built on three foundational pillars of thinking.
          </p>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-1 gap-8">
          {philosophies.map((p, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex-shrink-0 size-14 rounded-full border border-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:border-primary/40 transition-all duration-500">
                <span className="material-symbols-outlined text-3xl">{p.icon}</span>
              </div>
              <div className="space-y-2 pt-2">
                <h3 className="text-white text-xl font-medium tracking-tight group-hover:translate-x-1 transition-transform">{p.title}</h3>
                <p className="text-neutral-text font-light leading-relaxed text-sm max-w-lg">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
