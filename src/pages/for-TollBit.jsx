import React, { useState } from 'react';
import { 
  Terminal, Activity, Database, Code, Zap, TrendingUp, 
  CheckCircle, Mail, Linkedin, Copy, X, ArrowRight, 
  ShieldCheck, Layers, GitMerge
} from 'lucide-react';

// --- COMPONENTS ---

const Nav = ({ onContactClick }) => (
  <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
          <Terminal size={18} className="text-white" />
        </div>
        <span className="font-semibold text-slate-100 tracking-tight">
          Soumyata <span className="text-slate-500">for TollBit</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#observations" className="hover:text-teal-400 transition-colors">Observations</a>
        <a href="#hypothesis" className="hover:text-teal-400 transition-colors">Strategic Hypothesis</a>
        <a href="#approach" className="hover:text-teal-400 transition-colors">My Approach</a>
      </div>
      <button 
        onClick={onContactClick}
        className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-900 rounded-md hover:bg-white transition-colors"
      >
        Contact Me
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <header className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight leading-tight">
      Hi, I'm Soumyata.
    </h1>
    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
      I'm a Product Manager who translates complex technical problems into intuitive user experiences. 
      I've been following TollBit's recent work, particularly the Akamai edge integration and Portfolio Analytics, and I am genuinely excited about how you are structuring the AI content ecosystem. <br/><br/>
      I built this page to share my outside perspective on product challenges in your space and demonstrate how I approach solving problems alongside an engineering team.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
        <div className="text-teal-400"><TrendingUp size={20}/></div>
        <div className="text-lg font-bold text-slate-100">Scaling Platforms</div>
        <div className="text-sm text-slate-400">Past experience driving 35% QoQ platform adoption across 2,000+ users at BlackRock.</div>
      </div>
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
        <div className="text-indigo-400"><Activity size={20}/></div>
        <div className="text-lg font-bold text-slate-100">Defining Features</div>
        <div className="text-sm text-slate-400">Partnered with engineering to define and launch features that unlocked new enterprise ARR.</div>
      </div>
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
        <div className="text-purple-400"><Zap size={20}/></div>
        <div className="text-lg font-bold text-slate-100">Process Automation</div>
        <div className="text-sm text-slate-400">Shipped internal AI workflows that significantly reduced manual operational hours.</div>
      </div>
    </div>
  </header>
);

