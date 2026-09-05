import React from 'react';
import { FiAward, FiBookOpen, FiCode, FiDownload } from "react-icons/fi";
import { 
  SiReact, 
  SiTailwindcss, 
  SiMongodb, 
  SiFastapi, 
  SiGit 
} from "react-icons/si";

export default function About() {
  const Aboutdata = [
    {
      icon: <FiBookOpen size={20} />,
      title: "Education",
      desc: "B.E Computer Science",
      subtext: "K S Institute of Technology, Bengaluru",
    },
    {
      icon: <FiAward size={20} />,
      title: "Projects",
      desc: "Built 3+ modern web projects",
    },
  ];

  const skillCategories = [
    { heading: "Programming", skills: "Java, JavaScript" },
    { heading: "Frontend", skills: "React.js, HTML5, CSS3" },
    { heading: "Backend", skills: "Spring Boot, Hibernate" },
    { heading: "Database", skills: "MySQL, Firebase" },
  ];

  const Tools = [
    { icon: <SiReact size={24} />, title: "React js" },
    { icon: <SiTailwindcss size={24} />, title: "Tailwind css" },
    { icon: <SiFastapi size={24} />, title: "FastAPI" },
    { icon: <SiGit size={24} />, title: "Git" },
  ];

  return (
    <div id="about" className="relative w-full min-h-screen lg:h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide py-16 lg:py-10 px-6 md:px-12">
        
        {/* --- BG EFFECTS --- */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute inset-0 z-[15] pointer-events-none" style={{ background: "radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)" }}></div>

        {/* --- STATIC FRAME IMAGE (LEFT 45% on large screens) --- */}
        <div className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block" style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}>
            <img 
               src="/images/akash-profile.png" 
               alt="Akash Jadhav" 
               className="w-full h-full object-cover opacity-50 grayscale" 
            />
        </div>

        {/* --- CONTENT (RIGHT 55% on desktop, full width on mobile) --- */}
        <div className="relative z-[50] w-full lg:w-[80%] flex flex-col md:flex-row items-center justify-end">
            
            {/* Visual Gap for the face mask area on desktop */}
            <div className="hidden lg:block w-[35%] h-full"></div>

            {/* Main Content Pane */}
            <div className="w-full lg:w-[65%] flex flex-col space-y-5 pointer-events-auto bg-black/40 backdrop-blur-sm p-6 md:p-8 border border-white/5 rounded-2xl">
                
                {/* Header */}
                <div className="space-y-1">
                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">SYSTEM INFO</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase">
                        About Me<span className="text-blue-500">.</span>
                    </h2>
                </div>

                {/* Mobile Profile Photo - Bigger, Black & White like laptop */}
                <div className="lg:hidden w-full flex justify-center py-2">
                    <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 group">
                        <img 
                            src="/images/akash-profile.png" 
                            alt="Akash Jadhav" 
                            className="w-full h-full object-cover grayscale contrast-125 brightness-95" 
                        />
                        {/* Subtle futuristic scanline/vignette overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
                        {/* Corner Accents */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-blue-500/60"></div>
                        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-blue-500/60"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-blue-500/60"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-blue-500/60"></div>
                    </div>
                </div>

                {/* Bio Paragraph */}
                <div className="robotic-section">
                    <p className="text-gray-400 text-sm md:text-sm lg:text-base font-light leading-relaxed max-w-2xl">
                        I am a passionate <span className="text-white font-medium">Full Stack Web Developer</span> specializing in the 
                        modern web ecosystem. My expertise lies in crafting high-performance, 
                        scalable applications with precision and clean architecture.
                    </p>
                </div>

                {/* Skills Card - Full Width */}
                <div className="group p-5 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 rounded-xl">
                    <div className="text-blue-500 mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                        <FiCode size={18} />
                    </div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">Skills</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {skillCategories.map((cat) => (
                            <div key={cat.heading}>
                                <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-1.5">{cat.heading}</h5>
                                <p className="text-gray-500 text-[11px] leading-relaxed">{cat.skills}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education & Projects Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Aboutdata.map((item) => (
                        <div key={item.title} className="group p-5 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 rounded-xl">
                            <div className="text-blue-500 mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                            <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                            {item.subtext && (
                                <p className="text-gray-400 text-[12px] leading-relaxed mt-1.5">{item.subtext}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Tech Dock */}
                <div className="space-y-3">
                    <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Core Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                        {Tools.map((tool) => (
                            <div key={tool.title} className="group relative p-3 bg-black/50 border border-white/5 hover:border-blue-500/50 transition-all rounded-xl flex items-center justify-center cursor-help">
                                <div className="text-gray-500 group-hover:text-blue-400 transition-colors">
                                    {tool.icon}
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[70] whitespace-nowrap shadow-xl">
                                    {tool.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                    <a 
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Akash_Jadhav_Resume.pdf"
                        className="inline-flex items-center space-x-4 px-10 py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg shadow-blue-900/20"
                    >
                        <span>Download Resume</span>
                        <FiDownload size={16} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
