
import React, { useState, useEffect } from 'react';

interface CoverLetterProps {
  onBack: () => void;
}

const CoverLetter: React.FC<CoverLetterProps> = ({ onBack }) => {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
  const [typedText, setTypedText] = useState('');
  const [showContent, setShowContent] = useState(false);

  const greeting = "Dear Hiring Team,";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < greeting.length) {
        setTypedText(greeting.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  const highlights = {
    'flexgen-tool': {
      title: 'EMS Proposal Automation',
      description: 'Built a tool that transforms Price Worksheet inputs into client-ready proposals automatically.',
      metric: '90% faster turnaround'
    },
    'portal': {
      title: 'Customer Pricing Portal',
      description: 'Designed a secure web portal where clients generate their own pricing and proposals.',
      metric: 'Self-service pricing'
    },
    'ai-tool': {
      title: 'AI Data Transformation',
      description: 'Built an AI-assisted tool that normalizes payroll data from any provider format.',
      metric: '30% faster onboarding'
    },
    'tracking': {
      title: 'Compliance Tracking System',
      description: 'Implemented tracking systems for high-profile accounts like Charles Schwab and Cigna.',
      metric: 'Zero missed deadlines'
    }
  };

  return (
    <div className="relative z-10 min-h-screen py-12 px-4 md:py-24 md:px-24">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-slide-up">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Interactive Cover Letter</span>
            <h1 className="text-white text-4xl md:text-5xl font-extralight tracking-tight">
              Not Your Average <span className="font-semibold">Application</span>
            </h1>
            <p className="text-neutral-text text-sm">Hover over highlighted text to see the proof behind the claims</p>
          </div>
          <button onClick={onBack} className="text-neutral-text hover:text-white flex items-center gap-2 transition-colors border-b border-transparent hover:border-white/20 pb-1">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
        </div>

        {/* Letter Container */}
        <div className="relative">
          {/* Floating Proof Card */}
          {activeHighlight && (
            <div className="absolute -right-4 top-0 translate-x-full w-72 p-6 rounded-2xl bg-surface-dark border border-primary/30 shadow-[0_0_40px_rgba(220,165,169,0.15)] z-20 animate-slide-up hidden lg:block">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Proof Point</span>
                </div>
                <h4 className="text-white font-medium">{highlights[activeHighlight as keyof typeof highlights]?.title}</h4>
                <p className="text-neutral-text text-sm font-light leading-relaxed">
                  {highlights[activeHighlight as keyof typeof highlights]?.description}
                </p>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-primary font-bold text-lg">{highlights[activeHighlight as keyof typeof highlights]?.metric}</span>
                </div>
              </div>
            </div>
          )}

          {/* Letter */}
          <div className="bg-surface-dark border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Letter Header */}
            <div className="flex items-start justify-between mb-8 pb-8 border-b border-white/5">
              <div className="space-y-1">
                <h2 className="text-white text-2xl font-light">Naomi S. Donley</h2>
                <p className="text-neutral-text text-sm">Durham, NC</p>
                <div className="flex items-center gap-4 pt-2">
                  <a href="mailto:taneekwa@outlook.com" className="text-primary text-sm hover:underline">taneekwa@outlook.com</a>
                  <span className="text-white/20">|</span>
                  <a href="tel:9194410915" className="text-primary text-sm hover:underline">(919) 441-0915</a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-neutral-text text-sm">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>

            {/* Letter Body */}
            <div className="space-y-6 text-neutral-text font-light leading-[1.9]">
              <p className="text-white text-xl font-light min-h-[2rem]">
                {typedText}
                {typedText.length < greeting.length && <span className="animate-pulse">|</span>}
              </p>

              <div className={`space-y-6 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p>
                  I'll be honest—most Proposal Resource Planner job descriptions read like a list of admin tasks. Yours doesn't. It sits at the intersection of people, data, systems, and timelines, which is exactly where I've built my career. <span className="text-white font-normal">Not just managing that intersection, but improving how it works.</span>
                </p>

                <p>
                  Here's what I mean: In my current role at FlexGen, I was brought on to coordinate EMS proposals. Within weeks, I noticed the team spending hours manually transcribing pricing data into PowerPoint decks—tedious, error-prone, and slow. So{' '}
                  <span
                    className="text-primary border-b border-primary/30 cursor-help hover:border-primary transition-colors"
                    onMouseEnter={() => setActiveHighlight('flexgen-tool')}
                    onMouseLeave={() => setActiveHighlight(null)}
                  >
                    I built a tool that transforms Price Worksheet inputs into fully formatted, client-ready proposals automatically
                  </span>
                  . Turnaround went from a week to under 24 hours.
                </p>

                <p>
                  When that worked, I built another one for the Supply department. Then I thought bigger—what if customers didn't have to wait for us at all?{' '}
                  <span
                    className="text-primary border-b border-primary/30 cursor-help hover:border-primary transition-colors"
                    onMouseEnter={() => setActiveHighlight('portal')}
                    onMouseLeave={() => setActiveHighlight(null)}
                  >
                    I designed and built a secure web portal where clients generate their own pricing and proposals
                  </span>
                  {' '}on their own timeline. Sales just sends a link.
                </p>

                <div className="my-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-white text-lg font-light italic text-center">
                    "I'm not an engineer. I'm an operations person who refuses to accept <span className="text-primary">'that's just how we do it'</span> as an answer."
                  </p>
                </div>

                <p>
                  The day-to-day coordination work? I'm excellent at that too. I manage Salesforce data religiously. I track milestones, flag risks early, and make sure nothing stalls because ownership was unclear or a document lived in someone's inbox. I'm the person teams trust to keep things moving while they focus on execution. But what sets me apart is that I'm always looking for the friction—the manual step that doesn't need to be manual, the handoff that creates delay, the process that works but could work better.
                </p>

                <p>
                  At Viventium,{' '}
                  <span
                    className="text-primary border-b border-primary/30 cursor-help hover:border-primary transition-colors"
                    onMouseEnter={() => setActiveHighlight('ai-tool')}
                    onMouseLeave={() => setActiveHighlight(null)}
                  >
                    I built an AI-assisted data transformation tool that reduced client onboarding time by 30%
                  </span>
                  . At Spectraforce,{' '}
                  <span
                    className="text-primary border-b border-primary/30 cursor-help hover:border-primary transition-colors"
                    onMouseEnter={() => setActiveHighlight('tracking')}
                    onMouseLeave={() => setActiveHighlight(null)}
                  >
                    I implemented tracking systems for high-compliance accounts like Charles Schwab and Cigna
                  </span>
                  {' '}that eliminated the constant "where are we on this?" back-and-forth. I don't just support operations—<span className="text-white font-normal">I enable them to scale.</span>
                </p>

                <p>
                  Siemens' focus on purposeful technology and operational excellence is exactly the environment where I thrive. I'd love to bring my coordination skills, systems thinking, and builder mindset to your Proposal team in Wendell.
                </p>

                <p>
                  I'd welcome the chance to talk about how I can contribute—not just to keeping proposals on track, but to <span className="text-white font-normal">making the process itself better.</span>
                </p>

                <div className="pt-8">
                  <p className="text-white">Warm regards,</p>
                  <p className="text-primary text-xl font-light mt-2">Naomi Donley</p>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className={`mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
              <a
                href="/resume.pdf"
                download="Naomi_Donley_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background-dark font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download Resume
              </a>
              <a
                href="mailto:taneekwa@outlook.com?subject=Interview%20Request%20-%20Proposal%20Resource%20Planner"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Let's Talk
              </a>
              <a
                href="https://www.linkedin.com/in/taneekwadonley/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Side Note */}
          <div className={`mt-8 p-6 rounded-2xl bg-background-dark/50 border border-white/5 transition-all duration-700 delay-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
              <div className="space-y-2">
                <p className="text-white text-sm font-medium">Why is this cover letter a website?</p>
                <p className="text-neutral-text text-sm font-light leading-relaxed">
                  Because I wanted to show you how I think, not just tell you. Most candidates send a PDF. I built an interactive experience—the same approach I bring to every operational challenge. If you're curious about the tools I've built, check out my{' '}
                  <button onClick={onBack} className="text-primary hover:underline">full portfolio</button>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
