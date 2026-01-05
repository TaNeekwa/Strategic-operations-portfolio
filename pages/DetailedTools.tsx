
import React, { useState } from 'react';

interface DetailedToolsProps {
  onBack: () => void;
}

const DetailedTools: React.FC<DetailedToolsProps> = ({ onBack }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const projects = [
    {
      name: "Automated EMS Proposal Tool",
      company: "FlexGen",
      toolType: "Internal Proposal Automation",
      context: "When I joined FlexGen as a Proposal Coordinator, I was brought on to support the growing volume of Energy Management System proposals. Within my first few weeks, I noticed the team spending hours manually transcribing data from complex Price Worksheets into PowerPoint decks—work that was tedious, error-prone, and created real bottlenecks.",
      approach: "I started by shadowing the process end-to-end, asking questions about what information was always needed, what changed between proposals, and where errors typically crept in. I mapped out the entire workflow and identified the repetitive patterns. Then I began building—starting small with one section, testing it with the team, getting feedback, and iterating. I collaborated closely with Business Development and Tendering to make sure the output matched what they actually needed, not just what I assumed.",
      building: "The tool I built transforms EMS Price Worksheet inputs into fully formatted, client-ready proposals automatically. It standardizes structure, formatting, and content logic while allowing rapid regeneration when pricing or scope changes. I designed it to be flexible enough that anyone on the team could use it without needing to understand the backend logic.",
      impacts: [
        "Eliminated manual proposal assembly and repetitive formatting work",
        "Enabled near-instant regeneration for pricing or scope revisions",
        "Improved pricing accuracy and consistency across submissions",
        "Allowed sales teams to present pricing to customers earlier in the deal cycle"
      ],
      result: "Reduced EMS proposal turnaround from ~1 week to under 24 hours, accelerating deal velocity and supporting faster contract execution.",
      tools: ["Excel (Advanced)", "PowerPoint", "VBA/Macros", "SharePoint"],
      testimonial: {
        quote: "This tool completely transformed how we handle EMS proposals. What used to take days now takes minutes, and the accuracy is consistently better than our manual process ever was.",
        name: "Antonio Wade",
        role: "Proposal Manager",
        company: "FlexGen",
        linkedin: "https://www.linkedin.com/in/antonio-wade-764719139/"
      }
    },
    {
      name: "Supply Department Proposal Generator",
      company: "FlexGen",
      toolType: "Proposal Automation + Engineering Handoff",
      context: "After the success of the EMS automation, the Supply department approached me about a similar challenge. Their proposals required extensive manual data entry across multiple product components, and there was a persistent bottleneck between when Engineering completed their sizing work and when a proposal could actually go out. Turnaround times were averaging two weeks.",
      approach: "I spent time with both the Engineering and Supply teams to understand their workflows. The key insight was that these two processes didn't need to be so tightly coupled—Engineering shouldn't have to wait for proposals, and proposals shouldn't have to wait for Engineering beyond what was strictly necessary. I designed a workflow that decoupled these dependencies while maintaining data integrity.",
      building: "I adapted and extended the logic from the EMS tool to create a specialized supply proposal generator. The system allows proposals to be generated immediately once sizing is complete, without requiring Engineering to context-switch into proposal formatting. I built in validation checks to ensure nothing gets missed, and the output is consistent regardless of who runs it.",
      impacts: [
        "Reduced dependency on manual data transcription",
        "Preserved engineering focus while accelerating proposal delivery",
        "Enabled faster customer pricing visibility and revision turnaround",
        "Increased proposal throughput during high-volume bidding periods"
      ],
      result: "Reduced supply proposal turnaround from ~2 weeks to ~1 week while maintaining technical accuracy and scalability.",
      tools: ["Excel (Advanced)", "PowerPoint", "Process Automation", "Cross-team Coordination"],
      testimonial: {
        quote: "The supply proposal generator freed up our engineering team to focus on what they do best. We no longer have bottlenecks waiting for proposals to catch up with our sizing work.",
        name: "Christopher Tellex",
        role: "Manager, Client Success",
        company: "FlexGen",
        linkedin: "https://www.linkedin.com/in/christopher-tellex-5033343a/"
      }
    },
    {
      name: "EMS Pricing & Proposal Portal",
      company: "FlexGen",
      toolType: "Customer-Facing Pricing & Proposal Tool",
      context: "With the internal tools running smoothly, I started thinking bigger. I noticed that even with faster proposal generation, customers still had to wait for sales teams to run the numbers and send them quotes. Every back-and-forth email added delays. I thought: what if we could put the power directly in the customer's hands?",
      approach: "I pitched the idea to leadership and got the green light to explore it. I worked with the sales team to understand exactly what information customers needed to input, what guardrails we needed to maintain pricing integrity, and how we could make it secure but accessible. I prototyped different interfaces, tested them with internal stakeholders acting as customers, and refined based on their feedback.",
      building: "I built a secure, customer-facing web portal where clients can input their own site specifications—POI, power size, number of blocks, and other requirements—and instantly generate accurate pricing along with a downloadable proposal. Sales teams simply provide customers with a link and password. The customer does the rest on their own timeline, exploring different configurations until they find what works.",
      impacts: [
        "Empowered customers to self-serve pricing and proposals on their own schedule",
        "Eliminated wait times for initial pricing conversations",
        "Enabled customers to explore multiple configurations instantly",
        "Freed up sales team bandwidth by reducing manual proposal requests"
      ],
      result: "Transformed the customer experience by putting pricing power directly in their hands, accelerating deal velocity and shortening sales cycles.",
      tools: ["Web Application", "Dynamic Form Inputs", "Automated Pricing Engine", "Document Generation", "PDF/PowerPoint Export", "User Access Controls"],
      images: [
        { src: "/flexgen-proposals.png", caption: "Proposals dashboard with conversion metrics and revenue tracking" },
        { src: "/flexgen-login.png", caption: "Secure customer login with SSO and access controls" },
        { src: "/flexgen-clients.png", caption: "Client management with usage limits and admin setup" }
      ],
      testimonial: {
        quote: "Giving our customers direct access to pricing changed everything. Deals that used to stall waiting for quotes now move forward on the customer's timeline. It's been a game-changer for our sales velocity.",
        name: "Antonio Wade",
        role: "Proposal Manager",
        company: "FlexGen",
        linkedin: "https://www.linkedin.com/in/antonio-wade-764719139/"
      }
    },
    {
      name: "Client Onboarding Tracking System",
      company: "Spectraforce",
      toolType: "Operations & Compliance Tracking",
      context: "At Spectraforce, I managed onboarding for high-profile accounts like Charles Schwab, Cigna, and Cencora. These clients had strict compliance requirements and zero tolerance for missed deadlines. When I started, information was scattered across emails, spreadsheets, and different systems. People were constantly asking 'where are we with this candidate?' and the answer was never in one place.",
      approach: "I knew we needed a single source of truth. I audited our existing processes, documented every touchpoint in the candidate lifecycle, and identified where things were falling through the cracks. I collaborated with recruiters, compliance teams, and account managers to understand what visibility they actually needed—not just what would be nice to have, but what would change how they worked.",
      building: "I implemented comprehensive tracking templates and standardized documentation systems that centralized all candidate lifecycle data. The system automated deadline alerts, provided clear visibility into onboarding status across all accounts, and made it impossible for things to slip through unnoticed. I trained the team on the new workflows and iterated based on what worked and what didn't.",
      impacts: [
        "Centralized tracking across all high-profile accounts in one system",
        "Reduced compliance deadline risks through automated alerts",
        "Improved stakeholder transparency—everyone could see status at a glance",
        "Eliminated the constant 'where are we with this?' back-and-forth"
      ],
      result: "Improved audit pass rates and candidate onboarding efficiency, with the team able to handle higher volume without adding headcount.",
      tools: ["Excel (Advanced)", "Tracking Templates", "Compliance Portals", "CRM Systems", "Process Documentation"],
      testimonial: {
        quote: "Before this system, we were constantly chasing deadlines and missing details. Now everything is in one place, and we can actually stay ahead of compliance requirements instead of scrambling to catch up.",
        name: "Cynthia Alley",
        role: "Sr Client Services Manager",
        company: "Spectraforce",
        linkedin: "https://www.linkedin.com/in/cynthia-alley-587857192/"
      }
    },
    {
      name: "Payroll Data Intake & Implementation Automation Tool",
      company: "Viventium",
      toolType: "AI-Powered Web Application",
      context: "As a Client Coordinator and Implementation Specialist at Viventium, I was at the center of every client onboarding. The reality? Clients submitted payroll and HR data from dozens of different payroll providers—ADP, Paychex, Gusto, legacy systems, and everything in between. Each had unique formats, naming conventions, and structures. Every onboarding meant hours of manual data cleanup, delayed implementations, and constant risk of errors slipping into the system.",
      approach: "I started documenting every data format we received, mapping the patterns across providers. The core insight was that even though the formats looked completely different, the underlying data was always the same—employee info, pay rates, deductions, tax withholdings. I realized we needed something smarter than manual processes. I began exploring how we could use structured logic combined with AI to automatically identify fields, standardize values, and handle the messiness that came with real-world client data.",
      building: "I designed and built an intelligent intake and transformation web application that allows implementation teams to upload payroll reports from any provider, select the client and target system configuration, and automatically normalize, map, and format the data into implementation-ready templates. The tool uses structured logic and AI-assisted sorting to identify fields, standardize values, and prepare clean outputs—without requiring manual rework. It handles the variation so the team doesn't have to.",
      impacts: [
        "Eliminated hours of manual data cleanup per client",
        "Reduced implementation delays caused by incompatible or inconsistent source data",
        "Improved data accuracy entering the payroll system",
        "Enabled implementation teams to onboard clients faster and with greater confidence"
      ],
      result: "Reduced client onboarding lead time by over 30% while improving data quality and implementation consistency.",
      tools: ["Web Application", "AI/Machine Learning", "Data Mapping & Normalization", "Automated Field Recognition", "Salesforce", "Asana"],
      images: [
        { src: "/viventium-dashboard.png", caption: "Dashboard with real-time metrics and file processing status" },
        { src: "/viventium-processing.png", caption: "AI-powered data processing with 98.5% confidence scoring" },
        { src: "/viventium-templates.png", caption: "Custom mapping templates for different payroll providers" }
      ],
      testimonial: {
        quote: "This tool changed everything about how we handle client data. What used to take hours of tedious cleanup now happens automatically. The AI catches things we would have missed, and our clients get live faster.",
        name: "Implementation Team",
        role: "Viventium",
        company: "Viventium",
        linkedin: ""
      }
    }
  ];

  const skillCategories = [
    {
      title: "Proposal & Operations",
      icon: "description",
      items: ["Excel (Advanced)", "Salesforce", "Asana", "SharePoint", "PowerPoint", "RFI/RFP Analysis", "Narrative Development"]
    },
    {
      title: "Automation & Development",
      icon: "code",
      items: ["VBA/Macros", "Web Applications", "Document Generation", "Workflow Automation", "Data Transformation", "API Integration"]
    },
    {
      title: "Client & Sales Coordination",
      icon: "groups",
      items: ["Client Onboarding", "CRM Management", "Pipeline Tracking", "SLA Management", "Compliance Auditing", "Stakeholder Communication"]
    }
  ];

  return (
    <div className="relative z-10 min-h-screen py-24 px-8 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-slide-up">
          <div className="space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Technological Leverage</span>
            <h1 className="text-white text-5xl font-extralight tracking-tight">Tools & <span className="font-semibold">Automations</span></h1>
          </div>
          <button onClick={onBack} className="text-neutral-text hover:text-white flex items-center gap-2 transition-colors border-b border-transparent hover:border-white/20 pb-1">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
        </div>

        {/* Innovation Philosophy */}
        <section className="mb-24 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-surface-dark to-background-dark border border-white/5 overflow-hidden group">
            <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-all duration-1000"></div>
            <div className="relative z-10 space-y-8 max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Innovation Philosophy</span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-extralight leading-relaxed italic">
                "I believe that as tools, systems, and AI continue to evolve, it's important for operations and proposal teams to lean into them thoughtfully — not to replace people, but to support better decision-making, reduce manual risk, and improve consistency."
              </p>
              <p className="text-neutral-text text-lg font-light leading-relaxed">
                I'm naturally tech-savvy and comfortable learning new systems, and I use modern tools and automation as a way to strengthen processes, protect accuracy, and enable teams to work more efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-[1px] w-12 bg-primary/30"></span>
            <h2 className="text-white text-xl font-light tracking-widest uppercase">Select Projects</h2>
          </div>

          {/* Project Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveProject(i);
                  setActiveImage(0);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeProject === i
                    ? 'bg-primary text-background-dark'
                    : 'bg-surface-dark border border-white/10 text-white/70 hover:border-primary/50 hover:text-white'
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* Active Project Card */}
          <div className="bg-surface-dark border border-white/5 rounded-3xl overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 pb-8 border-b border-white/5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                      {projects[activeProject].company}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                      {projects[activeProject].toolType}
                    </span>
                  </div>
                  <h3 className="text-white text-3xl font-light tracking-tight">{projects[activeProject].name}</h3>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-background-dark border border-white/10 text-white/70 text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content - Personal Narrative */}
              <div className="space-y-10">
                {/* The Context */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-400 text-lg">visibility</span>
                    </div>
                    <h4 className="text-white text-sm font-medium uppercase tracking-widest">The Context</h4>
                  </div>
                  <p className="text-neutral-text font-light leading-relaxed pl-11">{projects[activeProject].context}</p>
                </div>

                {/* My Approach */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-amber-400 text-lg">psychology</span>
                    </div>
                    <h4 className="text-white text-sm font-medium uppercase tracking-widest">My Approach</h4>
                  </div>
                  <p className="text-neutral-text font-light leading-relaxed pl-11">{projects[activeProject].approach}</p>
                </div>

                {/* What I Built */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-lg">build</span>
                    </div>
                    <h4 className="text-white text-sm font-medium uppercase tracking-widest">What I Built</h4>
                  </div>
                  <p className="text-neutral-text font-light leading-relaxed pl-11">{projects[activeProject].building}</p>
                </div>

                {/* Compact Screenshot Gallery - Only show if project has images */}
                {projects[activeProject].images && projects[activeProject].images.length > 0 && (
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-400 text-lg">screenshot_monitor</span>
                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Screenshots</span>
                    </div>
                    <div className="flex gap-2">
                      {projects[activeProject].images.map((img: any, i: number) => (
                        <button
                          key={i}
                          onClick={() => {
                            setActiveImage(i);
                            setLightboxOpen(true);
                          }}
                          className="relative w-20 h-14 rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                        >
                          <img
                            src={img.src}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-sm">zoom_in</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <span className="text-white/30 text-xs">Click to view</span>
                  </div>
                )}

                {/* Impact & Result Grid */}
                <div className="grid lg:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                  {/* Impact Points */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-green-400 text-lg">trending_up</span>
                      </div>
                      <h4 className="text-white text-sm font-medium uppercase tracking-widest">The Impact</h4>
                    </div>
                    <ul className="space-y-3 pl-11">
                      {projects[activeProject].impacts.map((impact, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-text font-light">
                          <span className="text-green-400 mt-0.5">+</span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result Banner */}
                  <div className="flex flex-col justify-center">
                    <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary text-2xl mt-0.5">emoji_events</span>
                        <div>
                          <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">The Result</p>
                          <p className="text-white font-medium leading-relaxed">{projects[activeProject].result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="relative p-8 rounded-2xl bg-background-dark/50 border border-white/5">
                    <span className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">"</span>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                      <p className="text-white text-lg font-light leading-relaxed italic flex-1 pt-4 lg:pt-0">
                        {projects[activeProject].testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4 lg:border-l lg:border-white/10 lg:pl-8">
                        <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-xl">person</span>
                        </div>
                        <div>
                          {projects[activeProject].testimonial.linkedin ? (
                            <a
                              href={projects[activeProject].testimonial.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white font-medium hover:text-primary transition-colors flex items-center gap-1"
                            >
                              {projects[activeProject].testimonial.name}
                              <span className="material-symbols-outlined text-xs text-primary/60">open_in_new</span>
                            </a>
                          ) : (
                            <p className="text-white font-medium">{projects[activeProject].testimonial.name}</p>
                          )}
                          <p className="text-neutral-text text-sm">{projects[activeProject].testimonial.role}</p>
                          <p className="text-primary/60 text-xs">{projects[activeProject].testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveProject(i);
                  setActiveImage(0);
                }}
                className={`size-2 rounded-full transition-all duration-300 ${
                  activeProject === i ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-[1px] w-12 bg-primary/30"></span>
            <h2 className="text-white text-xl font-light tracking-widest uppercase">Skill Summary</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-8 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{cat.icon}</span>
                  </div>
                  <h3 className="text-white font-medium">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-lg bg-white/5 text-neutral-text text-xs font-medium border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Testimonials */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-[1px] w-12 bg-primary/30"></span>
            <h2 className="text-white text-xl font-light tracking-widest uppercase">What Colleagues Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.testimonial.linkedin).map((project, i) => (
              <div key={i} className="p-8 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-4xl text-primary/30 font-serif">"</span>
                  <p className="text-neutral-text font-light leading-relaxed italic">
                    {project.testimonial.quote}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg">person</span>
                      </div>
                      <div>
                        <a
                          href={project.testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                        >
                          {project.testimonial.name}
                          <span className="material-symbols-outlined text-xs text-primary/60">open_in_new</span>
                        </a>
                        <p className="text-neutral-text text-xs">{project.testimonial.role}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      {project.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && projects[activeProject].images && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>

          {/* Navigation Arrows */}
          {projects[activeProject].images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev === 0 ? projects[activeProject].images.length - 1 : prev - 1));
                }}
                className="absolute left-6 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev === projects[activeProject].images.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-6 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
              </button>
            </>
          )}

          {/* Image Container */}
          <div
            className="max-w-5xl max-h-[85vh] mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[activeProject].images[activeImage].src}
              alt={projects[activeProject].images[activeImage].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-medium">{projects[activeProject].images[activeImage].caption}</p>
              <p className="text-white/40 text-sm mt-1">
                {activeImage + 1} of {projects[activeProject].images.length}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex justify-center gap-2 mt-4">
              {projects[activeProject].images.map((img: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-10 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === i
                      ? 'border-primary'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedTools;
