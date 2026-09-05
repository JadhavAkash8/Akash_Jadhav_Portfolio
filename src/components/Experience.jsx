import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiBriefcase, FiBook, FiAward } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(headerRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.1 }
      );

      tl.fromTo(contentRef.current, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "none" },
        "-=0.2"
      );

      tl.fromTo(".exp-corner",
        { scale: 0 },
        { scale: 1, duration: 0.3, ease: "none", stagger: 0.05 },
        "-=0.2"
      );

      tl.fromTo(".exp-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.15 },
        "-=0.3"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const internshipPoints = [
    "Developed responsive and user-friendly Android interfaces.",
    "Integrated REST APIs using Retrofit for application data.",
    "Implemented Firebase Authentication for secure user access.",
    "Explored Generative AI capabilities using Gemini and Google AI Studio.",
    "Worked on debugging, testing, API integration, and improving application functionality.",
  ];

  const trainingPoints = [
    { label: "Core & Advanced Java", detail: "OOP, Collections, Exception Handling, JDBC" },
    { label: "Backend", detail: "Spring Boot, Hibernate, REST APIs" },
    { label: "Frontend", detail: "HTML, CSS, JavaScript, React.js" },
    { label: "Database", detail: "MySQL and SQL" },
    { label: "Development", detail: "Git/GitHub, API integration, debugging" },
  ];

  const certifications = [
    { title: "Innovating with Google Cloud AI", issuer: "Google Cloud" },
    { title: "Java Full Stack Development with AI", issuer: "Tap Academy" },
    { title: "Certificate of Publication", issuer: "IJARCSCE" },
  ];

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#000] text-white overflow-hidden scroll-mt-24"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Header */}
      <div ref={headerRef} className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-sm mb-4">
          <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.5em]">EXPERIENCE MODULE</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          Experience<span className="text-blue-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-blue-500/40 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-500 font-light text-base leading-relaxed">
          My professional journey through internships, training programs, and industry certifications.
        </p>
      </div>

      {/* Big Outer Card */}
      <div ref={contentRef} className="max-w-6xl mx-auto relative z-10">
        <div className="p-6 md:p-10 bg-[#0c0c0c] border border-white/[0.08] rounded-sm overflow-hidden relative">
          
          {/* HUD Corner Lines */}
          <div className="exp-corner absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/50"></div>
          <div className="exp-corner absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/50"></div>
          <div className="exp-corner absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/50"></div>
          <div className="exp-corner absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/50"></div>

          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/3 blur-[100px] pointer-events-none" />

          {/* ===== TWO SIDE-BY-SIDE CARDS ===== */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">

            {/* --- INTERNSHIP CARD --- */}
            <div className="exp-card p-6 md:p-8 bg-[#080808] border border-white/[0.06] rounded-sm hover:border-blue-500/20 transition-all duration-500 group">
              
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-sm text-blue-400">
                  <FiBriefcase size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest uppercase">Internship</h3>
                  <span className="text-[7px] font-mono text-gray-600 block tracking-[0.4em] mt-0.5">18 WEEKS</span>
                </div>
              </div>

              {/* Company Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-8 px-3 bg-white flex items-center justify-center rounded-sm">
                   <span className="text-black font-black text-[9px] tracking-tighter">MINDMATRIX.ED</span>
                </div>
                <div className="h-8 px-3 border border-white/15 flex items-center justify-center rounded-sm">
                   <span className="text-gray-300 font-bold text-[9px] tracking-wider">CL INFOTECH PVT. LTD.</span>
                </div>
              </div>

              {/* Role */}
              <h4 className="text-white font-semibold text-sm mb-2">Android App Development Intern</h4>
              <p className="text-gray-400 font-light text-xs leading-relaxed mb-5">
                Focused on Android App Development and <span className="text-white font-medium">Generative AI</span>. 
                Worked with Kotlin, Android Studio, Firebase Auth, Retrofit APIs, Gemini AI & Material Design.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Kotlin", "Android Studio", "Firebase", "Retrofit", "Gemini AI", "Material Design"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[9px] font-mono bg-blue-500/8 border border-blue-500/15 text-blue-300 rounded-sm tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5">
                {internshipPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 text-[7px] shrink-0">▸</span>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- TRAINING CARD --- */}
            <div className="exp-card p-6 md:p-8 bg-[#080808] border border-white/[0.06] rounded-sm hover:border-blue-500/20 transition-all duration-500 group">
              
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-sm text-blue-400">
                  <FiBook size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest uppercase">Training</h3>
                  <span className="text-[7px] font-mono text-gray-600 block tracking-[0.4em] mt-0.5">FULL STACK COURSE</span>
                </div>
              </div>

              {/* Institute Tag */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-8 px-3 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rounded-sm">
                   <span className="text-blue-400 font-bold text-[9px] tracking-widest">TAP ACADEMY</span>
                </div>
              </div>

              {/* Program Title */}
              <h4 className="text-white font-semibold text-sm mb-2">Java Full Stack Web Development with AI</h4>
              <p className="text-gray-400 font-light text-xs leading-relaxed mb-5">
                Comprehensive training covering both frontend and backend technologies. 
                Built a strong foundation in developing <span className="text-white font-medium">web applications</span> and working with databases and APIs.
              </p>

              {/* Curriculum Breakdown */}
              <div className="space-y-2.5 mb-5">
                {trainingPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 text-[7px] shrink-0">▸</span>
                    <p className="text-gray-400 text-[11px] leading-relaxed">
                      <span className="text-white font-medium">{item.label}:</span> {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <p className="text-gray-500 text-[11px] leading-relaxed italic border-l-2 border-blue-500/30 pl-3">
                Applied concepts through practical full-stack projects and hands-on development.
              </p>
            </div>
          </div>

          {/* ===== CERTIFICATIONS HORIZONTAL BAR ===== */}
          <div className="exp-card relative z-10 p-5 md:p-6 bg-[#080808] border border-white/[0.06] rounded-sm">
            
            {/* Bar Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-sm text-blue-400">
                <FiAward size={16} />
              </div>
              <h4 className="text-[10px] font-mono text-blue-400 tracking-[0.4em] uppercase font-bold">Certifications</h4>
              <div className="flex-1 h-[1px] bg-white/5"></div>
            </div>

            {/* Certification Items - Horizontal Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300 group/cert"
                >
                  <div className="w-8 h-8 bg-blue-500/10 border border-blue-500/20 rounded-sm flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-black text-[10px]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium text-[11px] leading-tight truncate">{cert.title}</p>
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro HUD Footer */}
        <div className="mt-6 flex justify-between items-center font-mono text-[9px] text-gray-700 tracking-[0.2em] px-2 opacity-50">
          <span>&gt; SYSTEM DATA LOADED</span>
          <span>0x034FB</span>
        </div>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03] z-10"></div>
    </section>
  );
}
