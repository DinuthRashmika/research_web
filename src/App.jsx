import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Car,
  Activity,
  UserCheck,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
  AlertTriangle
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Research', href: '#research' },
    { name: 'System', href: '#about' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Documents', href: '#documents' },
    { name: 'Presentations', href: '#presentations' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-light text-dark font-sans selection:bg-primary selection:text-white">

      {/* Floating Navigation */}
      <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-6 transition-all duration-500">
        <nav className="mx-auto max-w-[1920px] w-full rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/10 py-3.5 px-6">
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-[0.6rem] bg-yellow-400/20 text-yellow-500 border border-yellow-400/30">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-[1.5rem] font-black tracking-tight text-white">
                Road<span className="text-yellow-500">Safety</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-bold text-gray-300 hover:text-yellow-400 transition-colors text-[14px]"
                >
                  {link.name}
                </a>
              ))}
              <a href="#about" className="ml-2 px-6 py-2.5 rounded-lg font-bold text-[14px] bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors shadow-sm">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-bold text-gray-300 hover:text-yellow-400 hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="images/hero_traffic_monitoring_1777864153216.png"
            alt="AI Traffic Monitoring"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_0%,transparent_60%)]"></div>
        </div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <div className="max-w-4xl mx-auto flex flex-col items-center">

            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-transform hover:scale-105 cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-white font-bold text-xs tracking-widest uppercase">
                AI-Driven Ecosystem
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
              Intelligent Road Safety <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary-dark drop-shadow-lg">
                Monitoring System
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl drop-shadow-md">
              Proactive transportation security framework integrating <strong className="text-white font-semibold">YOLOv11</strong>, <strong className="text-white font-semibold">EasyOCR</strong>, and hybrid <strong className="text-white font-semibold">CNN-LSTM</strong> architectures for holistic road monitoring.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
              <a href="#modules" className="px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 hover:to-yellow-400 text-dark font-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] flex items-center justify-center border border-yellow-300 group">
                Explore Modules
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] border border-white/20 hover:border-white/40">
                Read Research
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-2 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section - Bento Grid */}
      <section id="about" className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-[#111111] p-4 md:p-8 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl shadow-black border border-white/5">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

              {/* Left Column */}
              <div className="lg:w-2/5 bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#111111] rounded-[2rem] lg:rounded-[3rem] p-8 md:p-14 flex flex-col justify-between border border-yellow-500/20 shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/10 transition-colors duration-700"></div>
                <div className="relative z-10">
                  <h4 className="text-yellow-500 font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Why This Matters
                  </h4>
                  <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
                    Road safety needs <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">precision</span>,<br />not guesswork.
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-12 font-medium max-w-md">
                    The rapid urbanization of modern cities has ignited a complex crisis in public road safety. Manual monitoring is time-consuming, error-prone, and impractical.
                    <br /><br />
                    <strong className="text-gray-200 font-bold">RoadSafety</strong> reframes that process into a proactive, data-rich AI ecosystem that supports instant detection and more confident emergency responses.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex-1 shadow-lg shadow-black/50 hover:-translate-y-1 transition-transform duration-300 group/card">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 text-yellow-500 group-hover/card:scale-110 transition-transform">
                      <Activity className="w-4 h-4" />
                    </div>
                    <h5 className="text-yellow-500 font-bold text-sm mb-2">Instant Alerts</h5>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">Spot threats and collisions before they escalate into fatalities.</p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex-1 shadow-lg shadow-black/50 hover:-translate-y-1 transition-transform duration-300 group/card">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 text-yellow-500 group-hover/card:scale-110 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h5 className="text-yellow-500 font-bold text-sm mb-2">Smarter Dispatch</h5>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">Turn AI predictions into clear emergency routing decisions.</p>
                  </div>
                </div>
              </div>

              {/* Right Column - 2x2 Grid */}
              <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

                {/* Card 1 */}
                <div className="bg-[#18181b] rounded-[2rem] lg:rounded-[3rem] p-8 md:p-10 shadow-md shadow-black/40 border border-white/5 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 hover:border-yellow-500/30 transition-all duration-500 group flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-yellow-500 font-black text-2xl rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500">
                    V
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-yellow-500 transition-colors duration-300">Violence Detection</h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium">
                    CNN-LSTM action recognition and YOLOv11 pinpoint weapon presence and violent patterns before visible damage becomes costly.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#18181b] rounded-[2rem] lg:rounded-[3rem] p-8 md:p-10 shadow-md shadow-black/40 border border-white/5 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 hover:border-yellow-500/30 transition-all duration-500 group flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-yellow-500 font-black text-2xl rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500">
                    M
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-yellow-500 transition-colors duration-300">Vehicle Violations</h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium">
                    Helmetless riding, triple riding, and lane crossing signals are translated into practical proximity-based warnings.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#18181b] rounded-[2rem] lg:rounded-[3rem] p-8 md:p-10 shadow-md shadow-black/40 border border-white/5 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 hover:border-yellow-500/30 transition-all duration-500 group flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-yellow-500 font-black text-2xl rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500">
                    D
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-yellow-500 transition-colors duration-300">Driver Monitoring</h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium">
                    Real-time image analysis plus environmental context helps estimate driver drowsiness and distraction stages.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#18181b] rounded-[2rem] lg:rounded-[3rem] p-8 md:p-10 shadow-md shadow-black/40 border border-white/5 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 hover:border-yellow-500/30 transition-all duration-500 group flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-yellow-500 font-black text-2xl rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500">
                    A
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-yellow-500 transition-colors duration-300">Accident Triage</h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium">
                    Multi-criteria decision models analyze vulnerabilities and traffic density to estimate optimal routes without human intervention.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Scope Section */}
      <section id="research" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#111111] z-0"></div>
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 z-0"></div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">

          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 shadow-md shadow-black/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">Research Scope</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              A smarter, data-driven<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"> road safety</span> platform.
            </h2>
            <p className="text-gray-400 leading-relaxed text-xl font-medium max-w-2xl mx-auto">
              Our research presents a polished innovation product with deep AI integration, strong hierarchy, and actionable insights for evaluators, supervisors, and traffic authorities.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">

            <div className="group relative bg-[#18181b] rounded-[2.5rem] p-10 md:p-12 shadow-xl shadow-black/40 border border-white/5 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-[2.5rem] z-0 group-hover:from-yellow-500/20 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#27272a] flex items-center justify-center shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-black text-yellow-500">01</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-black text-white mb-5 group-hover:text-yellow-400 transition-colors duration-300">Literature Survey</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-base">
                  Previous road safety studies show strong promise in computer vision and IoT. Most solutions, however, remain fragmented and focus on only one traffic aspect rather than supporting holistic road monitoring.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#18181b] rounded-[2.5rem] p-10 md:p-12 shadow-xl shadow-black/40 border border-white/5 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-[2.5rem] z-0 group-hover:from-yellow-500/20 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#27272a] flex items-center justify-center shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-black text-yellow-500">02</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-black text-white mb-5 group-hover:text-yellow-400 transition-colors duration-300">Research Gap</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-base">
                  Existing systems often separate violence detection, vehicle violations, driver monitoring, and accident triage. Authorities need one connected workflow instead of several isolated prototypes.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#18181b] rounded-[2.5rem] p-10 md:p-12 shadow-xl shadow-black/40 border border-white/5 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-[2.5rem] z-0 group-hover:from-yellow-500/20 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#27272a] flex items-center justify-center shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-black text-yellow-500">03</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-black text-white mb-5 group-hover:text-yellow-400 transition-colors duration-300">Research Problem</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-base">
                  How can a practical AI- and IoT-driven system support early threat assessment, violation alerts, driver distraction prediction, and accident triage for public roads in one unified platform?
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-900 to-[#1a1200] rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-black/60 border border-white/5 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(251,191,36,0.15)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 z-0 group-hover:bg-primary/20 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-black text-dark">04</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-black text-white mb-5">Research Objectives</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-base">
                  Develop a complete monitoring platform with AI-based image analysis, sensor intelligence, explainable alerts, mobile visibility, and actionable decision support for traffic authorities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modules Section - Premium Redesign */}
      <section id="modules" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.05)_0%,transparent_60%)] z-0"></div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#18181b] border border-white/5 shadow-black/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-yellow-500 font-bold text-xs tracking-[0.2em] uppercase">Core Architecture</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Four Interconnected <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Modules</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">Each module is a precision AI engine, designed to communicate and escalate alerts across the unified ecosystem.</p>
          </div>

          <div className="space-y-32">

            {/* Module 1 — Violence Detection */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-red-500/10 via-orange-400/5 to-transparent rounded-[2.5rem] blur-xl group-hover:from-red-500/20 transition-all duration-700"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60 border border-white/5">
                  <img src="images/violence_cctv_detection.png" alt="Violence Detection CCTV" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span></span>
                        <span className="text-red-400 font-bold text-xs tracking-widest uppercase">Live Detection</span>
                      </div>
                      <span className="text-white font-black text-lg">CNN-LSTM + YOLOv11 Pipeline</span>
                    </div>
                    <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl px-3 py-1.5">
                      <span className="text-red-300 font-bold text-sm">THREAT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#18181b] border border-white/10 rounded-2xl flex items-center justify-center shadow-sm">
                    <ShieldAlert className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 tracking-widest uppercase">Module 01</p>
                    <h4 className="text-3xl font-black text-white leading-tight">Violence Detection</h4>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  A hybrid CNN-LSTM model fused with YOLOv11 for real-time violent action recognition and weapon identification. Generates severity-classified threat alerts with millisecond latency.
                </p>
                <div className="space-y-3">
                  {['Fighting, attacking & shooting detection', 'Knife, gun & stick weapon recognition', '91.1% mAP@50 detection accuracy'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#111111] rounded-xl px-4 py-3 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-gray-300 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module 2 — Vehicle Violations */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 space-y-7">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#18181b] border border-white/10 rounded-2xl flex items-center justify-center shadow-sm">
                    <Car className="w-7 h-7 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 tracking-widest uppercase">Module 02</p>
                    <h4 className="text-3xl font-black text-white leading-tight">Vehicle Violations & ANPR</h4>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  YOLOv11 paired with EasyOCR identifies helmetless riders, triple-loading, and lane infractions. Automatically captures and logs number plates of violating vehicles in real time.
                </p>
                <div className="space-y-3">
                  {['Helmet & triple-riding detection', 'Lane crossing & road marking violations', 'ANPR at 86.75% character accuracy'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#111111] rounded-xl px-4 py-3 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-gray-300 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-yellow-400/10 via-primary/5 to-transparent rounded-[2.5rem] blur-xl group-hover:from-yellow-400/20 transition-all duration-700"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60 border border-white/5">
                  <img src="images/vehicle_violation_detect_1777864171930.png" alt="Vehicle Violations" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span></span>
                        <span className="text-primary font-bold text-xs tracking-widest uppercase">Live Scan</span>
                      </div>
                      <span className="text-white font-black text-lg">YOLOv11 + EasyOCR Pipeline</span>
                    </div>
                    <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl px-3 py-1.5">
                      <span className="text-yellow-300 font-bold text-sm">VIOLATION</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 — Driver Monitoring */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-secondary/10 via-brown-400/5 to-transparent rounded-[2.5rem] blur-xl group-hover:from-secondary/20 transition-all duration-700"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60 border border-white/5">
                  <img src="images/driver_monitor_ai_1777864188937.png" alt="Driver Monitoring" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span></span>
                        <span className="text-orange-400 font-bold text-xs tracking-widest uppercase">DMS Active</span>
                      </div>
                      <span className="text-white font-black text-lg">YOLOv11 Driver Monitoring System</span>
                    </div>
                    <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl px-3 py-1.5">
                      <span className="text-orange-300 font-bold text-sm">DROWSY</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#18181b] border border-white/10 rounded-2xl flex items-center justify-center shadow-sm">
                    <UserCheck className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 tracking-widest uppercase">Module 03</p>
                    <h4 className="text-3xl font-black text-white leading-tight">Driver Monitoring System</h4>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  Single-camera mobile-based DMS autonomously detects drowsiness, distraction, and seatbelt violations in real time, issuing immediate in-vehicle alerts to prevent collisions.
                </p>
                <div className="space-y-3">
                  {['Drowsiness & yawning detection', 'Phone usage & distraction tracking', 'Seatbelt non-compliance alerts'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#111111] rounded-xl px-4 py-3 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                      <span className="text-gray-300 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module 4 — Accident Triage */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 space-y-7">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#18181b] border border-white/10 rounded-2xl flex items-center justify-center shadow-sm">
                    <Activity className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 tracking-widest uppercase">Module 04</p>
                    <h4 className="text-3xl font-black text-white leading-tight">Accident Triage Engine</h4>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  A 6-parameter multi-criteria decision algorithm calculates emergency priority in real time. Visual thermal fire override dispatches critical SOS alerts to the nearest medical facility.
                </p>
                <div className="space-y-3">
                  {['Vehicle vulnerability & location risk scoring', 'Time-of-day & holiday surge detection', 'Automated SOS routing to medical facilities'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#111111] rounded-xl px-4 py-3 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0"></div>
                      <span className="text-gray-300 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-gray-400/10 via-gray-300/5 to-transparent rounded-[2.5rem] blur-xl group-hover:from-gray-400/20 transition-all duration-700"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60 border border-white/5">
                  <img src="images/triage_dashboard_ui_1777864206660.png" alt="Triage Dashboard" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span></span>
                        <span className="text-green-400 font-bold text-xs tracking-widest uppercase">Dashboard Online</span>
                      </div>
                      <span className="text-white font-black text-lg">Coordination Hub Dashboard</span>
                    </div>
                    <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl px-3 py-1.5">
                      <span className="text-green-300 font-bold text-sm">SOS ROUTING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* System Journey & Methodology Section - Premium */}
      <section className="py-28 relative overflow-hidden bg-[#0a0a0a]">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[#111111] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-500/5 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">

          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#18181b] border border-white/5 shadow-black/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-yellow-500 font-bold text-xs tracking-[0.2em] uppercase">How It Works</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-5 tracking-tight">
              System Journey &<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Intelligence Architecture</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">
              From raw camera feed to life-saving dispatch — four precision steps, powered by four AI modules.
            </p>
          </div>

          {/* Top: Steps + Core Modules */}
          <div className="flex flex-col lg:flex-row gap-8 mb-10">

            {/* Left: Journey Steps — Dark premium panel */}
            <div className="lg:w-5/12 bg-gradient-to-br from-gray-900 to-[#1a1200] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-gray-900/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">System Journey</span>
                </div>
                <p className="text-gray-400 font-medium text-sm leading-relaxed mb-10 max-w-xs">
                  The workflow separates the four intelligence modules into clear, escalating blocks for maximum clarity.
                </p>

                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Detect', desc: 'Capture live video feeds from road cameras and mobile DMS devices in real time.' },
                    { num: '02', title: 'Analyze', desc: 'Run CNN-LSTM, YOLOv11, EasyOCR to interpret threats, violations, and driver states.' },
                    { num: '03', title: 'Decide', desc: 'Convert predictions into severity-classified alerts and triage priority scores.' },
                    { num: '04', title: 'Respond', desc: 'Dispatch emergency services via connected dashboard and reduce response time.' },
                  ].map((step, i, arr) => (
                    <div key={step.num} className="relative">
                      <div className="flex items-start gap-4 group cursor-default">
                        <div className="flex flex-col items-center">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-dark font-black text-sm">{step.num}</span>
                          </div>
                          {i < arr.length - 1 && <div className="w-px h-5 bg-gradient-to-b from-primary/40 to-transparent mt-1"></div>}
                        </div>
                        <div className="pt-1">
                          <h5 className="font-black text-white text-base mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h5>
                          <p className="text-gray-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Core Modules Panel */}
            <div className="lg:w-7/12 bg-[#18181b] rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-black/50 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-yellow-500/5 to-transparent rounded-[2.5rem]"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500 font-bold text-xs tracking-[0.2em] uppercase">Core Modules</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-10 leading-[1.1] tracking-tight">
                  Four integrated<br />intelligence layers
                </h3>

                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { num: '01', label: 'Violence Detection & Threat', desc: 'CNN-LSTM action recognition fused with YOLOv11 generates accurate, severity-classified weapon and violence alerts.' },
                    { num: '02', label: 'Vehicle Violations & ANPR', desc: 'YOLOv11 and EasyOCR detect helmetless riders, lane violations and capture number plates with 86.75% accuracy.' },
                    { num: '03', label: 'Driver Monitoring System', desc: 'Single-camera YOLOv11 DMS detects drowsiness, distraction and seatbelt non-compliance with in-vehicle alerts.' },
                    { num: '04', label: 'Accident Triage Engine', desc: 'A 6-parameter multi-criteria algorithm scores emergency priority and routes SOS alerts to the nearest facility.' },
                  ].map((mod) => (
                    <div key={mod.num} className="group cursor-default">
                      <p className="text-primary-dark font-black text-[10px] tracking-[0.2em] uppercase mb-2">Module {mod.num}</p>
                      <h4 className="font-black text-white text-xl mb-3 leading-snug group-hover:text-primary-dark transition-colors duration-300">{mod.label}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Methodology */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="lg:w-5/12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 min-h-[360px] relative group">
              <img
                src="images/hero_traffic_monitoring_1777864153216.png"
                alt="Road Safety Methodology"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-white font-black text-2xl leading-tight">AI-Powered<br />Road Safety</span>
              </div>
            </div>

            <div className="lg:w-7/12 bg-gradient-to-br from-gray-900 to-[#150f00] rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-gray-900/20 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                  Methodology<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">in one view</span>
                </h3>
                <p className="text-gray-400 font-medium text-lg leading-relaxed mb-10 max-w-xl">
                  Image intelligence, sensor data, backend services, and a mobile experience work together to generate explainable severity scores, live warnings, incident history, and support for real-time law enforcement decisions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'YOLOv11', color: 'bg-yellow-500' },
                    { name: 'CNN-LSTM', color: 'bg-blue-500' },
                    { name: 'EasyOCR', color: 'bg-green-500' },
                    { name: 'React Native', color: 'bg-cyan-500' },
                    { name: 'Python', color: 'bg-yellow-400' },
                    { name: 'FastAPI', color: 'bg-teal-500' },
                    { name: 'PyTorch', color: 'bg-orange-500' },
                    { name: 'OpenCV', color: 'bg-blue-400' },
                    { name: 'PostgreSQL', color: 'bg-indigo-500' },
                    { name: 'Computer Vision', color: 'bg-purple-500' },
                    { name: 'Deep Learning', color: 'bg-pink-500' },
                    { name: 'Edge AI', color: 'bg-primary' },
                  ].map((tech) => (
                    <span key={tech.name} className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 font-bold text-xs hover:bg-white/10 hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default backdrop-blur-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${tech.color} flex-shrink-0`}></span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Visual Story Section */}
      <section className="py-28 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0d0d0d] z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0"></div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 shadow-black/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-yellow-500 font-bold text-xs tracking-[0.2em] uppercase">Visual Story</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl">
              Real imagery that matches the<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> system's vision.</span>
            </h2>
          </div>

          {/* 3-Column Image Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1 */}
            <div className="group flex flex-col">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-black/50 mb-6 h-64 md:h-72">
                <img
                  src="images/road_safety_surveillance.png"
                  alt="Smart Road Surveillance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-white/90 backdrop-blur-sm border border-yellow-100 text-primary-dark font-black text-xs shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Module 01 · 02
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-[1.5rem] p-7 border border-gray-100 shadow-md shadow-gray-100/60 flex-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-yellow-100/40 transition-all duration-500">
                <h3 className="font-black text-white text-xl mb-3 group-hover:text-primary-dark transition-colors duration-300">Smart Road Surveillance</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  A fresher, data-driven visual direction — AI bounding boxes and live annotations make every camera feed a source of actionable intelligence for authorities.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-black/50 mb-6 h-64 md:h-72">
                <img
                  src="images/driver_alert_system.png"
                  alt="Driver Alertness Monitoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-white/90 backdrop-blur-sm border border-orange-100 text-orange-700 font-black text-xs shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Module 03 · DMS
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-[1.5rem] p-7 border border-gray-100 shadow-md shadow-gray-100/60 flex-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-yellow-100/40 transition-all duration-500">
                <h3 className="font-black text-white text-xl mb-3 group-hover:text-primary-dark transition-colors duration-300">Driver Alertness Detection</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Facial recognition and behavioural analysis run continuously on a single in-vehicle camera — catching drowsiness, distraction, and seatbelt violations before they turn fatal.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-black/50 mb-6 h-64 md:h-72">
                <img
                  src="images/emergency_dispatch_response.png"
                  alt="Emergency Response Coordination"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-white/90 backdrop-blur-sm border border-green-100 text-green-700 font-black text-xs shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Module 04 · Triage
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-[1.5rem] p-7 border border-gray-100 shadow-md shadow-gray-100/60 flex-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-yellow-100/40 transition-all duration-500">
                <h3 className="font-black text-white text-xl mb-3 group-hover:text-primary-dark transition-colors duration-300">Emergency Response Quality</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  A live coordination hub visualises accident severity, ambulance routing, and triage priority — enabling authorities to respond faster and save lives with data confidence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-32 bg-[#111111] relative overflow-hidden">
        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">

          <div className="mb-20 max-w-4xl">
            <h4 className="text-yellow-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">Milestones</h4>
            <h2 className="text-4xl md:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight mb-6">
              Academic progress mapped with<br className="hidden md:block" /> clarity.
            </h2>
            <p className="text-gray-400 text-[15px] font-medium tracking-wide">
              Each submission point is now presented in a cleaner, easier-to-scan timeline grid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { date: 'May 2026', weight: '6%', title: 'Project Proposal', desc: 'Initial proposal submission with problem definition, literature framing, and research plan.' },
              { date: 'July 2026', weight: '15%', title: 'Progress Presentation I', desc: 'Early prototype demonstration with dataset preparation and initial AI validation.' },
              { date: 'September 2026', weight: '18%', title: 'Progress Presentation II', desc: 'Integrated system walkthrough covering sensing, mobile workflows, and predictive models.' },
              { date: 'October 2026', weight: '10%', title: 'Research Paper', desc: 'Formal publication-ready documentation of methods, experiments, and contributions.' },
              { date: 'November 2026', weight: '19%', title: 'Final Report', desc: 'Complete report including methodology, implementation, evaluation, and findings.' },
              { date: 'November 2026', weight: '20%', title: 'Final Presentation & Viva', desc: 'Final defense with live demonstration, technical discussion, and outcome review.' }
            ].map((milestone, i) => (
              <div key={i} className="bg-[#18181b] rounded-[2rem] p-8 md:p-10 shadow-xl shadow-black/60 hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] hover:-translate-y-1 transition-all duration-500 border border-white/5 hover:border-yellow-500/30 flex flex-col justify-between min-h-[220px]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-yellow-500 font-bold text-xs">{milestone.date}</span>
                  <span className="bg-[#27272a] text-yellow-500 font-black text-[10px] tracking-widest py-1.5 px-3 rounded-full">{milestone.weight}</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-3 leading-snug">{milestone.title}</h3>
                  <p className="text-gray-400 text-[13px] leading-[1.8] font-medium">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-50/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <div className="mb-10 max-w-4xl">
            <h2 className="text-yellow-500 font-black text-sm tracking-[0.25em] uppercase mb-3">Documents</h2>
            <p className="text-gray-500 font-medium text-[15px]">Please find all documents related to this project below.</p>
          </div>

          {/* Main Card */}
          <div className="bg-[#18181b] rounded-[2rem] border border-white/5 shadow-xl shadow-black/50 p-8 md:p-12">

            {/* Card Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <h4 className="text-yellow-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-3">Document Center</h4>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">Project files, reports, and submissions</h3>
              </div>
              <div className="bg-[#27272a] border border-yellow-500/20 py-2.5 px-5 rounded-full flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="text-yellow-500 font-bold text-[11px]">Upload links can be added later</span>
              </div>
            </div>

            {/* List Header */}
            <div className="flex justify-between items-center text-gray-400 font-bold text-[10px] tracking-[0.2em] uppercase border-b border-white/10 pb-4 mb-4">
              <span>Document</span>
              <span>Status</span>
            </div>

            {/* Document List */}
            <div className="flex flex-col">
              {[
                { id: 'TA', name: 'Topic Assessment', status: 'ready', link: 'https://drive.google.com/file/d/14QdjbznMvG8HDZuEC37DZ4P4Y9nzE9RT/view?usp=drive_link' },
                { id: 'PD', name: 'Proposal Document', status: 'ready', link: 'https://drive.google.com/file/d/18RbDCM-NUIEBH9AhuVnuIrioFVWY5M65/view?usp=drive_link' },
                { id: 'CI', name: 'Checklist I', status: 'ready', link: 'https://drive.google.com/file/d/18RbDCM-NUIEBH9AhuVnuIrioFVWY5M65/view?usp=drive_link' },
                { id: 'C2', name: 'Checklist II', status: 'ready' },
                { id: 'C3', name: 'Checklist III', status: 'ready', link: 'https://drive.google.com/file/d/1wqjx0pYICJ_qs64bpCHhS4SYVsTWEtA-/view?usp=drive_link' },
                { id: 'RP', name: 'Research Paper', status: 'ready', link: 'https://drive.google.com/file/d/1wEARR69xSBnuwrgLl9AKQV6c5emEAWhH/view?usp=drive_link' },
                { id: 'FR', name: 'Final Report', status: 'pending' },
              ].map((doc, i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-white/5 last:border-0 hover:bg-[#111111] transition-colors group px-4 -mx-4 rounded-2xl cursor-default">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#27272a] flex items-center justify-center text-yellow-500 font-black text-xs border border-white/5 shadow-sm group-hover:scale-105 group-hover:shadow-yellow-500/20 transition-all duration-300">
                      {doc.id}
                    </div>
                    <span className="font-bold text-white text-[15px] group-hover:text-yellow-400 transition-colors">{doc.name}</span>
                  </div>
                  <div>
                    {doc.status === 'ready' ? (
                      <a href={doc.link || '#'} target={doc.link ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-2.5 bg-[#27272a] border border-white/10 py-2 px-5 rounded-full shadow-md hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group/btn">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/btn:animate-pulse"></span>
                        <span className="text-gray-300 font-bold text-[11px] group-hover/btn:text-white">View Document</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2.5 bg-yellow-500/10 border border-yellow-500/20 py-2 px-5 rounded-full cursor-not-allowed">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                        <span className="text-yellow-700 font-bold text-[11px]">Pending upload</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="py-28 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-50/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2"></div>
        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <div className="mb-10 max-w-4xl">
            <h2 className="text-yellow-500 font-black text-sm tracking-[0.25em] uppercase mb-3">Presentations</h2>
            <p className="text-gray-500 font-medium text-[15px]">Please find all presentations related to this project below.</p>
          </div>

          {/* Main Container Container */}
          <div className="bg-[#18181b] rounded-[2.5rem] border border-white/5 shadow-xl shadow-black/50 p-6 md:p-10">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { initials: 'PP', tag: 'GROUP', title: 'Project\nProposal', desc: 'Initial project pitch and problem framing presentation.', link: 'https://drive.google.com/file/d/1cWy_CuPRSssAaPXJI78NNjcY-fLwogXz/view?usp=drive_link' },
                { initials: 'PP', tag: 'GROUP', title: 'Progress\nPresentation I', desc: 'Early prototype walkthrough and validation progress update.', link: 'https://drive.google.com/file/d/1Bj0BUft-W84BXqKKm1vuy3fuVHF6L7g_/view?usp=drive_link' },
                { initials: 'PP', tag: 'GROUP', title: 'Progress\nPresentation II', desc: 'Integrated system presentation with refined model outcomes.', link: 'https://drive.google.com/file/d/1VdBmnP8aHEJUgq-jIgJHgjh2IgugjqKI/view?usp=drive_link' },
                { initials: 'FP', tag: 'GROUP', title: 'Final\nPresentation', desc: 'Final defense slides prepared for viva and demonstration.' },
              ].map((pres, i) => (
                <div key={i} className="bg-[#111111] rounded-[2rem] border border-white/5 p-8 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-500 flex flex-col group">

                  {/* Card Top */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-[1rem] bg-[#27272a] flex items-center justify-center text-yellow-500 font-black text-sm border border-white/5 shadow-md group-hover:scale-110 transition-transform duration-500">
                      {pres.initials}
                    </div>
                    <span className="bg-[#27272a] border border-white/5 text-yellow-500 font-bold text-[9px] tracking-[0.2em] uppercase py-1.5 px-3 rounded-full shadow-sm">
                      {pres.tag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 mb-8">
                    <h3 className="text-[22px] font-black text-white leading-[1.2] mb-4 whitespace-pre-line group-hover:text-yellow-400 transition-colors duration-300">
                      {pres.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-[1.8] font-medium">
                      {pres.desc}
                    </p>
                  </div>

                  {/* Card Bottom */}
                  <div className="border-t border-white/10 pt-6 mt-auto">
                    <a href={pres.link || '#'} target={pres.link ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-3 bg-[#27272a] border border-white/10 py-3 px-6 rounded-full w-fit shadow-md hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group/btn">
                      <span className="w-2 h-2 rounded-full bg-primary group-hover/btn:animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
                      <span className="text-gray-300 font-bold text-[12px] group-hover/btn:text-white">View Presentation</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Results & Metrics Section - Dark Cinematic */}
      <section id="results" className="py-28 bg-[#0d0d0d] text-white relative overflow-hidden">
        {/* Cinematic Lighting */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">

          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-24">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#1a1a1a] border border-yellow-500/20 shadow-[0_0_15px_rgba(251,191,36,0.1)] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
                <span className="text-yellow-500 font-bold text-[9px] tracking-[0.2em] uppercase">Performance Metrics</span>
              </div>
              <h2 className="text-5xl md:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight">
                Research Validation <span className="text-yellow-500">&</span><br />
                <span className="text-yellow-500">Accuracy</span>
              </h2>
            </div>
            <p className="text-[#888] font-medium text-[13px] leading-[1.8] max-w-sm md:text-right">
              Models trained and validated using high-performance NVIDIA T4 GPUs, achieving real-time inference speeds critical for live road surveillance and autonomous decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

            {/* Metric 1 - Yellow */}
            <div className="bg-[#141414] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-yellow-500/20 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                <TrendingUp className="w-56 h-56 text-yellow-500" />
              </div>
              <div className="w-11 h-11 rounded-[0.8rem] bg-[#1f1a0f] border border-yellow-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.1)] mb-12 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] transition-shadow duration-500">
                <TrendingUp className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="relative z-10 mt-auto">
                <div className="text-[4rem] leading-none font-black text-white tracking-tighter mb-3">0.911</div>
                <h4 className="text-[15px] font-bold text-white mb-2">Overall mAP@50</h4>
                <p className="text-[#666] text-[11px] leading-[1.6]">YOLOv8 class-wise detection performance for violence objects (Gun, Knife, Stick) across varied lighting conditions.</p>
              </div>
            </div>

            {/* Metric 2 - Blue */}
            <div className="bg-[#141414] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                <Car className="w-56 h-56 text-blue-500" />
              </div>
              <div className="w-11 h-11 rounded-[0.8rem] bg-[#0f172a] border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.1)] mb-12 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-shadow duration-500">
                <Car className="w-5 h-5 text-blue-500" />
              </div>
              <div className="relative z-10 mt-auto">
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[4rem] leading-none font-black text-white tracking-tighter">85.69</span>
                  <span className="text-2xl font-bold text-blue-500">%</span>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-2">Vehicle mAP</h4>
                <p className="text-[#666] text-[11px] leading-[1.6]">YOLOv11 average precision in identifying motorcycles, helmets, lane crossing and road markings.</p>
              </div>
            </div>

            {/* Metric 3 - Green */}
            <div className="bg-[#141414] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                <Clock className="w-56 h-56 text-emerald-500" />
              </div>
              <div className="w-11 h-11 rounded-[0.8rem] bg-[#064e3b]/30 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.1)] mb-12 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-shadow duration-500">
                <Clock className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="relative z-10 mt-auto">
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[4rem] leading-none font-black text-white tracking-tighter">86.75</span>
                  <span className="text-2xl font-bold text-emerald-500">%</span>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-2">ANPR Accuracy</h4>
                <p className="text-[#666] text-[11px] leading-[1.6]">EasyOCR Automatic Number Plate Recognition distinguishing alphanumeric characters in varying conditions.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section - Premium */}
      <section id="team" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-50/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 z-0"></div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20 text-center">

          <div className="mb-24">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#18181b] border border-white/5 shadow-black/50 mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Sri_Lanka_Institute_of_Information_Technology_logo.png/220px-Sri_Lanka_Institute_of_Information_Technology_logo.png" alt="SLIIT" className="h-4 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
              <span className="text-gray-400 font-bold text-xs tracking-[0.2em] uppercase">SLIIT Researchers</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              The Team Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">RoadSafety</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Welandagoda D R L', module: 'Driver Monitoring', image: 'images/team/welandagoda.png', email: 'dinuthwelandagoda@gmail.com' },
              { name: 'De Silva K W S C', module: 'Vehicle Violations', image: 'images/team/desilva.png', email: 'shenalchanuka3@gmail.com' },
              { name: 'Senavirathna K T M K', module: 'Accident Triage', image: 'images/team/senavirathna.png', email: 'kawishkasenavirathna2002@gmail.com' },
              { name: 'Ranasinghe D P S', module: 'Violence Detection', image: 'images/team/ranasinghe.png', email: 'sapunikasr@gmail.com' }
            ].map((member, idx) => (
              <a key={idx} href={`mailto:${member.email}`} className="group relative block">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-100 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative bg-[#18181b] p-8 rounded-[2rem] border border-white/5 shadow-xl shadow-black/50 group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">

                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 rounded-[1.5rem] bg-[#27272a] flex items-center justify-center mx-auto mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-white/5">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl font-black text-yellow-500 tracking-tighter">{member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
                  </div>

                  <h4 className="text-xl font-black text-white mb-1 leading-tight">{member.name}</h4>
                  <p className="text-yellow-500 font-bold text-[11px] mb-4 opacity-80">{member.email}</p>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-md bg-[#111111] border border-white/5 text-gray-400 font-bold text-[10px] tracking-widest uppercase">
                      Module: {member.module}
                    </span>
                  </div>

                </div>
              </a>
            ))}
          </div>

          {/* Supervisors Section */}
          <div className="max-w-5xl mx-auto mt-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
              <h4 className="text-sm font-black text-gray-400 tracking-[0.3em] uppercase px-4">Research Supervisors</h4>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Ms. Karthiga Rajendran', role: 'Lecturer / Supervisor', org: 'SLIIT', image: 'images/team/karthiga.jpg', email: 'karthiga.r@sliit.lk' },
                { name: 'Mr. Eishan Weerasinghe', role: 'Lecturer / Co-Supervisor', org: 'SLIIT', image: 'images/team/eishan.jpg', email: 'eishan.w@sliit.lk' },
                { name: 'SSP Ramindu De Silva', role: 'External Supervisor', org: 'Sri Lanka Police', image: null }
              ].map((sup, idx) => (
                <a key={idx} href={sup.email ? `mailto:${sup.email}` : '#'} className="bg-[#18181b] rounded-2xl p-6 border border-white/5 hover:bg-[#27272a] hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-[#111111] mb-5 overflow-hidden border-2 border-white/10 shadow-sm flex items-center justify-center">
                    {sup.image ? (
                      <img src={sup.image} alt={sup.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl font-black text-gray-500">{sup.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                    )}
                  </div>
                  <h5 className="font-black text-lg text-white mb-1">{sup.name}</h5>
                  <p className="text-primary-dark font-bold text-sm mb-1">{sup.role}</p>
                  {sup.email && <p className="text-yellow-500 font-bold text-[10px] mb-3 opacity-80">{sup.email}</p>}
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">{sup.org}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer id="contact" className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Footer Ambient Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-16 gap-10">

            <div className="flex flex-col items-center lg:items-start max-w-sm text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <ShieldAlert className="w-6 h-6 text-dark" />
                </div>
                <span className="text-3xl font-black tracking-tight text-white">
                  Road<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Safety</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                An intelligent, AI-powered ecosystem designed to monitor, detect, and triage road incidents in real time. Built to save lives.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-2">
              <p className="text-white font-bold text-lg tracking-wide">Sri Lanka Institute of Information Technology</p>
              <p className="text-gray-400 font-medium">Faculty of Computing · Research Project</p>
              <a href="mailto:dinuthwelandagoda@gmail.com" className="text-yellow-500 font-bold text-sm hover:text-yellow-400 transition-colors">dinuthwelandagoda@gmail.com</a>
              <div className="flex gap-4 mt-6">
                {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                  <button key={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/10 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium border-t border-white/10 pt-8">
            <p>&copy; {new Date().getFullYear()} Intelligent Road Safety Monitoring System. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
