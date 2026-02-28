import React, { useState, useRef, useEffect } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Target, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Layers,
  CheckCircle2,
  Mail,
  Linkedin,
  Copy,
  X,
  CreditCard,
  LineChart
} from 'lucide-react';

// --- COMPONENTS ---

const MathModel = () => {
  const [users, setUsers] = useState(50000);
  const [retentionLift, setRetentionLift] = useState(5);
  const [ltv, setLtv] = useState(150);

  const additionalRevenue = Math.round(users * (retentionLift / 100) * ltv);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
        <div className="lg:col-span-3 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="text-emerald-400 w-5 h-5" />
              The "Gig-Boost" Payroll Strategy
            </h3>
            <p className="text-slate-400 text-sm">
              My research suggests over 30% of target users are gig workers. By integrating direct payroll APIs (like Gusto or Stripe) into TomoIQ, we can verify irregular income in real-time. This allows us to safely offer higher limits and subscription upgrades, reducing churn and driving LTV.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">Gig Worker Cohort</span>
                <span className="text-emerald-400 font-mono">{users.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10000" max="250000" step="5000" 
                value={users} onChange={(e) => setUsers(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">Retention Lift (%)</span>
                <span className="text-emerald-400 font-mono">+{retentionLift}%</span>
              </div>
              <input 
                type="range" 
                min="1" max="15" step="0.5" 
                value={retentionLift} onChange={(e) => setRetentionLift(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">Avg. Lifetime Value ($)</span>
                <span className="text-emerald-400 font-mono">${ltv}</span>
              </div>
              <input 
                type="range" 
                min="50" max="500" step="10" 
                value={ltv} onChange={(e) => setLtv(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center">
            <p className="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2">Projected Annual Impact</p>
            <p className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              ${additionalRevenue.toLocaleString()}
            </p>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 inline-block">
              <code className="text-xs text-emerald-400/80 font-mono">
                Formula: Users × (Lift / 100) × LTV
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const phases = [
    {
      id: 1,
      title: "Deep Dive & User Audit",
      timeline: "Days 1-15",
      color: "from-emerald-400 to-emerald-600",
      description: "Immerse in TomoIQ and the Cash Score underwriting model. Audit the current onboarding and subscription flows to identify friction points and compliance gaps.",
      deliverable: "Comprehensive User Journey Map & Friction Audit",
      proof: "BlackRock: Translated 30+ client interviews and usage analytics into a prioritized roadmap, driving 35% QoQ platform adoption."
    },
    {
      id: 2,
      title: "Strategy & PRDs",
      timeline: "Days 16-30",
      color: "from-indigo-400 to-indigo-600",
      description: "Define product requirements for the highest-impact feature (e.g., payroll API integration or referral loops). Align engineering, design, and compliance teams.",
      deliverable: "Approved PRD with defined success metrics (KPIs)",
      proof: "BlackRock: Defined requirements and success metrics for a portfolio risk exposure feature, resulting in $7M ARR expansion."
    },
    {
      id: 3,
      title: "MVP Sprint Execution",
      timeline: "Days 31-60",
      color: "from-blue-400 to-blue-600",
      description: "Work closely with engineering and design to execute the sprint. Focus on unblocking the team, refining tickets, and ensuring technical feasibility.",
      deliverable: "Shipped MVP ready for internal testing",
      proof: "BlackRock: Led Agile cross-functional collaboration across India and US Engineering, Design, and QA to deliver 8 client-facing releases."
    },
    {
      id: 4,
      title: "Beta Launch & Analytics",
      timeline: "Days 61-75",
      color: "from-teal-400 to-teal-600",
      description: "Roll out the feature to a closed beta cohort. Monitor key metrics (Mixpanel/Google Analytics) and technical performance to catch edge cases.",
      deliverable: "Beta Launch & Iteration Backlog",
      proof: "BlackRock: Launched via a 500+ user beta cohort. Owned strategy of observability tool, improving CSAT from 6.1 to 8.5."
    },
    {
      id: 5,
      title: "Scale & Optimize",
      timeline: "Days 76-90",
      color: "from-orange-400 to-orange-600",
      description: "Full general availability launch. Analyze initial usage data, champion the voice of the customer, and refine the next sprint backlog based on real-world feedback.",
      deliverable: "GA Launch & Q2 Roadmap Proposal",
      proof: "Riverside: Scaled company-wide adoption by segmenting employees into 3 skill tiers, designing a phased 12-month roadmap."
    }
  ];

  const [activePhase, setActivePhase] = useState(phases[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Gantt Chart */}
      <div className="lg:col-span-7 space-y-4 relative">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-slate-800 border-r border-dashed border-slate-700 hidden sm:block"></div>
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-slate-800 border-r border-dashed border-slate-700 hidden sm:block"></div>
        <div className="absolute top-0 bottom-0 left-[80%] w-px bg-slate-800 border-r border-dashed border-slate-700 hidden sm:block"></div>
        
        <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-widest pb-4 mb-2 border-b border-slate-800 hidden sm:flex">
          <span>Start</span>
          <span>Month 1</span>
          <span>Month 2</span>
          <span>Month 3</span>
        </div>

        {phases.map((phase, index) => (
          <div 
            key={phase.id}
            onMouseEnter={() => setActivePhase(phase)}
            className={`relative group cursor-pointer transition-all duration-300 ease-out`}
            style={{ 
              marginLeft: `${index * 12}%`,
              width: `${100 - (index * 12)}%`
            }}
          >
            <div className={`h-14 rounded-lg flex items-center px-4 shadow-lg transition-all duration-300 border border-transparent 
              ${activePhase.id === phase.id ? 'bg-gradient-to-r shadow-emerald-900/20 border-white/10 scale-[1.02]' : 'bg-slate-900 hover:bg-slate-800'} 
              ${activePhase.id === phase.id ? phase.color : ''}
            `}>
              <span className={`font-semibold text-sm ${activePhase.id === phase.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                {phase.title}
              </span>
              <span className={`ml-auto text-xs ${activePhase.id === phase.id ? 'text-white/80' : 'text-slate-500'}`}>
                {phase.timeline}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Detail Card */}
      <div className="lg:col-span-5">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full transition-all duration-300 sticky top-24">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${activePhase.color} text-white`}>
            {activePhase.timeline}
          </div>
          <h4 className="text-2xl font-bold text-white mb-3">{activePhase.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {activePhase.description}
          </p>
          
          <div className="bg-slate-950/50 rounded-xl p-4 mb-6 border border-slate-800/50">
            <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Key Deliverable</span>
            <div className="flex items-start gap-2 text-emerald-400">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="font-medium text-sm">{activePhase.deliverable}</span>
            </div>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" /> Proven Track Record
            </span>
            <p className="text-sm text-slate-300 border-l-2 border-emerald-500/50 pl-3 italic">
              "{activePhase.proof}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactModal = ({ isOpen, onClose, email }) => {
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const linkedinUrl = "https://www.linkedin.com/in/soumyatabinani/";

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    if (copiedLink) {
      const timer = setTimeout(() => setCopiedLink(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedLink]);

  const handleCopy = () => {
    // Fallback for document.execCommand in restricted iframes
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
    
    textArea.remove();
  };

  const handleCopyLink = () => {
    const textArea = document.createElement("textarea");
    textArea.value = linkedinUrl;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      setCopiedLink(true);
    } catch (err) {
      console.error('Failed to copy link', err);
    }

    textArea.remove();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Let's build together</h3>
          <p className="text-slate-400 text-sm mb-6">
            I'm ready to bring my data-driven execution and startup hustle to the TomoCredit team. Copy my email below or tap the LinkedIn link to get in touch.
          </p>

          <div 
            onClick={handleCopy}
            className="flex items-center justify-between bg-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded-lg p-3 cursor-pointer transition-all group"
          >
            <span className="text-slate-300 font-mono text-sm">{email}</span>
            {copied ? (
              <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Copied
              </span>
            ) : (
              <Copy className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            )}
          </div>

          {/* LinkedIn contact row */}
          <div 
            onClick={handleCopyLink}
            className="mt-4 flex items-center justify-between bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-lg p-3 cursor-pointer transition-all group"
          >
            <span className="text-slate-300 font-mono text-sm">{linkedinUrl}</span>
            {copiedLink ? (
              <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Copied
              </span>
            ) : (
              <Copy className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            )}
          </div>
          {/* direct visit link */}
          <p className="mt-2 text-sm">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:underline"
            >
              <Linkedin className="w-4 h-4 mr-1" /> Visit my LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APPLICATION ---

export default function ForTomoCredit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <span className="text-slate-950 text-lg leading-none">S</span>
            </div>
            <span>Soumyata <span className="text-slate-500 font-normal">for TomoCredit</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('challenges')} className="hover:text-white transition-colors">The Challenge</button>
            <button onClick={() => scrollToSection('strategy')} className="hover:text-white transition-colors">Product Strategy</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-white transition-colors">90-Day Execution</button>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-slate-950 hover:bg-emerald-400 hover:text-slate-950 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Contact Me
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto space-y-32">
        
        {/* HERO SECTION */}
        <section className="pt-12 lg:pt-20 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Target className="w-3.5 h-3.5" /> Product Manager Candidate
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I am Soumyata. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Let's open access to banking.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I am a data-driven Product Manager with a technical background and 3+ years of experience scaling SaaS platforms. 
              Based on my research into TomoCredit's rapid growth and shift towards AI-native underwriting, I built this deck to show exactly how I can help scale products like TomoBoost and refine the Cash Score.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">35% QoQ Growth</div>
                  <div className="text-slate-500 text-xs">Platform Adoption</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">
                <Activity className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">$7M Expansion</div>
                  <div className="text-slate-500 text-xs">ARR Impact</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">
                <Zap className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">20+ Hrs/Wk</div>
                  <div className="text-slate-500 text-xs">AI Automation Savings</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract visual representing FinTech/Data */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="text-xs font-mono text-slate-500">Tomo_Product_Vision.exe</div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex text-slate-400"><span className="text-emerald-400 mr-2">➜</span> User Profile: <span className="text-white ml-2">Soumyata Binani</span></div>
                <div className="flex text-slate-400"><span className="text-emerald-400 mr-2">➜</span> Competencies: <span className="text-white ml-2">Agile, VoC, Analytics, API/Cloud</span></div>
                <div className="flex text-slate-400"><span className="text-emerald-400 mr-2">➜</span> Education: <span className="text-white ml-2">MS Tech Management (UIUC)</span></div>
                <div className="flex text-slate-400"><span className="text-emerald-400 mr-2">➜</span> System Status: <span className="text-emerald-400 ml-2 animate-pulse">Ready to execute</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: THE CHALLENGE */}
        <section id="challenges" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Understanding the TomoCredit Terrain</h2>
            <p className="text-slate-400">
              Disrupting the traditional credit system requires solving deep, systemic problems. From my analysis of the alternative credit space, here are the three core friction points we must navigate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Bureau & Trust Gap</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                With traditional credit bureaus resisting alternative data sharing, TomoCredit faces the challenge of making the proprietary "Cash Score" undeniably reliable. The product must build deep user trust through transparent, explainable AI alerts.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Gig-Economy Complexity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A massive portion of our target users are freelancers with irregular income. The AI underwriting model must accurately ingest this highly variable cash-flow data without penalizing gig workers, creating a frictionless path to higher credit limits.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sustainable LTV vs High CAC</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                In a saturated credit-builder market, acquisition is expensive. To maintain healthy margins, we must retain users long-term through TomoBoost, build referral virality, and ensure compliance with seamless, user-friendly subscription flows.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: PRODUCT STRATEGY */}
        <section id="strategy" className="space-y-10">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-end border-b border-slate-800 pb-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Strategic Proposal: Value Optimization</h2>
              <p className="text-slate-400">
                To address the LTV expansion and gig-economy challenges, I propose a product strategy that leverages API integrations to turn irregular income into a structural advantage.
              </p>
            </div>
          </div>
          
          <MathModel />
        </section>

        {/* SECTION 3: ROADMAP */}
        <section id="roadmap" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">My 90-Day Execution Plan</h2>
            <p className="text-slate-400">
              The JD highlights the need for someone who is a "self-starter with a high degree of rigor". Here is exactly how I plan to go from onboarding to measurable ROI in my first 3 months.
            </p>
          </div>

          <Roadmap />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/50 bg-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Soumyata Binani. Designed specifically for the TomoCredit team.
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/soumyatabinani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" /> Let's Talk
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        email="sbinani2@illinois.edu" 
      />

    </div>
  );
}