
import React, { useState } from 'react';

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Automated EMS Proposal Tool",
      role: "Proposal Coordinator",
      toolType: "Internal Proposal Automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      challenge: "EMS proposals were created through manual transcription from complex Price Worksheets into PowerPoint decks. The process was slow, error-prone, and heavily dependent on individual knowledge, resulting in long turnaround times and inconsistent outputs.",
      innovation: "Designed and built an automated proposal generation tool that transforms EMS Price Worksheet inputs into fully formatted, client-ready proposals. The tool standardizes structure, formatting, and content logic while allowing rapid regeneration when pricing or scope changes.",
      impacts: [
        "Eliminated manual proposal assembly and repetitive formatting work",
        "Enabled near-instant regeneration for pricing or scope revisions",
        "Improved pricing accuracy and consistency across submissions",
        "Allowed sales teams to present pricing to customers earlier in the deal cycle"
      ],
      result: "Reduced EMS proposal turnaround from ~1 week to under 24 hours, accelerating deal velocity and supporting faster contract execution.",
      tools: ["Excel (Advanced)", "PowerPoint", "VBA/Macros", "SharePoint"]
    },
    {
      title: "Supply Department Proposal Generator",
      role: "Proposal Coordinator",
      toolType: "Proposal Automation + Engineering Handoff Optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      challenge: "Supply proposals required extensive manual data entry across multiple product components, creating bottlenecks between engineering sizing and proposal delivery. Turnaround times averaged two weeks per proposal.",
      innovation: "Built a specialized supply proposal generator by adapting and extending EMS automation logic. The workflow decouples engineering sizing from proposal creation, allowing proposals to be generated immediately once sizing is complete.",
      impacts: [
        "Reduced dependency on manual data transcription",
        "Preserved engineering focus while accelerating proposal delivery",
        "Enabled faster customer pricing visibility and revision turnaround",
        "Increased proposal throughput during high-volume bidding periods"
      ],
      result: "Reduced supply proposal turnaround from ~2 weeks to ~1 week while maintaining technical accuracy and scalability.",
      tools: ["Excel (Advanced)", "PowerPoint", "Process Automation", "Cross-team Coordination"]
    },
    {
      title: "EMS Pricing & Proposal Portal",
      role: "Proposal Coordinator",
      toolType: "Customer-Facing Pricing & Proposal Tool",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
      challenge: "Customers had to wait for sales teams to manually generate pricing and proposals, creating delays in the buying process. This back-and-forth slowed deal momentum and made it harder for clients to explore options on their own timeline.",
      innovation: "Built a secure, customer-facing web portal where clients can input their own site specifications—POI, power size, number of blocks, and other requirements—and instantly generate accurate pricing along with a downloadable proposal. Sales teams simply provide customers with a link and password to access the tool directly.",
      impacts: [
        "Empowered customers to self-serve pricing and proposals on their own schedule",
        "Eliminated wait times for initial pricing conversations",
        "Enabled customers to explore multiple configurations instantly",
        "Freed up sales team bandwidth by reducing manual proposal requests"
      ],
      result: "Transformed the customer experience by putting pricing power directly in their hands, accelerating deal velocity and shortening sales cycles.",
      tools: ["Web Application", "Dynamic Form Inputs", "Automated Pricing Engine", "Document Generation", "PDF/PowerPoint Export", "User Access Controls"]
    }
  ];

  return (
    <section id={id} className="relative py-32 px-8 sm:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Case Studies</span>
          <h2 className="text-white text-4xl sm:text-5xl font-extralight tracking-tight">Strategic Impact</h2>
          <p className="text-neutral-text max-w-2xl mx-auto font-light">
            Real tools and automations I've built to solve operational bottlenecks and accelerate revenue.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setActiveProject(i)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProject === i
                  ? 'bg-primary text-background-dark'
                  : 'bg-surface-dark border border-white/10 text-white/70 hover:border-primary/50 hover:text-white'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="bg-surface-dark border border-white/5 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[600px]">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent lg:bg-gradient-to-r"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:top-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-dark/80 backdrop-blur-md border border-white/10">
                  <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{projects[activeProject].toolType}</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 space-y-8">
              <div className="space-y-3">
                <p className="text-primary text-xs font-bold uppercase tracking-widest">{projects[activeProject].role}</p>
                <h3 className="text-white text-3xl font-light tracking-tight">{projects[activeProject].title}</h3>
              </div>

              {/* Challenge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-400 text-lg">error</span>
                  <h4 className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Challenge</h4>
                </div>
                <p className="text-neutral-text text-sm font-light leading-relaxed">{projects[activeProject].challenge}</p>
              </div>

              {/* Innovation */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">lightbulb</span>
                  <h4 className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Innovation</h4>
                </div>
                <p className="text-neutral-text text-sm font-light leading-relaxed">{projects[activeProject].innovation}</p>
              </div>

              {/* Impact Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-400 text-lg">trending_up</span>
                  <h4 className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Operational & Revenue Impact</h4>
                </div>
                <ul className="space-y-2">
                  {projects[activeProject].impacts.map((impact, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-text font-light">
                      <span className="text-primary mt-1">+</span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result Banner */}
              <div className="p-5 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">emoji_events</span>
                  <div>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Tangible Result</p>
                    <p className="text-white text-sm font-medium leading-relaxed">{projects[activeProject].result}</p>
                  </div>
                </div>
              </div>

              {/* Tools Used */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-background-dark border border-white/5 text-white/60 text-xs font-medium">
                      {tool}
                    </span>
                  ))}
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
              onClick={() => setActiveProject(i)}
              className={`size-2 rounded-full transition-all duration-300 ${
                activeProject === i ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
