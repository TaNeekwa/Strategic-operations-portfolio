
import React from 'react';

interface AboutMeProps {
  onBack: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onBack }) => {
  return (
    <div className="relative z-10 min-h-screen py-24 px-8 md:px-24">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 animate-slide-up">
          <div className="space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Professional Narrative</span>
            <h1 className="text-white text-5xl font-extralight tracking-tight">About <span className="font-semibold">Me</span></h1>
          </div>
          <button onClick={onBack} className="text-neutral-text hover:text-white flex items-center gap-2 transition-colors border-b border-transparent hover:border-white/20 pb-1">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
        </div>

        <div className="space-y-32">
          {/* Introduction */}
          <section className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start animate-slide-up">
            <div className="p-8 rounded-2xl bg-surface-dark border border-white/5 space-y-4">
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest">Mission Statement</p>
              <p className="text-white text-xl font-light italic leading-relaxed">
                "I bring people, processes, and projects together to turn complex requirements into clear plans and dependable results. Through project ownership, field coordination, and practical process improvements, I help teams solve problems, deliver on commitments, and build better ways of working."
              </p>
            </div>
            <div className="space-y-6 text-neutral-text text-lg font-light leading-relaxed">
              <p>
                I’m a Project Manager at EPEC Solutions with experience across electrical equipment delivery, field operations, proposals, contracts, and client implementation. I manage projects from purchase order through factory inspections, testing, site delivery, setup, and closeout.
              </p>
              <p>
                I began my career working directly with customers: managing requests, resolving issues, coordinating services, and navigating complex conversations where clarity, accuracy, and trust mattered. Those early experiences shaped how I work today — with a strong sense of ownership, empathy, and accountability for outcomes, not just tasks.
              </p>
              <p>
                As my roles expanded, so did my scope. I moved into client coordination, sales support, onboarding, and proposal operations, where I became responsible for aligning customer needs with internal teams, pricing models, and delivery capabilities. That work taught me how critical it is to ensure that what’s sold, proposed, or promised can actually be executed downstream.
              </p>
            </div>
          </section>

          {/* How I Work */}
          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary/30"></span>
              <h2 className="text-white text-xl font-light tracking-widest uppercase">How I Work</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-2xl bg-surface-dark border border-white/5 space-y-6">
                <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                <h3 className="text-white text-2xl font-light">Coordination Engine</h3>
                <p className="text-neutral-text text-sm font-light leading-relaxed">
                  I manage the details that connect planning with execution: customer requirements, scope, drawings, materials, schedules, and handoffs. From the project office to the factory and customer site, I track open items, communicate risks, and follow through on the next step.
                </p>
              </div>
              <div className="p-10 rounded-2xl bg-surface-dark border border-white/5 space-y-6">
                <span className="material-symbols-outlined text-primary text-3xl">account_tree</span>
                <h3 className="text-white text-2xl font-light">Cross-Functional Liaison</h3>
                <p className="text-neutral-text text-sm font-light leading-relaxed">
                  I coordinate across customers, Sales, Engineering, Operations, manufacturing partners, field teams, and Leadership. I’m known for bringing structure to complex or ambiguous workflows and for improving how information flows between teams.
                </p>
              </div>
            </div>
          </section>

          {/* Process Not Just Paper */}
          <section className="grid lg:grid-cols-[2fr_1fr] gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-white text-4xl font-extralight tracking-tight">Process, <span className="font-semibold text-primary">Not Just Paper.</span></h2>
                <p className="text-neutral-text text-lg font-light leading-relaxed">
                  Across project delivery, field coordination, proposals, and client operations, I build practical systems that make schedules, documentation, and handoffs easier to manage. At EPEC, this includes a project tracker, standardized onboarding materials, and a leadership-approved client portal pilot.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Standardizing project workflows, records, and handoffs",
                  "Reducing manual work through practical tools and automation",
                  "Supporting faster turnaround times without sacrificing quality",
                  "Ensuring teams access the right information at the right time"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-white/80 font-light">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-neutral-text text-sm italic font-light">
                "Any tools or automation I’ve supported have been built in service of operations — to reduce errors, protect quality, and help teams deliver on commitments more effectively."
              </p>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group">
              <img src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" alt="Process work" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            </div>
          </section>

          {/* What Sets Me Apart & Approach */}
          <section className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-white text-2xl font-light border-b border-white/5 pb-4">What Sets Me Apart</h3>
              <p className="text-neutral-text font-light leading-relaxed">
                What differentiates me is my ability to bridge client expectations and internal delivery. I naturally sit at the intersection of client needs, sales objectives, and operational constraints.
              </p>
              <p className="text-neutral-text font-light leading-relaxed">
                I’m comfortable navigating competing priorities, resolving issues across teams, and following a project through production, inspections, testing, delivery, and closeout. I combine that field perspective with experience in proposals, contracts, and client onboarding.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="text-white text-2xl font-light border-b border-white/5 pb-4">My Approach</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Ownership", text: "Clear ownership and follow-through on all deliverables." },
                  { label: "Accuracy", text: "Reliable project records, clear requirements, and attention to equipment quality." },
                  { label: "Collaboration", text: "Collaborative, cross-functional focus on internal success." },
                  { label: "Dependability", text: "Proactive, organized, and trusted to keep things moving." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-widest w-24 pt-1">{item.label}</span>
                    <p className="text-neutral-text text-sm font-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Focused On */}
          <section className="text-center bg-surface-dark/40 py-24 rounded-[3rem] border border-white/5">
             <div className="max-w-2xl mx-auto space-y-12">
                <div className="space-y-4">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">Growth Path</span>
                  <h2 className="text-white text-4xl font-extralight tracking-tight">Areas of <span className="font-semibold">Focus</span></h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                   {[
                     "Project Management & Delivery",
                     "Field Operations & Equipment Inspections",
                     "Proposals & Commercial Coordination",
                     "Client Services & Account Coordination",
                     "Procurement & Vendor Coordination",
                     "Implementation & Onboarding Coordination",
                     "Submittals & Document Control",
                     "Process Automation & Tooling"
                   ].map((item, i) => (
                     <div key={i} className="px-6 py-4 rounded-xl border border-white/10 bg-background-dark/60 text-white text-sm font-light hover:border-primary/40 hover:text-primary transition-all cursor-default">
                       {item}
                     </div>
                   ))}
                </div>
                <p className="text-neutral-text font-light text-sm max-w-lg mx-auto leading-relaxed">
                  I am dedicated to fast-paced, cross-functional environments where I can continue to support structured execution and strong client experiences.
                </p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
