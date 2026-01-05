
import React from 'react';

interface WhatIDoProps {
  id: string;
}

const WhatIDo: React.FC<WhatIDoProps> = ({ id }) => {
  const capabilities = [
    {
      title: "Proposal & Pursuit Management",
      icon: "task_alt",
      description: "Managing the full lifecycle of complex RFPs, RFIs, and strategic bids. I coordinate inputs, timelines, and reviews to ensure proposals are compelling, compliant, and ready to execute—not just submitted.",
      tags: ["End-to-end proposal coordination", "RFP/RFI strategy & positioning", "Narrative development & editing", "Compliance checks & quality reviews"]
    },
    {
      title: "Client & Delivery Operations",
      icon: "hub",
      description: "Bridging the gap between sales commitments and real-world delivery. I support smooth handoffs from proposal to implementation by aligning stakeholders, expectations, and workflows early.",
      tags: ["Client onboarding & transitions", "Cross-functional coordination", "SLA & expectation alignment", "Client lifecycle support"]
    },
    {
      title: "Pricing & Commercial Alignment",
      icon: "payments",
      description: "Ensuring pricing tells the right story—competitively and internally. I partner with finance, sales, and product teams to align pricing models with margin targets, scope clarity, and delivery realities.",
      tags: ["Pricing coordination & validation", "Margin awareness & tradeoff analysis", "Commercial model support", "Price governance & documentation"]
    },
    {
      title: "Process & Workflow Optimization",
      icon: "settings_suggest",
      description: "Designing better ways of working. I identify inefficiencies, streamline workflows, and introduce automation to reduce manual effort, errors, and bottlenecks.",
      tags: ["Workflow mapping & refinement", "CRM optimization & customization", "Automation of repeatable tasks", "Operational tooling & systems hygiene"]
    },
    {
      title: "Proposal Presentation & Brand Execution",
      icon: "palette",
      description: "Ensuring every deliverable reflects clarity, credibility, and consistency. I support proposal presentations and materials that are polished, on-brand, and easy for clients and internal teams to navigate.",
      tags: ["Proposal presentation readiness", "Visual & structural consistency", "Brand guideline adherence", "Peer reviews & final QA"]
    },
    {
      title: "Project & Stakeholder Coordination",
      icon: "groups",
      description: "Keeping moving parts aligned in deadline-driven environments. I support project timelines by managing details, tracking dependencies, and ensuring communication stays clear across teams.",
      tags: ["Timeline & milestone coordination", "Internal and external stakeholder management", "Vendor & partner coordination", "Detail-driven execution support"]
    }
  ];

  return (
    <section id={id} className="relative py-32 px-8 sm:px-12 lg:px-24 bg-surface-dark/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center space-y-4 mb-20">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Core Capabilities</span>
          <h2 className="text-white text-4xl sm:text-5xl font-extralight tracking-tight">Strategic Service Offerings</h2>
          <p className="text-neutral-text max-w-2xl mx-auto font-light">
            I don't just manage tasks; I elevate the entire operational engine to support sustainable client acquisition and retention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="size-16 rounded-xl bg-background-dark flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl">{cap.icon}</span>
                </div>
                <h3 className="text-white text-2xl font-light tracking-tight group-hover:text-primary transition-colors">{cap.title}</h3>
              </div>
              <p className="text-neutral-text font-light leading-relaxed mb-8">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
