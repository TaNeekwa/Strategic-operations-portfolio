
import React, { useState } from 'react';

interface DetailedExperienceProps {
  onBack: () => void;
}

const DetailedExperience: React.FC<DetailedExperienceProps> = ({ onBack }) => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const experiences = [
    {
      id: 'flexgen',
      company: 'FlexGen',
      url: 'https://flexgen.com',
      logo: 'FG',
      role: 'Proposal Coordinator (Contract)',
      period: 'March 2025 — Present',
      summary: 'Owning the end-to-end proposal lifecycle for Energy Management Systems (EMS) and Full-Product offerings.',
      overview: 'Own and coordinate the end-to-end proposal lifecycle for Energy Management System (EMS) and Full-Product offerings, supporting pricing validation, scope alignment, and timely delivery of client-ready proposals. Act as a central liaison between Business Development, Tendering, Engineering, and Operations teams.',
      stakeholders: 'Business Development, Tendering, Engineering, Operations',
      responsibilities: [
        'Coordinate multi-team inputs to ensure proposals are technically accurate and commercially sound.',
        'Refine content for clarity, accuracy, and alignment with complex customer requirements.',
        'Analyze bid request documents (RFPs, RFQs, and RFIs) to extract critical decision-making insights.',
        'Manage sensitive operational and customer-facing data with high integrity and accountability.'
      ],
      tools: ['Excel (Advanced)', 'Salesforce', 'PowerPoint', 'SharePoint'],
      references: [
        {
          name: 'Antonio Wade',
          role: 'Proposal Manager',
          email: 'awade@flexgen.com',
          linkedin: 'https://www.linkedin.com/in/antonio-wade-764719139/'
        },
        {
          name: 'Christopher Tellex',
          role: 'Manager, Client Success',
          email: 'Ctellex@flexgen.com',
          linkedin: 'https://www.linkedin.com/in/christopher-tellex-5033343a/'
        }
      ],
      projects: [
        {
          name: 'Automated EMS Proposal Generation',
          problem: 'Proposal creation was manual, slow, and prone to input errors.',
          solution: 'Built a system tool that transforms EMS Price Worksheet inputs into fully formatted, client-ready proposals within minutes.',
          impact: 'Reduced proposal turnaround time by over 90%.'
        },
        {
          name: 'Customer-Facing Pricing & Proposal Portal',
          problem: 'Clients and internal teams lacked a secure, rapid way to model pricing scenarios.',
          solution: 'Developed a portal allowing for faster generation of pricing outputs, enabling quicker deal progression.',
          impact: 'Supports faster revenue realization by putting accurate pricing in front of customers earlier.'
        }
      ]
    },
    {
      id: 'spectraforce',
      company: 'Spectraforce',
      url: 'https://spectraforce.com',
      logo: 'SF',
      role: 'Client Service Coordinator',
      period: 'July 2024 — March 2025',
      summary: 'Managing candidate lifecycles for high-profile accounts like Charles Schwab, Cigna, and Cencora.',
      overview: 'Served as the main point of contact for multiple high-profile client accounts, managing the entire candidate lifecycle from offers and onboarding to compliance and performance tracking.',
      stakeholders: 'Charles Schwab, Cigna, Cencora, Hiring Managers, Recruiters',
      responsibilities: [
        'Own end-to-end onboarding coordination, ensuring compliance within strict deadlines.',
        'Streamline workflows and documentation processes between recruitment and onboarding teams.',
        'Implement standardized reporting systems to improve operational efficiency.',
        'Identify and resolve inefficiencies proactively to enhance candidate experience.'
      ],
      tools: ['Background Screening Systems', 'Compliance Portals', 'CRM Tracking'],
      references: [
        {
          name: 'Cynthia Alley',
          role: 'Sr Client Services Manager',
          email: 'cynthia.alley@spectraforce.com',
          linkedin: 'https://www.linkedin.com/in/cynthia-alley-587857192/'
        },
        {
          name: 'Bianca Nevills',
          role: 'Account Manager',
          email: 'biancanevills@yahoo.com',
          linkedin: 'https://www.linkedin.com/in/bianca-nevills-82311a12a/'
        }
      ],
      projects: [
        {
          name: 'Standardized Tracking Templates',
          problem: 'Lack of structured reporting led to communication gaps and onboarding delays.',
          solution: 'Spearheaded process improvements by implementing standardized documentation and tracking templates.',
          impact: 'Significant reduction in manual errors and improved stakeholder transparency.'
        }
      ]
    },
    {
      id: 'viventium',
      company: 'Viventium',
      url: 'https://viventium.com',
      logo: 'V',
      role: 'Sales Coordinator',
      period: 'August 2023 — February 2024',
      summary: 'Spearheading seamless onboarding onto the payroll platform from contract signature through lifecycle.',
      overview: 'Pivotal role as primary contact during client transition to the Viventium payroll platform. Ensured strict compliance with business tax documentation and local registrations.',
      stakeholders: 'Sales Representatives, Payroll Implementation Specialists, IT',
      responsibilities: [
        'Manage all contracts and proposals using CRM systems (Salesforce/Asana).',
        'Coordinate payroll extraction and secure essential tax documentation.',
        'Conduct weekly team meetings to address account status and missing documentation.',
        'Simultaneously manage multiple onboarding projects to meet revenue deadlines.'
      ],
      tools: ['Salesforce', 'Asana', 'Database Systems'],
      projects: [
        {
          name: 'Data Transformation Suite',
          problem: 'Client payroll data arrived in inconsistent formats, delaying system migration.',
          solution: 'Built data transformation tools to sanitize and format legacy payroll information.',
          impact: 'Resulted in increased revenue realization through faster client satisfaction and onboarding.'
        }
      ]
    },
    {
      id: 'paylocity',
      company: 'Paylocity',
      url: 'https://paylocity.com',
      logo: 'PY',
      role: 'Client Support Specialist',
      period: 'September 2022 — August 2023',
      summary: 'Managing 150+ accounts for payroll, benefits, and deduction troubleshooting.',
      overview: 'Acted as the primary point of contact for complex client issues, training, and troubleshooting. Recognized for exceptional communication and relationship building.',
      stakeholders: 'HR Managers, Payroll Leads, Benefits Administrators',
      responsibilities: [
        'Coordinate and facilitate meetings to troubleshoot benefits, payroll, and deductions.',
        'Collaborate with cross-functional teams to identify upselling opportunities.',
        'Execute seamless data updates for healthcare and benefits information.',
        'Deliver clear, concise problem resolution for high-volume account base.'
      ],
      tools: ['Paylocity Platform', 'Internal Support Systems'],
      projects: []
    },
    {
      id: 'truesource',
      company: 'TrueSource, LLC',
      url: 'https://truesource.com',
      logo: 'TS',
      role: 'Tech Dispatcher',
      period: 'August 2021 — September 2022',
      summary: 'End-to-end dispatch coordination for high-revenue accounts like Walmart, Home Depot, and CVS.',
      overview: 'Primary point of contact for technical issues and service requests. Managed dispatch operations for national enterprise accounts, ensuring SLA adherence.',
      stakeholders: 'Walmart, Home Depot, CVS, Walgreens, Field Technicians',
      responsibilities: [
        'Coordinate timely assignment of field technicians across concurrent service requests.',
        'Apply prioritization logic to balance urgent needs with technician availability.',
        'De-escalate issues and resolve scheduling conflicts with national accounts.',
        'Ensure operational readiness and compliance with safety protocols.'
      ],
      tools: ['ServiceMax', 'Fleet Tracking', 'Proprietary Dispatch Systems'],
      projects: []
    }
  ];

  return (
    <div className="relative z-10 min-h-screen py-24 px-8 md:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 animate-slide-up">
          <div className="space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Career Narrative</span>
            <h1 className="text-white text-5xl font-extralight tracking-tight">Professional <span className="font-semibold">Evolution</span></h1>
          </div>
          <button onClick={onBack} className="text-neutral-text hover:text-white flex items-center gap-2 transition-colors border-b border-transparent hover:border-white/20 pb-1">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`group bg-surface-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 ${expandedRole === exp.id ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border-primary/20' : 'hover:border-white/20'}`}
            >
              <div 
                className="p-8 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                onClick={() => setExpandedRole(expandedRole === exp.id ? null : exp.id)}
              >
                <div className="flex items-center gap-6">
                   <div className="size-14 rounded-xl bg-background-dark border border-white/5 flex items-center justify-center text-primary font-bold text-lg group-hover:scale-110 transition-transform">
                     {exp.logo}
                   </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-white text-2xl font-light">{exp.company}</h3>
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <p className="text-neutral-text font-light tracking-wide">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <p className="hidden lg:block text-neutral-text/40 text-sm italic font-light max-w-[300px] text-right">{exp.summary}</p>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-500 ${expandedRole === exp.id ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
              </div>

              {expandedRole === exp.id && (
                <div className="px-8 pb-10 pt-4 border-t border-white/5 grid md:grid-cols-[1.5fr_1fr] gap-12 animate-slide-up">
                  <div className="space-y-8">
                    <section className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Role Overview</h4>
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:underline">
                          Official Website <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                      </div>
                      <p className="text-neutral-text font-light leading-relaxed">{exp.overview}</p>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-primary font-bold">Key Stakeholders:</span>
                        <span className="text-neutral-text">{exp.stakeholders}</span>
                      </div>
                    </section>

                    <section className="space-y-4">
                      <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Core Responsibilities</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex gap-3 text-sm text-neutral-text font-light">
                            <span className="text-primary mt-0.5 opacity-50">•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {exp.projects.length > 0 && (
                      <section className="space-y-6">
                        <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Key Projects & Automations</h4>
                        <div className="space-y-6">
                          {exp.projects.map((p, i) => (
                            <div key={i} className="bg-background-dark/50 border border-white/5 p-6 rounded-xl space-y-4">
                              <h5 className="text-white font-medium">{p.name}</h5>
                              <div className="grid grid-cols-2 gap-6 text-xs leading-relaxed">
                                <div>
                                  <p className="text-primary/70 font-bold uppercase tracking-widest mb-1">Challenge</p>
                                  <p className="text-neutral-text font-light">{p.problem}</p>
                                </div>
                                <div>
                                  <p className="text-primary/70 font-bold uppercase tracking-widest mb-1">Impact</p>
                                  <p className="text-neutral-text font-light">{p.impact}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>

                  <aside className="space-y-8">
                    {exp.references && exp.references.length > 0 && (
                      <div className="bg-background-dark/40 p-6 rounded-xl border border-white/5">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">References</h4>
                        <div className="space-y-4">
                          {exp.references.map((ref: any, i: number) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-primary text-lg">person</span>
                              </div>
                              <div className="space-y-1">
                                <a
                                  href={ref.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                                >
                                  {ref.name}
                                  <span className="material-symbols-outlined text-xs text-primary/60">open_in_new</span>
                                </a>
                                <p className="text-neutral-text/70 text-xs">{ref.role}</p>
                                <a href={`mailto:${ref.email}`} className="text-primary/70 text-xs hover:text-primary transition-colors">
                                  {ref.email}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-background-dark/40 p-6 rounded-xl border border-white/5">
                      <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Tech Stack Applied</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((t, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-white/60 text-[10px] font-bold uppercase tracking-tighter">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                      <h4 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">Ops Enabler</h4>
                      <p className="text-white text-xs font-light leading-relaxed">
                        I help enable companies by <span className="text-primary font-normal">building systems and tools</span> that remove bottlenecks, improve accuracy, and accelerate the path from proposal to revenue.
                      </p>
                    </div>
                  </aside>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedExperience;
