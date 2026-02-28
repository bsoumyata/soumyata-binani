import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Code, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Activity, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Copy, 
  CheckCircle,
  TrendingUp,
  Server,
  Crosshair
} from 'lucide-react';

// --- DATA CONSTANTS ---

const TARGET_ROLE = "Associate Product Manager - Sell-Side";
const TARGET_COMPANY = "Talos";
const CANDIDATE_NAME = "Soumyata Binani";
const EMAIL = "sbinani2@illinois.edu";
const LINKEDIN_URL = "https://www.linkedin.com/in/soumyatabinani/";

const CHALLENGES = [
  {
    icon: <Server className="w-6 h-6 text-teal-400" />,
    title: "Institutional Onboarding Friction",
    description: "Standard API connections are fast, but custom institutional routing can take weeks to configure. Reducing this onboarding time is a major growth lever, requiring a careful balance between platform flexibility and standardization."
  },
  {
    icon: <Activity className="w-6 h-6 text-teal-400" />,
    title: "System Reliability vs. Scale",
    description: "Connecting to 80+ liquidity providers requires handling massive data throughput where minor errors disrupt live trading. The goal is building proactive monitoring to catch configuration issues before they cause client latency."
  },
  {
    icon: <Layers className="w-6 h-6 text-teal-400" />,
    title: "Aligning Teams for Rollouts",
    description: "Shipping enterprise integrations means coordinating engineering, legal, and client solutions. The challenge is keeping all stakeholders aligned on release requirements without slowing down the development cycle."
  }
];

const ROADMAP_PHASES = [
  {
    id: 1,
    title: "Deep Dive & User Audit",
    timeline: "Weeks 1-3",
    color: "bg-green-500",
    description: "Audit existing API configurations and shadow the onboarding team to map exactly where institutional clients experience friction during setup.",
    deliverable: "Onboarding Friction Matrix",
    trackRecord: "Analyzed 150+ user survey insights at Riverside to identify priority workflows.",
    margin: "ml-[0%]",
    width: "w-[30%]"
  },
  {
    id: 2,
    title: "Strategy & PRDs",
    timeline: "Weeks 3-6",
    color: "bg-purple-500",
    description: "Partner with engineering and leadership to translate complex client needs into clear, technical PRDs for upcoming platform integrations.",
    deliverable: "Prioritized Backlog & Technical PRDs",
    trackRecord: "Translated 30+ client interviews into a prioritized roadmap at BlackRock.",
    margin: "ml-[20%]",
    width: "w-[30%]"
  },
  {
    id: 3,
    title: "Sprint Execution",
    timeline: "Weeks 5-8",
    color: "bg-blue-500",
    description: "Support engineering sprints. Use tools like Postman to validate API responses and ensure new data flows behave exactly as intended.",
    deliverable: "QA Validation & API Test Scripts",
    trackRecord: "Validated internal REST APIs at BlackRock, reducing data integrity incidents by 40%.",
    margin: "ml-[40%]",
    width: "w-[30%]"
  },
  {
    id: 4,
    title: "Launch Readiness",
    timeline: "Weeks 7-10",
    color: "bg-teal-500",
    description: "Ensure smooth rollouts by preparing clear release notes, updating sandbox documentation, and structuring handovers for the support team.",
    deliverable: "Release Notes & Structured Handover",
    trackRecord: "Led migration of 200+ configs across an ETL pipeline, improving performance by 18%.",
    margin: "ml-[60%]",
    width: "w-[30%]"
  },
  {
    id: 5,
    title: "Measure & Iterate",
    timeline: "Weeks 10-12",
    color: "bg-orange-500",
    description: "Track post-launch usage and support tickets to measure actual impact, then iterate based on client feedback and system performance.",
    deliverable: "Product Usage Dashboard",
    trackRecord: "Owned observability tool lifecycle, reducing support tickets by 30% and boosting CSAT.",
    margin: "ml-[70%]",
    width: "w-[30%]"
  }
];

// --- COMPONENTS ---

