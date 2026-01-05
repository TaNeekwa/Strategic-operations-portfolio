
import React from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // In a real application, this would link to an actual PDF file.
    // For this demonstration, we'll open the print dialog which allows "Save as PDF".
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-background-dark/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-[900px] h-full flex flex-col bg-white text-black rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
        {/* Toolbar */}
        <div className="bg-[#2c2c2c] text-white px-6 py-3 flex justify-between items-center no-print">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white/70">description</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Resume_TaNeekwa_Donley.pdf</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-primary text-background-dark px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Download / Print
            </button>
            <button onClick={onClose} className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-8 md:p-12 print:p-0 print:bg-white">
          <div className="bg-white mx-auto shadow-xl print:shadow-none min-h-full p-12 max-w-[800px] font-serif text-[13px] leading-relaxed">
            
            {/* Header */}
            <header className="text-center space-y-2 mb-8 border-b border-gray-100 pb-6">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">TaNeekwa S. Donley</h1>
              <p className="text-gray-600">
                Durham, NC | P: (252) 441 - 0915 | <span className="text-blue-600 underline">taneekwa@outlook.com</span> | LinkedIn | Portfolio
              </p>
            </header>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-1 mb-4">Education</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold">BACHELOR OF BA</h3>
                    <p className="italic">Western Governors University, Wilson, NC</p>
                    <p className="text-gray-600 italic">Major: Business Administration | Minor: Data Analytics</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">Wilson, NC</p>
                    <p>Current – (Expected February 2026)</p>
                  </div>
                </div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold">ASSOCIATE OF BA (BA)</h3>
                    <p className="italic">Edgecombe Community College, Rocky Mount, NC</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">Rocky Mount, NC</p>
                    <p>Graduated</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-1 mb-4">Experience</h2>
              <div className="space-y-8">
                {/* FlexGen */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-[14px]">FlexGen, Hybrid | Durham, NC</h3>
                    <span className="font-bold">March 2025 – Present</span>
                  </div>
                  <p className="italic font-bold mb-2">Proposal Coordinator (Contract)</p>
                  <ul className="list-disc ml-4 space-y-1 text-gray-800">
                    <li>Own and coordinate the end-to-end proposal lifecycle for Energy Management System (EMS) and Full-Product offerings, supporting pricing validation, scope alignment, and timely delivery of client-ready proposals.</li>
                    <li>Act as a central liaison between Business Development, Tendering, Engineering, and Operations teams to ensure proposals are technically accurate, commercially sound, and operationally executable.</li>
                    <li>Contributed directly to proposal content development, reviewing and refining sections for clarity, accuracy, and alignment with customer requirements.</li>
                    <li>Reviewed and analyzed bid request documents (RFPs, RFQs, and RFIs), extracting critical information and sharing key insights with the proposal team to ensure alignment with client requirements.</li>
                    <li>Maintained high levels of integrity, accuracy, and accountability while managing sensitive operational and customer-facing data.</li>
                    <li>Utilized Excel (advanced), Salesforce, PowerPoint, and SharePoint to track requests, manage workflows, and support data-driven decision-making.</li>
                  </ul>
                  <div className="mt-3">
                    <p className="font-bold italic">Project Highlights</p>
                    <ul className="list-disc ml-4 mt-1 text-gray-800">
                      <li>Automated EMS proposal generation, building a system tool that transforms EMS Price Worksheet inputs into fully formatted, client-ready proposals within minutes, reducing proposal turnaround time by over 90%.</li>
                      <li>Built a customer-facing EMS pricing and proposal portal, allowing clients and internal teams to securely generate pricing and proposal outputs faster.</li>
                    </ul>
                  </div>
                </div>

                {/* Spectraforce */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-[14px]">Spectraforce, Hybrid | Raleigh, NC</h3>
                    <span className="font-bold">July 2024 – March 2025</span>
                  </div>
                  <p className="italic font-bold mb-2">Client Service Coordinator</p>
                  <ul className="list-disc ml-4 space-y-1 text-gray-800">
                    <li>Serve as the main point of contact for multiple high-profile client accounts, including Charles Schwab, Cigna, and Cencora, managing the entire candidate lifecycle.</li>
                    <li>Own end-to-end onboarding coordination, ensuring candidates complete background checks, I-9 verification, and compliance requirements within strict deadlines.</li>
                    <li>Work closely with hiring managers, recruiters, and onboarding teams to streamline workflows, improve documentation processes, and enhance communication.</li>
                    <li>Spearheaded process improvements, implementing tracking templates, standardized documentation, and structured reporting systems.</li>
                  </ul>
                </div>

                {/* Viventium */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-[14px]">Viventium | Remote</h3>
                    <span className="font-bold">August 2023 – February 2024</span>
                  </div>
                  <p className="italic font-bold mb-2">Sales Coordinator</p>
                  <ul className="list-disc ml-4 space-y-1 text-gray-800">
                    <li>Spearheaded seamless onboarding of new clients onto Viventium payroll platform, from contract signature, assuming the pivotal role as primary point of contact.</li>
                    <li>Leveraged proficiency with CRM and database systems (Salesforce/Asana) to manage documentation forms, contracts, and proposals.</li>
                    <li>Executed precise payroll extraction, securing critical documents, and successfully delivered product messages and educational materials.</li>
                    <li>Coordinated with sales representatives, providing regular updates on account status and addressed inquiries.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-1 mb-4">Skills</h2>
              <div className="space-y-3 text-gray-800">
                <p>
                  <span className="font-bold">Professional Skills:</span> Client & Stakeholder Communication | End-to-End Request & Deliverable Ownership | Proposal & Service Coordination | Resource Planning, Scheduling & Prioritization | Cross-Functional Collaboration | Customer Requirement & Scope Alignment | Operational Readiness | Conflict Resolution | Critical Thinking | Decision Support | Change Management | Escalation & Risk Management | Pricing & Commercial Coordination.
                </p>
                <p>
                  <span className="font-bold">Technical Skills:</span> Microsoft Excel (Advanced) | Outlook, Word, PowerPoint | CRM Systems (Salesforce or equivalent) | SharePoint & Document Management | Workflow & Process Tracking | Data Validation & Reporting | Automation | SOP | GitHub | Payroll Software | Client Portals & Proposal Tools | AI-Assisted Business Tools.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .fixed.inset-0.z-\\[100\\] * {
            visibility: visible;
          }
          .fixed.inset-0.z-\\[100\\] {
            position: absolute;
            left: 0;
            top: 0;
            padding: 0;
            margin: 0;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
