"use client";

import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroSection() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const [typeEffect] = useTypewriter({
    words: [
      "AI for Healthcare Innovation",
      "Machine Learning Research",
      "Full-Stack Web Development",
      "Backend Engineering",
      "Android Development",
      "Software Engineering",
      "Database Design & Admin",
      "AI-Driven Systems",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 25,
    delaySpeed: 600,
  });

  useEffect(() => {
    const initScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const sr = ScrollReveal({ origin: "top", distance: "60px", duration: 1200, reset: true });
        sr.reveal(".hero-title", { delay: 200 });
        sr.reveal(".hero-subtitle", { delay: 400 });
        sr.reveal(".hero-badge", { delay: 500 });
        sr.reveal(".hero-btn", { delay: 600 });
        sr.reveal(".hero-socials", { delay: 800, interval: 100 });
        sr.reveal(".hero-image", { delay: 1000 });
      }
    };
    initScrollReveal();
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden min-h-screen bg-[#09011b]"
      id="home"
    >
      {/* Network nodes background */}
      {particlesReady && <Particles
        id="hero-particles"
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 120, density: { enable: true } },
            color: { value: "#00d9ff" },
            links: {
              enable: true,
              color: "#00d9ff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              outModes: { default: "bounce" },
            },
            opacity: { value: 0.8 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 180, links: { opacity: 1 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-10 text-center md:text-left">
        <div className="py-12 flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-14 md:gap-16">
          <div className="flex-1 space-y-5">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#00d9ff]/30 text-[#00d9ff] text-sm font-semibold tracking-wide w-fit mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-pulse" />
              Open to AI Research Collaborations
            </div>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-[#00d9ff]">Ogola</span>{" "}
              <span className="text-[#ff7b00]">Sospeter.</span>
            </h1>
            <div className="hero-subtitle text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">
              I work in{" "}
              <span className="text-[#ff7b00] font-bold">{typeEffect}</span>
              <Cursor cursorStyle="|" />
            </div>
            <p className="hero-subtitle text-sm sm:text-base text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed">
              Software Engineer &amp; aspiring AI Researcher &mdash; focused on building intelligent systems
              for healthcare innovation in Africa and beyond.
            </p>
            <div className="hero-btn flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <Link
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-[#00d9ff] text-[#09011b] rounded-full text-sm font-bold shadow-lg shadow-[#00d9ff]/30 hover:bg-white hover:shadow-white/30 hover:scale-105 transition-all duration-300"
              >
                About Me
                <i className="fas fa-arrow-circle-down ml-2" />
              </Link>
              <Link
                href="#research"
                className="inline-flex items-center px-6 py-3 bg-transparent text-[#00d9ff] border border-[#00d9ff]/50 rounded-full text-sm font-semibold hover:bg-[#00d9ff]/10 hover:border-[#00d9ff] hover:scale-105 transition-all duration-300"
              >
                AI Research Focus
              </Link>
            </div>
            <div className="hero-socials flex gap-3 pt-2 justify-center md:justify-start">
              {[
                { href: "https://www.linkedin.com/in/ogola-sospeter-5611a41b3/", icon: FaLinkedin, label: "LinkedIn", hoverBg: "hover:bg-[#0077b5]" },
                { href: "https://github.com/ogolasospeter", icon: FaGithub, label: "GitHub", hoverBg: "hover:bg-[#333]" },
                { href: "mailto:ogolasospeter62@gmail.com", icon: MdEmail, label: "Email", hoverBg: "hover:bg-[#ea4335]" },
                { href: "https://api.whatsapp.com/send/?phone=254795398253", icon: MdWhatsapp, label: "WhatsApp", hoverBg: "hover:bg-[#25D366]" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full flex items-center justify-center bg-white/10 text-[#00d9ff] border border-[#00d9ff]/30 transition-all duration-300 ${social.hoverBg} hover:text-white hover:scale-110 hover:border-transparent hover:shadow-md`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          <div className="hero-image flex-1 flex justify-center items-center pb-6 md:pb-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-[#00d9ff]/20 blur-md" />
              <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] transition-transform duration-300 hover:scale-105">
                <Image
                  src="/profile2.jpg"
                  alt="Ogola Sospeter"
                  fill
                  priority
                  className="object-cover rounded-[2rem] shadow-2xl shadow-[#00d9ff]/20"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