const Challenges = () => {
  const points = [
    {
      icon: <Layers className="text-teal-400" size={24} />,
      title: "Balancing the Two-Sided Market",
      desc: "TollBit serves two distinct users. AI developers want fast, low-friction access to data, while publishers want control and fair compensation. The tradeoff here is friction vs. security: making the paywall too strict might drive AI devs to find workarounds, but making it too loose hurts publisher trust."
    },
    {
      icon: <Code className="text-indigo-400" size={24} />,
      title: "Developer Experience (DevEx)",
      desc: "For TollBit to become the standard infrastructure, the APIs and SDKs must be incredibly easy to use. If developers struggle to integrate the licensing system, adoption will stall. DevEx needs to be treated as a primary product feature, not just an afterthought."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={24} />,
      title: "Building Publisher Confidence",
      desc: "Moving beyond basic bot detection, publishers need actionable insights. Providing clear observability and compliance reporting helps enterprise media groups feel secure in opening their content portfolios to AI agents."
    }
  ];

  return (
    <section id="observations" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/50">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Observations on the Problem Space</h2>
      <p className="text-slate-400 max-w-2xl mb-12">
        From reading about TollBit's recent growth and the broader AI ecosystem, I've identified a few key areas where a Product Manager would likely need to focus their attention. These are my outside hypotheses.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {points.map((pt, i) => (
          <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6">
              {pt.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-200 mb-3">{pt.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{pt.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const MathModel = () => {
  const [agents, setAgents] = useState(500);
  const [reqPerMin, setReqPerMin] = useState(100);
  const [tollRate, setTollRate] = useState(0.05);
  
  const dailyRequests = agents * reqPerMin * 60 * 24; 
  const dailyRevenue = (dailyRequests * (tollRate / 100)); 
  const ecosystemValue = dailyRevenue * 30; 

  return (
    <section id="hypothesis" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/50">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Hypothesis: The Algorithmic Exchange</h2>
      <p className="text-slate-400 max-w-3xl mb-12">
        I know TollBit already provides granular pricing controls, allowing publishers to set custom rates by bot, page, or keyword. However, as the ecosystem scales, my hypothesis is that relying on manual rate-setting will eventually bottleneck growth. A potential 1→n direction is evolving this into a fully <strong>Algorithmic Pricing Engine</strong> (similar to an ad-exchange), where toll rates automatically optimize based on real-time API demand, content exclusivity, and developer budgets.
        <br/><br/>
        I built this conceptual model to explore how pricing elasticity and developer friction might interact in an automated marketplace.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">Active AI Agents Using the API</label>
              <span className="text-sm text-teal-400 font-mono">{agents.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="10" max="5000" step="10" 
              value={agents} onChange={(e) => setAgents(Number(e.target.value))}
              className="w-full accent-teal-500 bg-slate-800 rounded-lg appearance-none h-2 cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">Avg. Requests / Min / Agent</label>
              <span className="text-sm text-indigo-400 font-mono">{reqPerMin.toLocaleString()} req/m</span>
            </div>
            <input 
              type="range" min="1" max="1000" step="10" 
              value={reqPerMin} onChange={(e) => setReqPerMin(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 rounded-lg appearance-none h-2 cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">Toll Rate (Cents per Request)</label>
              <span className="text-sm text-purple-400 font-mono">¢{tollRate.toFixed(3)}</span>
            </div>
            <input 
              type="range" min="0.001" max="0.5" step="0.005" 
              value={tollRate} onChange={(e) => setTollRate(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 rounded-lg appearance-none h-2 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 bg-slate-950 rounded-xl p-6 border border-slate-800/50 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-indigo-500"></div>
            <h4 className="text-sm text-slate-400 font-medium mb-2">Simulated Monthly Ecosystem Volume</h4>
            <div className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">
              ${ecosystemValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
          </div>
          
          <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800">
            <h5 className="text-xs text-slate-300 uppercase tracking-wider mb-2 font-semibold">The Product Hypothesis</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              If we reduce integration friction (multiplying Active Agents) and implement algorithmic pricing (auto-optimizing the Toll Rate per use case), we can drive higher aggregate ecosystem value than a static or manually-managed approach. My core assumption here is that AI developers are highly sensitive to onboarding friction, and publishers ultimately care more about total aggregate revenue yield than managing absolute per-scrape rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const phases = [
    {
      id: 1,
      title: "Learning the Context",
      timeline: "Phase 1",
      color: "from-teal-500 to-emerald-400",
      desc: "My first priority would be to understand the existing architecture and talk to the people using it. I'd spend time diving into the current API usage, understanding the Akamai integration, and talking to publishers and developers to hear their pain points directly.",
      deliverable: "Documented observations and a clear understanding of current technical constraints.",
      proof: "At BlackRock, I started by translating 30+ client interviews into our baseline understanding of user needs."
    },
    {
      id: 2,
      title: "Defining the Problem",
      timeline: "Phase 2",
      color: "from-indigo-500 to-blue-400",
      desc: "Working closely with engineering and Priya, I'd help define the scope for our next major feature. We would look at the tradeoffs between building for speed versus long-term stability, ensuring we are solving the right problem for our users.",
      deliverable: "Clear product requirements, success metrics, and a shared understanding with the engineering team.",
      proof: "Partnered with technical teams to define portfolio risk features that expanded ARR."
    },
    {
      id: 3,
      title: "Execution & Unblocking",
      timeline: "Phase 3",
      color: "from-purple-500 to-indigo-400",
      desc: "This is where the day-to-day work happens. I view my role here as a facilitator, managing the backlog, testing endpoints, and making sure the engineering team has everything they need to ship quickly.",
      deliverable: "A functioning beta or MVP ready for initial testing.",
      proof: "Led Agile teams across different time zones to deliver multiple client-facing releases."
    },
    {
      id: 4,
      title: "Launch & Listen",
      timeline: "Phase 4",
      color: "from-orange-500 to-amber-400",
      desc: "Once we ship, the focus shifts to learning. I would closely monitor how users are interacting with the new feature, look out for any integration issues, and gather qualitative feedback to see where we need to adjust.",
      deliverable: "Post-launch metric review and initial user feedback synthesis.",
      proof: "Managed beta launches with 500+ users to refine features before full rollout."
    }
  ];

  const [activePhase, setActivePhase] = useState(phases[0]);

  return (
    <section id="approach" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/50">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">My Approach to Building</h2>
      <p className="text-slate-400 max-w-2xl mb-12">
        If I were to join the team, here is how I would structure my focus early on. The goal is to add value quickly while deeply respecting the technical work the team has already done.
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Timeline Chart */}
        <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between text-xs font-semibold text-slate-500 mb-4 px-2 uppercase tracking-wider">
            <span>Month 1</span>
            <span>Month 2</span>
            <span>Month 3</span>
          </div>
          <div className="relative border-l-2 border-slate-800 ml-2 space-y-6 py-4">
            {phases.map((phase, index) => (
              <div 
                key={phase.id}
                onMouseEnter={() => setActivePhase(phase)}
                className="relative cursor-pointer group"
              >
                {/* Connector Dot */}
                <div className={`absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 transition-colors duration-300 ${activePhase.id === phase.id ? 'border-white' : 'border-slate-600 group-hover:border-slate-400'}`}></div>
                
                {/* Gantt Bar Simulation */}
                <div className={`
                  h-12 rounded-lg ml-6 relative overflow-hidden transition-all duration-300
                  ${activePhase.id === phase.id ? 'ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-900 shadow-lg' : 'opacity-70 group-hover:opacity-100'}
                `}
                style={{
                  width: '55%', 
                  marginLeft: `calc(1.5rem + ${index * 10}%)` // Staggered effect
                }}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-20`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} w-1`}></div>
                  <div className="h-full px-4 flex flex-col justify-center">
                    <span className="text-sm font-semibold text-slate-200 truncate">{phase.title}</span>
                    <span className="text-xs text-slate-400">{phase.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Card */}
        <div className="flex-1">
          <div className="sticky top-24 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8 min-h-[350px] transition-all duration-300">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${activePhase.color} mb-6 shadow-lg`}>
              <GitMerge className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{activePhase.title}</h3>
            <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full mb-6">
              {activePhase.timeline}
            </span>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Focus</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {activePhase.desc}
                </p>
              </div>
              
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800/80">
                <h4 className="text-sm font-semibold text-teal-400 mb-1 flex items-center gap-2">
                  <CheckCircle size={16} /> Expected Outcome
                </h4>
                <p className="text-slate-200 text-sm">{activePhase.deliverable}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Database size={16} /> Past Context
                </h4>
                <p className="text-slate-400 text-sm italic">
                  "{activePhase.proof}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "sbinani2@illinois.edu";

  const handleCopy = () => {
    // iFrame-safe clipboard copy mechanism
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-2xl font-bold text-slate-100 mb-2">Let's connect.</h3>
        <p className="text-slate-400 mb-6 text-sm">
          I'd love to chat with Priya and the team about scaling TollBit's infrastructure.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-slate-950 border border-slate-800 rounded-lg group">
            <Mail className="text-slate-400 group-hover:text-teal-400 transition-colors" size={20} />
            <span className="flex-1 text-slate-200 font-mono text-sm">{email}</span>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded transition-colors"
            >
              {copied ? <CheckCircle size={14} className="text-teal-400" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/soumyatabinani/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="py-8 text-center border-t border-slate-800/50">
    <p className="text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} Soumyata Binani. <br className="md:hidden" />
      Designed specifically for the TollBit team.
    </p>
  </footer>
);

export default function ForTollBit() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500/30">
      <Nav onContactClick={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <Challenges />
        <MathModel />
        <Roadmap />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}