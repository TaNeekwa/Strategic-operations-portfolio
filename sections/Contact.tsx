
import React from 'react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="relative py-32 px-8 sm:px-12 lg:px-24 bg-surface-dark/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Engagement</span>
              <h2 className="text-white text-5xl font-extralight tracking-tight leading-tight">Ready to <br/><span className="font-semibold">Align Success?</span></h2>
              <p className="text-neutral-text font-light leading-relaxed max-w-md">
                Whether you're looking for an operations lead or a proposal mastermind, let's discuss how I can support your growth.
              </p>
            </div>

            <div className="space-y-8 pt-6">
              <a href="mailto:taneekwa@outlook.com" className="flex items-center gap-6 group cursor-pointer">
                <div className="size-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Direct Email</p>
                  <p className="text-white font-light group-hover:text-primary transition-colors">taneekwa@outlook.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/taneekwadonley/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="size-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">partner_exchange</span>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Connect Professionally</p>
                  <p className="text-white font-light group-hover:text-primary transition-colors">LinkedIn Profile</p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-10 rounded-2xl bg-surface-dark border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 size-40 bg-primary/5 rounded-full blur-[60px]"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-text ml-1">Full Name</label>
                  <input type="text" className="w-full bg-background-dark/50 border border-white/5 rounded-lg h-12 px-4 text-white focus:border-primary/50 focus:ring-0 transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-text ml-1">Professional Email</label>
                  <input type="email" className="w-full bg-background-dark/50 border border-white/5 rounded-lg h-12 px-4 text-white focus:border-primary/50 focus:ring-0 transition-colors" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-text ml-1">Inquiry Type</label>
                <select className="w-full bg-background-dark/50 border border-white/5 rounded-lg h-12 px-4 text-white/50 focus:border-primary/50 focus:ring-0 transition-colors appearance-none">
                  <option>Proposal Management</option>
                  <option>Client Operations Lead</option>
                  <option>Process Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-text ml-1">Message</label>
                <textarea className="w-full bg-background-dark/50 border border-white/5 rounded-lg h-32 p-4 text-white focus:border-primary/50 focus:ring-0 transition-colors resize-none" placeholder="How can I enable your team?"></textarea>
              </div>
              <button className="w-full h-14 bg-primary text-background-dark font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/10">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
