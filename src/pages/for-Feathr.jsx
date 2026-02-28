import React, { useState } from 'react';
import { 
  BarChart3, 
  Target, 
  Users, 
  Zap, 
  Clock, 
  ArrowRight, 
  Copy, 
  CheckCircle2, 
  Linkedin, 
  Mail,
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  PieChart,
  Layers,
  Heart,
  MousePointer2,
  Lightbulb,
  ShieldCheck,
  Search,
  Activity,
  MessageSquareQuote
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onContactClick }) => (
  <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00BFA5] rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="font-semibold text-slate-900 hidden sm:block">Soumyata for <span className="text-[#00BFA5]">Feathr</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#challenge" className="hover:text-[#00BFA5] transition-colors">The Challenge</a>
          <a href="#strategy" className="hover:text-[#00BFA5] transition-colors">Product Strategy</a>
          <a href="#roadmap" className="hover:text-[#00BFA5] transition-colors">Execution Plan</a>
        </div>
        <button 
          onClick={onContactClick}
          className="bg-[#11263c] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#00BFA5] transition-all shadow-md active:scale-95"
        >
          Contact Me
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6 border border-teal-100">
        Product Manager • Strategic Proposal
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
        Hi, I am <span className="text-[#00BFA5]">Soumyata!</span>
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed font-light">
        A Product Manager who believes that data tells the story and empathy builds the solution. I've scaled platforms for 2,000+ users at <strong>BlackRock</strong> and automated workflows to save hundreds of hours at <strong>Riverside</strong>. Now, I'm combining that SaaS rigor with my interest in the nonprofit sector to help Feathr scale its impact.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {[
          { label: "Acquisition & Retention", value: "$7M ARR", detail: "Driven through prioritized feature roadmaps" },
          { label: "Operational Efficiency", value: "20+ hrs", detail: "Saved per dept/week via AI automation" },
          { label: "Platform Adoption", value: "35% QoQ", detail: "Growth scaled for 2,000+ advisors" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 transition-all">
            <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold text-[#00BFA5] mb-2 uppercase tracking-tighter">{stat.label}</div>
            <div className="text-xs text-slate-500 font-medium">{stat.detail}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-16">
    <h2 className={`text-3xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <p className={`max-w-2xl mx-auto ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
  </div>
);

const ChallengeSection = () => {
  const challenges = [
    {
      title: "The Retention/Acquisition Gap",
      description: "Research shows 74% of nonprofits prioritize new donors, yet only 44% focus on retention. There is a massive opportunity to build tools that help nonprofits keep the donors they already have.",
      icon: PieChart,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "The AI Accessibility Hurdle",
      description: "With only ~30% of nonprofits using AI, the barrier isn't interest, it's ease of use. Nonprofit teams are spread thin and need 'one-click' AI tools that don't require technical expertise.",
      icon: BrainCircuit,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Unified Attribution Friction",
      description: "Proving ROI is difficult when marketing spend and donation data live in different tools. Connecting these touchpoints is key to proving the value of every dollar spent on the Feathr platform.",
      icon: Target,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <section id="challenge" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="The Opportunity for Feathr" 
          subtitle="Based on my research into the current landscape, these are the core areas where Feathr can deepen its moat and increase customer value."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((c, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <c.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{c.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-[#00BFA5]" size={20} fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00BFA5]">Domain Curiosity</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Learning the "Why" Behind the Data</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To better understand the challenges nonprofit admins face, I currently volunteer as a support PM for <strong>Saayam for All</strong>. Observing the daily friction of managing a donation page has been eye-opening. It reinforces my belief that Feathr's mission to "help the helpers" is not just about tools, it's about giving time back to the people doing the good work.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-3">
            <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/10 text-xs font-medium">
              Daily User Friction Observation
            </div>
            <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/10 text-xs font-medium">
              Donation Funnel Empathy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MathModel = () => {
  const [retention, setRetention] = useState(5); 
  const [automation, setAutomation] = useState(30); 
  const [accuracy, setAccuracy] = useState(85); 

  const impactValue = (retention * (automation / 10) * (accuracy / 100) * 12).toFixed(0);

  return (
    <section id="strategy" className="py-20 bg-[#11263c] text-white rounded-[3rem] mx-4 my-10 overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFA5] blur-[120px] opacity-20 -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#00BFA5] text-[10px] font-bold uppercase mb-4 border border-white/10">
              Strategy: The "Loyalty Bridge"
            </div>
            <h2 className="text-3xl font-bold mb-6 leading-tight">Closing the Retention Gap</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Building on Feathr's recent success, I propose a <strong>Retention Automation Engine</strong>. This isn't just about emails; it's about a 3-pillar system that turns one-time donors into long-term partners.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { 
                  title: "Predictive Churn Scoring", 
                  desc: "Analyze donor behavior (last gift date, email opens) to flag 'at-risk' donors before they lapse.",
                  icon: Activity 
                },
                { 
                  title: "Auto-Impact Playbooks", 
                  desc: "AI-generated impact stories triggered automatically when a donor reaches a milestone or is flagged at-risk.",
                  icon: MessageSquareQuote 
                },
                { 
                  title: "Integrated Attribution", 
                  desc: "A single view that proves which ad campaign directly resulted in a recurring donation renewal.",
                  icon: ShieldCheck 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#00BFA5] border border-white/10 group-hover:bg-[#00BFA5] group-hover:text-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10">
              {[
                { label: "Target Retention Lift", val: retention, set: setRetention, min: 1, max: 20, unit: "%" },
                { label: "AI Automation Depth", val: automation, set: setAutomation, min: 10, max: 100, unit: "%" },
                { label: "Prediction Accuracy", val: accuracy, set: setAccuracy, min: 50, max: 100, unit: "%" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400 font-medium uppercase tracking-wider">{s.label}</span>
                    <span className="text-[#00BFA5] font-bold">{s.val}{s.unit}</span>
                  </div>
                  <input 
                    type="range" 
                    min={s.min} 
                    max={s.max} 
                    value={s.val} 
                    onChange={(e) => s.set(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#00BFA5]"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-inner">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <TrendingUp className="text-[#00BFA5]" size={16} />
              Strategic Growth Projection
            </h4>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-black text-[#11263c] tracking-tighter">+{impactValue}%</span>
              <span className="text-slate-400 font-bold text-lg">Impact Lift</span>
            </div>
            <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">
              This represents the compounding value of moving a nonprofit's focus from pure acquisition to a high-accuracy re-engagement strategy powered by AI.
            </p>
            
            <div className="space-y-3">
              {[
                { label: "Predictive Health", val: "High Visibility", icon: Activity, color: "text-blue-600 bg-blue-50" },
                { label: "Workflow Speed", val: "Instant", icon: Zap, color: "text-amber-600 bg-amber-50" },
                { label: "Attributed ROI", val: "Board-Ready", icon: BarChart3, color: "text-indigo-600 bg-indigo-50" }
              ].map((m, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${m.color}`}><m.icon size={16}/></div>
                    <span className="text-xs font-bold text-slate-700">{m.label}</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase ${m.color.split(' ')[0]}`}>{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const phases = [
    {
      id: 1,
      title: "Discovery & User Audit",
      subtitle: "The Foundation",
      color: "bg-emerald-500",
      description: "Deep dive into current user friction. I'll analyze adoption metrics and talk to the Customer Education team to understand where users struggle most with campaign setup.",
      deliverable: "User Journey Friction Map",
      trackRecord: "BlackRock: Translated 30+ client interviews into a prioritized product roadmap."
    },
    {
      id: 2,
      title: "Strategic Prioritization",
      subtitle: "Planning",
      color: "bg-indigo-500",
      description: "Defining success metrics for the AI Retention engine. Scoping requirements that solve the 'attribution gap' while keeping the technical overhead low for small teams.",
      deliverable: "Product Specs (PRDs)",
      trackRecord: "BlackRock: Defined requirements for portfolio tools leading to $7M ARR expansion."
    },
    {
      id: 3,
      title: "MVP Sprint Execution",
      subtitle: "Building",
      color: "bg-blue-500",
      description: "Partnering with design and engineering to build the core functionality. Focus on 'one-click' workflows for creative generation and automated exports.",
      deliverable: "Functional MVP for Beta",
      trackRecord: "Riverside: Shipped AI agents saving 20+ hrs/dept/week across 8 departments."
    },
    {
      id: 4,
      title: "Launch & Beta Cycle",
      subtitle: "Learning",
      color: "bg-teal-500",
      description: "Coordinating with a beta cohort to gather rapid feedback. Ensuring the Customer Education team has the details they need for documentation and training.",
      deliverable: "Internal & External Training Ecosystem",
      trackRecord: "BlackRock: Launched complex risk feature via a 500+ user beta cohort."
    },
    {
      id: 5,
      title: "Scale & Optimization",
      subtitle: "Scaling",
      color: "bg-orange-500",
      description: "Analyzing usage data to refine the UX and prep for the 2026 roadmap (SMS/Audio). Transitioning from 'new feature' to 'mission-critical tool.'",
      deliverable: "Adoption & Scale Report",
      trackRecord: "PrepBytes: Optimized content elements increasing search traffic by 12%."
    }
  ];

  const activePhase = hoveredPhase ? phases.find(p => p.id === hoveredPhase) : null;

  return (
    <section id="roadmap" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="90-Day Execution Plan" 
          subtitle="My approach to moving from Day 1 discovery to delivering measurable ROI for Feathr's customers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline Vis */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-[450px]">
            <div className="flex justify-between mb-8 border-b border-slate-100 pb-4">
              <div className="flex-1 text-center font-bold text-[10px] text-slate-400 tracking-widest uppercase">Month 1</div>
              <div className="flex-1 text-center font-bold text-[10px] text-slate-400 tracking-widest uppercase">Month 2</div>
              <div className="flex-1 text-center font-bold text-[10px] text-slate-400 tracking-widest uppercase">Month 3</div>
            </div>
            
            <div className="flex-1 flex flex-col justify-between relative py-2">
              <div className="absolute inset-0 flex justify-between px-[16.6%] pointer-events-none">
                <div className="h-full border-l border-dashed border-slate-100"></div>
                <div className="h-full border-l border-dashed border-slate-100"></div>
              </div>

              {phases.map((p, idx) => (
                <div 
                  key={p.id}
                  onMouseEnter={() => setHoveredPhase(p.id)}
                  className="relative group cursor-pointer"
                >
                  <div 
                    className={`h-10 rounded-xl ${p.color} opacity-80 group-hover:opacity-100 transition-all shadow-sm flex items-center px-4 text-white text-[10px] font-bold uppercase tracking-wider overflow-hidden`}
                    style={{
                      width: '45%',
                      marginLeft: `${idx * 12}%`
                    }}
                  >
                    Phase {p.id}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-slate-400 text-center font-bold italic tracking-tighter">
              &lt; HOVER OVER EACH PHASE TO SEE HOW I WORK &gt;
            </p>
          </div>

          {/* Detail Card */}
          <div className="bg-[#11263c] rounded-3xl p-10 text-white relative min-h-[450px] flex flex-col justify-center overflow-hidden shadow-2xl">
            {activePhase ? (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-400">
                <div className={`inline-block px-3 py-1 rounded-full ${activePhase.color} text-white text-[10px] font-black mb-6 uppercase tracking-widest shadow-lg shadow-black/20`}>
                  {activePhase.subtitle}
                </div>
                <h3 className="text-2xl font-bold mb-4">{activePhase.title}</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed italic">
                  "{activePhase.description}"
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Target Deliverable</p>
                      <p className="text-sm font-semibold">{activePhase.deliverable}</p>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-[#00BFA5]/20">
                    <p className="text-[10px] text-[#00BFA5] font-bold uppercase tracking-wider mb-2">Proven Track Record</p>
                    <p className="text-xs font-medium opacity-90 leading-relaxed text-slate-200">{activePhase.trackRecord}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center opacity-40 py-20">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} />
                </div>
                <p className="text-lg font-medium max-w-xs mx-auto">Explore my phased execution plan for the Feathr team</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose, email }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={onClose}></div>
      <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full relative z-10 shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Let's Connect</h3>
        <p className="text-slate-500 text-center text-sm mb-10 leading-relaxed">
          I'm ready to bring my PM experience and nonprofit research to the Feathr team.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 group">
            <Mail className="text-slate-400" size={20} />
            <span className="text-sm font-bold text-slate-700 flex-1 truncate">{email}</span>
            <button 
              onClick={copyToClipboard}
              className="p-2 hover:bg-white rounded-lg transition-all text-slate-400 hover:text-[#00BFA5] active:scale-90"
            >
              {copied ? <CheckCircle2 size={20} className="text-teal-600" /> : <Copy size={20} />}
            </button>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/soumyatabinani/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full p-4 bg-[#0a66c2] text-white rounded-2xl font-bold text-sm hover:bg-[#0077b5] transition-all shadow-lg active:scale-95"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
        </div>
        
        <button 
          onClick={onClose}
          className="mt-8 w-full text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function ForFeathr() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const candidateEmail = "sbinani2@illinois.edu";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      
      <main>
        <Hero />
        <ChallengeSection />
        <MathModel />
        <Roadmap />
      </main>

      <footer className="bg-white border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#11263c] mb-6 italic tracking-tight">"Help the Helpers."</h2>
          <p className="text-slate-500 max-w-md mx-auto mb-10 text-sm leading-relaxed">
            I am excited about the potential to build products that unlock more results and time for nonprofit teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#11263c] text-white px-10 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:bg-[#00BFA5] transition-all shadow-xl active:scale-95"
            >
              Get In Touch <ArrowRight size={18} />
            </button>
            <a 
              href="https://www.linkedin.com/in/soumyatabinani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 font-bold px-10 py-4 rounded-full border-2 border-slate-100 hover:bg-slate-50 transition-all text-sm active:scale-95"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-50 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Soumyata Binani. Prepared with research for Feathr.
          </div>
        </div>
      </footer>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        email={candidateEmail}
      />
    </div>
  );
}