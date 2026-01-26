
import React, { useState } from 'react';

interface WhatIDoProps {
  id: string;
}

const WhatIDo: React.FC<WhatIDoProps> = ({ id }) => {
  const [currentPage, setCurrentPage] = useState(0);

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
    },
    {
      title: "Document Control & Data Management",
      icon: "folder_open",
      description: "Keeping information accurate, organized, and accessible. I manage document flow, version control, and database integrity so teams always have what they need—when they need it.",
      tags: ["Document control & version tracking", "Database management & data flow", "SharePoint & file organization", "Data validation & reporting", "Records management & audit readiness"]
    },
    {
      title: "Implementation & System Onboarding",
      icon: "sync_alt",
      description: "Managing the transition from signed contract to fully operational system. I coordinate data extraction, migration, and documentation to ensure clean handoffs, accurate imports, and on-time go-lives.",
      tags: ["End-to-end implementation coordination", "Data extraction & migration", "System onboarding & client handoff", "Multi-platform proficiency", "Import-ready documentation", "Client database management"]
    },
    {
      title: "Tools & Automation Development",
      icon: "build",
      description: "Building solutions that save time and reduce errors. I design and implement internal tools, templates, and automated workflows that enable teams to work faster and more accurately.",
      tags: ["Excel automation & advanced formulas", "VBA & macro development", "Internal tool building", "Template creation & standardization", "Workflow automation", "Portal & dashboard development"]
    },
    {
      title: "Vendor & Subcontractor Coordination",
      icon: "handshake",
      description: "Managing external relationships that support internal success. I coordinate vendor inputs, track quote status, and ensure external partners deliver what's needed on time.",
      tags: ["Vendor communication & follow-up", "Quote tracking & organization", "Subcontractor prequalification support", "Procurement coordination", "External partner management"]
    },
    {
      title: "Reporting & Data Analysis",
      icon: "bar_chart",
      description: "Turning data into clarity. I build reports, track KPIs, and surface insights that help teams understand performance, identify issues, and make informed decisions.",
      tags: ["Report creation & formatting", "Data validation & cleanup", "KPI tracking & dashboards", "Excel-based analysis", "Data-driven decision support"]
    },
    {
      title: "Compliance & Quality Assurance",
      icon: "verified",
      description: "Ensuring work meets standards before it goes out the door. I support compliance tracking, documentation audits, and quality reviews to protect accuracy and reduce risk.",
      tags: ["Compliance tracking & documentation", "Audit readiness & record-keeping", "Quality control & review processes", "Regulatory alignment", "Risk identification & escalation"]
    }
  ];

  const cardsPerPage = 4;
  const totalPages = Math.ceil(capabilities.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCapabilities = capabilities.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

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

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 size-12 rounded-full bg-surface-dark border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-white/60 hover:text-primary transition-all duration-300 shadow-lg"
            aria-label="Previous services"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 transition-all duration-500">
            {visibleCapabilities.map((cap, i) => (
              <div
                key={`${currentPage}-${i}`}
                className="group p-10 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
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

          {/* Right Arrow */}
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 size-12 rounded-full bg-surface-dark border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-white/60 hover:text-primary transition-all duration-300 shadow-lg"
            aria-label="Next services"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`transition-all duration-300 rounded-full ${
                currentPage === i
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* Page Counter */}
        <p className="text-center text-neutral-text/50 text-sm mt-4">
          {currentPage + 1} of {totalPages}
        </p>
      </div>
    </section>
  );
};

export default WhatIDo;
