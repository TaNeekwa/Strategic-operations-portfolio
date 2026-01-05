
import React from 'react';

interface CareerProps {
  id: string;
}

const Career: React.FC<CareerProps> = ({ id }) => {
  const journey = [
    {
      role: "Proposal Coordinator (Contract)",
      company: "FlexGen",
      period: "2025 — Present",
      description: "Orchestrating end-to-end proposal lifecycles for EMS and Full-Product offerings. Automated proposal generation, reducing turnaround time by over 90%."
    },
    {
      role: "Client Service Coordinator",
      company: "Spectraforce",
      period: "2024 — 2025",
      description: "Managing entire candidate lifecycles for high-profile accounts (Schwab, Cigna). Standardized tracking templates and improved documentation efficiency."
    },
    {
      role: "Sales Coordinator",
      company: "Viventium",
      period: "2023 — 2024",
      description: "Primary point of contact for payroll implementation. Built transformation tools to sanitize legacy client data, accelerating time-to-revenue."
    }
  ];

  return (
    <section id={id} className="relative py-32 px-8 sm:px-12 lg:px-24">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Professional Evolution</span>
          <h2 className="text-white text-4xl font-extralight tracking-tight">Career Journey</h2>
        </div>

        <div className="relative border-l border-white/5 pl-8 space-y-24">
          {journey.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[41px] top-1 size-5 rounded-full bg-background-dark border-2 border-primary group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-4">
                <h3 className="text-white text-2xl font-light tracking-tight group-hover:text-primary transition-colors">{item.role}</h3>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{item.period}</span>
              </div>
              <p className="text-neutral-text/60 text-sm font-bold uppercase tracking-[0.15em] mb-4">{item.company}</p>
              <p className="text-neutral-text font-light leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
