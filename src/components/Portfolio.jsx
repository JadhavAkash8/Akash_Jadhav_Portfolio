import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    title: "Arogya Nidhi",
    desc: "Healthcare scheme eligibility checker & hospital finder app with secure Firebase authentication.",
    tags: ["Kotlin", "Android Studio", "Firebase", "REST API"],
    link: "#",
    github: "https://github.com/JadhavAkash8",
  },
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    title: "AI For Hunger (SustainBite)",
    desc: "Mobile app connecting food donors with NGOs using AI matching and location-based services.",
    tags: ["AI", "Cloud", "Firebase", "Location Services"],
    link: "#",
    github: "https://github.com/JadhavAkash8",
  },
  {
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
    title: "Ginger Plant Disease Detection",
    desc: "AI-based application to detect and classify ginger plant diseases using deep learning.",
    tags: ["Python", "OpenCV", "Keras", "Deep Learning"],
    link: "#",
    github: "https://github.com/JadhavAkash8",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          Project Showcase
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter"
        >
          Selected Works<span className="text-blue-500">.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10"
          >
            <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem] m-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">{project.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repository" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiGithub size={20} />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
