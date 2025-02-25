"use client";

import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import ScrollReveal from "scrollreveal";

export default function HeroSection() {
  const [typeEffect] = useTypewriter({
    words: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Database Administration",
      "Web Designing",
      "Android Development",
      "Web Development",
      "Software Development",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 25,
    delaySpeed: 550,
  });

  // ✅ Add Scroll Reveal Effect on Load
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 1200,
        reset: true,
      });

      sr.reveal(".hero-title", { delay: 200 });
      sr.reveal(".hero-subtitle", { delay: 400 });
      sr.reveal(".hero-btn", { delay: 600 });
      sr.reveal(".hero-socials", { delay: 800, interval: 100 });
      sr.reveal(".hero-image", { delay: 1000 });
    }
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16"
      id="home"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-2 sm:px-6 md:px-4 text-center md:text-left">
        <div className="py-16 flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002057] leading-snug">
              Hi There,
              <br />
              I&apos;m Developer Ogola{" "}
              <span className="text-[#ff7b00]">Sospeter.</span>
            </h1>

            <div className="hero-subtitle text-lg sm:text-xl md:text-2xl font-semibold">
              I Am Into{" "}
              <span className="text-[#940808]">{typeEffect}</span>
              <Cursor cursorStyle="|" />
            </div>

            {/* About Me Button */}
            <Link
              href="#about"
              className="hero-btn inline-flex items-center px-6 py-3 bg-[#3700ff] text-white rounded-full text-lg font-bold shadow-lg shadow-[#3700ff]/30 hover:shadow-[#3700ff]/50 hover:scale-105 transition-all duration-300 group"
            >
              About Me
              <i className="fas fa-arrow-circle-down ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>

            {/* Social Links */}
            <div className="hero-socials flex gap-4 pt-4 justify-center md:justify-start">
              {[
                {
                  href: "https://www.linkedin.com/in/ogola-sospeter-5611a41b3/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  hoverBg: "hover:bg-[#0077b5]",
                },
                {
                  href: "https://github.com/ogolasospeter",
                  icon: FaGithub,
                  label: "GitHub",
                  hoverBg: "hover:bg-[#333]",
                },
                {
                  href: "mailto:ogolasospeter62@gmail.com",
                  icon: MdEmail,
                  label: "Email",
                  hoverBg: "hover:bg-[#ea4335]",
                },
                {
                  href: "https://api.whatsapp.com/send/?phone=254795398253",
                  icon: MdWhatsapp,
                  label: "WhatsApp",
                  hoverBg: "hover:bg-[#ea4335]",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    bg-[#09011b] text-[#00d9ff]
                    transition-all duration-300
                    ${social.hoverBg} hover:text-white hover:scale-110
                    hover:shadow-lg
                  `}
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image flex-1 flex justify-center items-center pb-6 md:pb-0">
            <div
              className="
              transition-transform duration-300 hover:scale-105 active:scale-100
                relative
                w-[220px] h-[220px]
                sm:w-[250px] sm:h-[250px]
                md:w-[270px] md:h-[270px]
              "
            >
              <Image
                src="/profile2.jpg"
                alt="Ogola Sospeter"
                fill
                priority
                className="object-cover rounded-[2rem] shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
