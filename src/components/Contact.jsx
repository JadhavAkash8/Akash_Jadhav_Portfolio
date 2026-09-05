import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  FiSend, 
  FiShield, 
  FiMail, 
  FiLinkedin, 
  FiGithub, 
  FiFileText, 
  FiCheckCircle, 
  FiAlertCircle 
} from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Email format validation helper
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Akash,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    // Primary: Web-based Gmail compose URL (works on every computer and mobile browser without needing an app installed)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=akashjadhav76365@gmail.com&su=${subject}&body=${body}`;

    // Standard mailto protocol
    const mailtoUrl = `mailto:akashjadhav76365@gmail.com?subject=${subject}&body=${body}`;

    // Open Gmail web composer in a focused window, or navigate to mailto
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mailtoUrl;
    } else {
      const win = window.open(gmailUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        // Fallback if popup blocked
        window.location.href = mailtoUrl;
      }
    }

    setIsSubmitting(false);
    setSubmitStatus("success");
    toast.success("Opening email with your message ready to send!");
  };

  const contactLinks = [
    {
      name: "EMAIL",
      icon: <FiMail className="text-base" />,
      href: "mailto:akashjadhav76365@gmail.com",
      label: "akashjadhav76365@gmail.com",
    },
    {
      name: "LINKEDIN",
      icon: <FiLinkedin className="text-base" />,
      href: "https://www.linkedin.com/in/akash-jadhavv",
      label: "in/akash-jadhavv",
    },
    {
      name: "GITHUB",
      icon: <FiGithub className="text-base" />,
      href: "https://github.com/JadhavAkash8",
      label: "github/JadhavAkash8",
    },
    {
      name: "RESUME",
      icon: <FiFileText className="text-base" />,
      href: "/resume.pdf",
      label: "View / Download",
      isDownload: true,
    },
  ];

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen bg-[#020202] py-24 px-6 md:px-12 flex items-center justify-center font-mono overflow-hidden scroll-mt-20"
    >
      {/* Background Subtle Grid & Overlays */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-radial-vignette opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none mix-blend-screen z-0" />

      {/* Brackets Corner Accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-cyan-500/20 pointer-events-none hidden md:block" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-cyan-500/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-cyan-500/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-cyan-500/20 pointer-events-none hidden md:block" />

      {/* Central Contact UI */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl px-2 sm:px-4 pointer-events-auto"
      >
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-sm mb-4">
            <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em]">
              TRANSMISSION LINK
            </p>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-3">
            CONNECT<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-sm tracking-wide font-sans max-w-lg mx-auto mb-4">
            Have an opportunity or want to connect? I'd love to hear from you.
          </p>
          <div className="flex items-center justify-center space-x-2 text-cyan-500/60 font-mono text-[9px] tracking-[0.6em] uppercase">
            <FiShield />
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          noValidate
          className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 sm:p-10 md:p-14 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8 group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Name Input */}
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500/80 block ml-1"
              >
                NAME <span className="text-red-400 font-normal">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full bg-white/5 border-b ${
                  errors.name ? "border-red-500/80" : "border-white/10"
                } py-4 px-6 text-white text-[13px] outline-none focus:border-cyan-500 focus:bg-white/[0.07] transition-all placeholder:text-gray-500 rounded-none`}
              />
              {errors.name && (
                <p className="text-red-400 text-[11px] font-sans flex items-center gap-1.5 ml-1 pt-1">
                  <FiAlertCircle className="shrink-0 text-xs" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500/80 block ml-1"
              >
                EMAIL <span className="text-red-400 font-normal">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full bg-white/5 border-b ${
                  errors.email ? "border-red-500/80" : "border-white/10"
                } py-4 px-6 text-white text-[13px] outline-none focus:border-cyan-500 focus:bg-white/[0.07] transition-all placeholder:text-gray-500 rounded-none`}
              />
              {errors.email && (
                <p className="text-red-400 text-[11px] font-sans flex items-center gap-1.5 ml-1 pt-1">
                  <FiAlertCircle className="shrink-0 text-xs" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label 
              htmlFor="message" 
              className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500/80 block ml-1"
            >
              MESSAGE <span className="text-red-400 font-normal">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity or write your message..."
              className={`w-full bg-white/5 border-b ${
                errors.message ? "border-red-500/80" : "border-white/10"
              } py-4 px-6 text-white text-[13px] outline-none focus:border-cyan-500 focus:bg-white/[0.07] transition-all min-h-[140px] resize-y placeholder:text-gray-500 rounded-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-[11px] font-sans flex items-center gap-1.5 ml-1 pt-1">
                <FiAlertCircle className="shrink-0 text-xs" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Feedback Status Indicator */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-cyan-950/40 border border-cyan-500/40 rounded-sm flex items-start sm:items-center gap-3 text-cyan-300 font-mono text-xs"
            >
              <FiCheckCircle className="text-cyan-400 text-lg shrink-0 mt-0.5 sm:mt-0" />
              <span>Message sent successfully. I'll get back to you soon.</span>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-950/40 border border-red-500/40 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-red-300 font-mono text-xs"
            >
              <div className="flex items-start sm:items-center gap-3">
                <FiAlertCircle className="text-red-400 text-lg shrink-0 mt-0.5 sm:mt-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span>Connection issue. Click to send directly to</span>
                  <a 
                    href="mailto:akashjadhav76365@gmail.com" 
                    className="underline text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    akashjadhav76365@gmail.com
                  </a>
                </div>
              </div>
              <a
                href={`mailto:akashjadhav76365@gmail.com?subject=${encodeURIComponent(
                  `Portfolio Inquiry from ${formData.name || "Visitor"}`
                )}&body=${encodeURIComponent(
                  `Hi Akash,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                )}`}
                className="shrink-0 px-3 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/50 text-cyan-300 text-[10px] uppercase tracking-wider rounded-sm transition-all"
              >
                Open in Email App
              </a>
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center md:justify-end pt-2">
            <motion.button
              whileHover={!isSubmitting ? {
                scale: 1.03,
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
              } : {}}
              whileTap={!isSubmitting ? { scale: 0.97 } : {}}
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto group flex items-center justify-center space-x-5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800/60 disabled:cursor-not-allowed text-black font-black text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] px-10 sm:px-20 py-5 shadow-2xl transition-all cursor-pointer rounded-sm`}
            >
              <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
              <FiSend className={`text-base transition-transform ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"}`} />
            </motion.button>
          </div>
        </form>

        {/* Direct Contact Links Row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[10px] font-mono text-center uppercase tracking-[0.3em] text-gray-400 mb-6">
            DIRECT_CHANNELS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noreferrer"
                download={item.isDownload ? "Akash_Jadhav_Resume.pdf" : undefined}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 p-3 sm:p-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-sm group text-center"
              >
                <span className="text-cyan-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <ToastContainer
        position="bottom-right"
        toastClassName="bg-black border border-cyan-500/30 text-white font-mono text-[9px] rounded-none backdrop-blur-xl"
        progressClassName="bg-cyan-600"
      />
    </div>
  );
};

export default Contact;
