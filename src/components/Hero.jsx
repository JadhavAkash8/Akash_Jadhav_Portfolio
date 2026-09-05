import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- SYSTEM BOOT OPENING EXPERIENCE ---
      const bootTl = gsap.timeline({ delay: 0.3 });

      // Boot visuals
      bootTl.fromTo('.noise-overlay', { opacity: 0 }, { opacity: 0.15, duration: 1, ease: "none" }, 0);
      bootTl.fromTo('.center-glow', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power1.inOut" }, 0.2);
      
      // Navbar slide in
      bootTl.fromTo('nav', { y: -50, opacity: 0, filter: 'blur(10px)' }, { y: 0, opacity: 1, filter: 'blur(0)', duration: 1, ease: "power2.out" }, 0.5);

      // HUD Elements sequence
      bootTl.fromTo('.hud-element', { opacity: 0 }, { opacity: 1, duration: 0.1, stagger: 0.1, ease: "none" }, 0.8);

      // Name reveal — character by character glitch
      bootTl.fromTo('.hero-name-char', 
        { opacity: 0, y: 20, rotateX: -90 }, 
        { opacity: 1, y: 0, rotateX: 0, duration: 0.08, stagger: 0.04, ease: "power2.out" }, 
        1.2
      );

      // Name glow pulse after reveal
      bootTl.fromTo('.hero-name-glow', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.6, ease: "power1.inOut" }, 
        1.8
      );

      // Role text
      bootTl.fromTo(roleRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
        2.0
      );
      bootTl.fromTo('.role-underline', 
        { scaleX: 0, transformOrigin: "left" }, 
        { scaleX: 1, duration: 0.4, ease: "power2.out" }, 
        2.2
      );

      // Description
      bootTl.fromTo(descRef.current, 
        { opacity: 0, x: 40 }, 
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, 
        2.4
      );

      // CTA Button
      bootTl.fromTo(ctaRef.current, 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, 
        2.7
      );

      // Social Icons
      bootTl.fromTo('.social-icon', 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }, 
        2.8
      );

      // Decorative line animations
      bootTl.fromTo('.hero-line', 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 0.6, stagger: 0.15, ease: "power2.inOut" }, 
        1.0
      );

      // Clean hero display without blur
      gsap.set('.hero-content', { filter: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleText = "AKASH JADHAV";

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide">
        
        {/* --- BACKGROUND EFFECTS --- */}
        {/* Subtle grid lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        {/* Static noise grain */}
        <div className="noise-overlay absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        {/* Center Subdued Blue Glow */}
        <div className="center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-0 mix-blend-screen z-[1]"></div>

        {/* Decorative accent lines */}
        <div className="hero-line absolute top-[30%] left-0 w-[15%] h-[1px] bg-gradient-to-r from-blue-500/40 to-transparent z-[2] origin-left scale-x-0"></div>
        <div className="hero-line absolute bottom-[30%] right-0 w-[15%] h-[1px] bg-gradient-to-l from-blue-500/40 to-transparent z-[2] origin-right scale-x-0"></div>
        <div className="hero-line absolute top-[50%] left-0 w-[8%] h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent z-[2] origin-left scale-x-0"></div>

        {/* --- HUD ELEMENTS --- */}
        <div className="absolute top-28 left-8 md:top-32 md:left-12 z-[60] font-mono text-[10px] text-blue-400 tracking-widest flex flex-col space-y-1.5 pointer-events-none">
            <span className="hud-element opacity-0">&gt; SYSTEM ONLINE</span>
            <span className="hud-element opacity-0">&gt; INITIALIZING PORTFOLIO v2.0</span>
        </div>
        <div className="absolute bottom-12 right-8 md:bottom-12 md:right-12 z-[60] font-mono text-[10px] text-gray-600 tracking-widest text-right flex flex-col space-y-1.5 pointer-events-none">
            <span className="hud-element opacity-0">SECURE SYS_ID: REACT_GSAP</span>
            <span className="hud-element opacity-0">COORD: 34.0522 N / 118.2437 W</span>
        </div>

        {/* --- SOCIAL LINKS --- */}
        <div className="portfolio-ui absolute bottom-12 left-8 md:left-12 z-[60] flex flex-col space-y-5">
            <a href="https://github.com/JadhavAkash8" target="_blank" rel="noreferrer" className="social-icon opacity-0 text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                {/* GitHub */}
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/akash-jadhavv" target="_blank" rel="noreferrer" className="social-icon opacity-0 text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                {/* LinkedIn */}
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/_jadhavakash_?igsi=MWMxMDFmZmQybnQ4" target="_blank" rel="noreferrer" className="social-icon opacity-0 text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                {/* Instagram */}
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="hero-content relative z-[50] flex flex-col md:flex-row justify-between items-center md:items-center w-full px-8 md:px-[12%] lg:px-[15%]">
            
            {/* LEFT SIDE: Name and Role */}
            <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left">
                {/* Name with character-by-character animation */}
                <div ref={nameRef} className="mb-4 relative">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-sans font-black text-white tracking-[0.05em] uppercase leading-[0.9]" style={{ perspective: '1000px' }}>
                        {"AKASH".split('').map((char, i) => (
                            <span 
                                key={`a-${i}`} 
                                className="hero-name-char inline-block opacity-0"
                            >
                                {char}
                            </span>
                        ))}
                        <br />
                        {"JADHAV".split('').map((char, i) => (
                            <span 
                                key={`j-${i}`} 
                                className="hero-name-char inline-block opacity-0"
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                    {/* Subtle glow behind name */}
                    <div className="hero-name-glow absolute inset-0 -z-10 bg-blue-500/5 blur-[60px] rounded-full opacity-0"></div>
                </div>
                
                {/* Role */}
                <div ref={roleRef} className="relative inline-block opacity-0">
                    <h2 className="text-sm md:text-md lg:text-lg font-mono text-gray-300 tracking-[0.2em] uppercase pb-2">
                        Full Stack Developer
                    </h2>
                    <div className="role-underline absolute bottom-0 left-0 w-full h-[1px] bg-blue-500/60 scale-x-0"></div>
                </div>
            </div>

            {/* RIGHT SIDE: Description and Button */}
            <div className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-0 md:pl-8">
                <div ref={descRef} className="mb-8 opacity-0">
                    <p className="text-gray-200 text-sm md:text-base lg:text-lg font-medium tracking-wide leading-relaxed">
                        Crafting modern, scalable and high-performance web applications with precision engineering and seamless user experience.
                    </p>
                </div>

                <div ref={ctaRef} className="opacity-0">
                    <a href="#projects" className="inline-flex items-center px-8 py-3 border border-gray-700 bg-black/50 hover:bg-black/80 hover:border-blue-500/50 transition-colors cursor-pointer rounded-sm backdrop-blur-md group">
                        <span className="text-gray-300 font-mono tracking-widest uppercase text-xs group-hover:text-white transition-colors">Explore Work</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