const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error("Copy failed", e);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
        <p className="text-slate-400 text-sm mb-6">
          I'd love to discuss how my experience with FinTech API migrations and product delivery aligns with the Sell-Side roadmap at Talos.
        </p>
        
        <div className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-lg p-3 mb-4">
          <span className="text-slate-200 font-mono text-sm">{EMAIL}</span>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 px-3 py-1.5 rounded-md transition-colors text-sm font-medium"
          >
            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <a 
          href={LINKEDIN_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#0A66C2] hover:bg-[#004182] text-white py-3 rounded-lg transition-colors font-medium"
        >
          <Linkedin className="w-5 h-5" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

const MathModel = () => {
  const [onboardings, setOnboardings] = useState(50); 
  const [ticketsPerOnboarding, setTicketsPerOnboarding] = useState(4); 
  const [hoursPerTicket, setHoursPerTicket] = useState(2.0); 
  
  // Calculate Annual Engineering/Support Hours Reclaimed
  const totalTickets = onboardings * ticketsPerOnboarding;
  const annualHoursReclaimed = totalTickets * hoursPerTicket;

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold mb-6 border border-teal-500/20 w-max">
            <Zap className="w-4 h-4" /> Tactical Feature Hypothesis
          </div>
          <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Self-Serve Sandbox Config Validator</h3>
          <p className="text-slate-400 mb-8 leading-relaxed text-lg">
            As an APM, my focus is on removing execution bottlenecks. Research shows bespoke institutional workflows can stretch onboarding to 2+ weeks. My hypothesis is that a significant chunk of this time is spent manually debugging JSON/YAML syntax and logic errors back-and-forth between clients and internal engineering. Building a self-serve validator in the sandbox would catch these errors instantly, letting institutions self-correct and unblocking our engineering team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700/80 shadow-sm">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm mb-3">
                <CheckCircle className="w-4 h-4" /> Key Assumption
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                A high volume of onboarding delays stem from basic configuration and syntax errors rather than complex routing edge-cases.
              </p>
            </div>
            
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700/80 shadow-sm">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-3">
                <Layers className="w-4 h-4" /> Primary Trade-off
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Diverting engineering time from core trading features. I would first audit the last 50 support tickets to validate the exact hours lost.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 font-mono text-sm text-slate-300 mt-auto">
            <div className="text-slate-500 mb-3">// The Impact Formula</div>
            <div className="flex flex-wrap gap-2 text-teal-300 items-center">
              <span>(Onboardings</span>
              <span className="text-slate-500">×</span>
              <span>Tickets / Setup</span>
              <span className="text-slate-500">×</span>
              <span>Hours / Ticket)</span>
              <span className="text-slate-500">=</span>
              <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded">Annual Hours Reclaimed</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-8">
          {/* Sliders Control Panel */}
          <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8 flex-grow">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-8">Adjust Impact Variables</h4>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-slate-300 font-medium">Annual Custom Onboardings</span>
                  <span className="text-teal-400 font-bold text-base bg-teal-500/10 px-2 rounded">{onboardings}</span>
                </div>
                <input 
                  type="range" min="10" max="150" step="5"
                  value={onboardings} onChange={(e) => setOnboardings(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-slate-300 font-medium">Config Tickets per Onboarding</span>
                  <span className="text-teal-400 font-bold text-base bg-teal-500/10 px-2 rounded">{ticketsPerOnboarding}</span>
                </div>
                <input 
                  type="range" min="1" max="10" step="1"
                  value={ticketsPerOnboarding} onChange={(e) => setTicketsPerOnboarding(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-slate-300 font-medium">Eng/Support Hours per Ticket</span>
                  <span className="text-teal-400 font-bold text-base bg-teal-500/10 px-2 rounded">{hoursPerTicket.toFixed(1)} hrs</span>
                </div>
                <input 
                  type="range" min="0.5" max="5.0" step="0.5"
                  value={hoursPerTicket} onChange={(e) => setHoursPerTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-gradient-to-br from-teal-900/50 to-slate-900 border border-teal-500/40 rounded-2xl p-8 text-center shadow-lg">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Projected Engineering Impact</div>
            <div className="text-5xl font-extrabold text-white tracking-tight mb-3">
              {annualHoursReclaimed} <span className="text-2xl text-slate-400 font-medium tracking-normal">Hours</span>
            </div>
            <div className="text-teal-400 text-sm flex items-center justify-center gap-2 font-medium">
              <TrendingUp className="w-5 h-5" /> 
              Reclaimed annually for core platform development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APPLICATION ---

export default function ForTalos() {
  const [activePhase, setActivePhase] = useState(ROADMAP_PHASES[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-40">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="text-white">{CANDIDATE_NAME}</span>
            <span className="text-slate-600">/</span>
            <span className="text-teal-400">{TARGET_COMPANY}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('challenges')} className="hover:text-white transition-colors">The Challenge</button>
            <button onClick={() => scrollToSection('strategy')} className="hover:text-white transition-colors">Product Strategy</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-white transition-colors">90-Day Plan</button>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-slate-950 px-4 py-2 rounded-md text-sm font-bold hover:bg-slate-200 transition-colors"
          >
            Contact Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Hi, I am Soumyata.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl">
            I'm an ex-BlackRock B2B FinTech Product Manager specializing in API migrations and data platforms. I built this page to share my outside-in perspective on Talos. From scaling traditional finance integrations to optimizing custom workflows, here is my playbook for adding value as your next <span className="text-teal-400 font-semibold">{TARGET_ROLE}</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <div className="text-teal-400 mb-2"><BarChart className="w-6 h-6" /></div>
              <div className="text-2xl font-bold text-white mb-1">18% Faster</div>
              <div className="text-sm text-slate-500">System performance via JSON configuration migration.</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <div className="text-purple-400 mb-2"><TrendingUp className="w-6 h-6" /></div>
              <div className="text-2xl font-bold text-white mb-1">35% QoQ</div>
              <div className="text-sm text-slate-500">Platform adoption growth for enterprise accounts.</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <div className="text-blue-400 mb-2"><ShieldCheck className="w-6 h-6" /></div>
              <div className="text-2xl font-bold text-white mb-1">$7M ARR</div>
              <div className="text-sm text-slate-500">Expansion driven by successful beta feature launches.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-20 px-4 md:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Understanding the Space</h2>
            <p className="text-slate-400">
              Based on my research into the Talos platform and the broader institutional crypto market, here are three friction points I identified and how I view them from a product management perspective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHALLENGES.map((challenge, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-teal-500/50 transition-colors group">
                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Product Thinking in Practice</h2>
          <p className="text-slate-400">
            To show how I approach problem-solving as an APM, here is an interactive model breaking down how a specific operational improvement translates into measurable engineering impact.
          </p>
        </div>
        
        <MathModel />
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 px-4 md:px-8 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How I Approach the First 90 Days</h2>
            <p className="text-slate-400 max-w-2xl">
              This timeline outlines my process for getting up to speed, aligning with engineering, and driving a feature from discovery to post-launch evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Interactive Gantt Chart */}
            <div className="lg:col-span-3 bg-slate-900 border border-slate-700 rounded-2xl p-6 overflow-x-auto">
              <div className="min-w-[500px]">
                {/* Headers */}
                <div className="flex text-xs font-bold text-slate-500 uppercase tracking-wider mb-6 border-b border-slate-800 pb-2">
                  <div className="flex-1">Month 1</div>
                  <div className="flex-1 text-center">Month 2</div>
                  <div className="flex-1 text-right">Month 3</div>
                </div>

                {/* Bars */}
                <div className="space-y-4 relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex justify-between pointer-events-none">
                    <div className="w-px h-full bg-slate-800/50"></div>
                    <div className="w-px h-full bg-slate-800/50"></div>
                    <div className="w-px h-full bg-slate-800/50"></div>
                    <div className="w-px h-full bg-slate-800/50"></div>
                  </div>

                  {ROADMAP_PHASES.map((phase) => (
                    <div 
                      key={phase.id}
                      onMouseEnter={() => setActivePhase(phase)}
                      className={`relative z-10 h-10 rounded-md cursor-pointer transition-all duration-300 flex items-center px-4 shadow-sm text-sm font-semibold
                        ${phase.width} ${phase.margin} 
                        ${activePhase.id === phase.id ? `${phase.color} text-white scale-[1.02] shadow-lg shadow-${phase.color.split('-')[1]}-500/20` : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}
                      `}
                    >
                      <span className="truncate">{phase.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detail Card */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 sticky top-24 min-h-[350px] flex flex-col justify-between transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${activePhase.color}`}></div>
                    <h3 className="text-xl font-bold text-white">{activePhase.title}</h3>
                  </div>
                  <div className="text-teal-400 text-sm font-medium mb-4">{activePhase.timeline}</div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {activePhase.description}
                  </p>
                  
                  <div className="bg-slate-900 rounded-lg p-4 mb-6 border border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Key Deliverable</div>
                    <div className="text-white font-medium flex items-center gap-2">
                      <Code className="w-4 h-4 text-teal-400" /> {activePhase.deliverable}
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Why I'm Prepared</div>
                  <div className="text-sm text-slate-400 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                    <span>{activePhase.trackRecord}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-20 px-4 text-center border-t border-slate-800 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-6">Let's talk product.</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I appreciate the work Talos is doing to build reliable infrastructure for this market. I'd love the opportunity to discuss my background and how I might contribute to the Sell-Side team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-lg font-bold hover:bg-teal-50 hover:text-teal-900 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" /> Let's Talk
            </button>
            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn Profile
            </a>
          </div>
          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} {CANDIDATE_NAME}. Designed specifically for the {TARGET_COMPANY} team.
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}