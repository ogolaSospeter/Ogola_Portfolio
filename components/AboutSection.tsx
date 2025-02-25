"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function AboutSection() {
  // ✅ Initialize Tilt Effect for Image
  useEffect(() => {
    const initTilt = async () => {
    const VanillaTilt = (await import("vanilla-tilt")).default;
    const elements = document.querySelectorAll<HTMLElement>(".tilt");
    elements.forEach((element) => {
      VanillaTilt.init(element, { max: 15 });
    });
  }
  initTilt();
  }, []);

  // ✅ Add Scroll Reveal Animations
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
      const sr = ScrollReveal({
        origin: "top",
        distance: "70px",
        duration: 1200,
        reset: true,
      });

      sr.reveal(".about-title", { delay: 200 });
      sr.reveal(".about-image", { delay: 400 });
      sr.reveal(".about-content", { delay: 600 });
    }
  };

  initScrollReveal();
}, []);

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16" id="about">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Title */}
        <div className="about-title flex items-center justify-center gap-3 mb-10 sm:mb-12">
          <FaUser className="text-2xl sm:text-3xl" />
          <h2 className="text-xl sm:text-2xl font-bold">
            About <span className="text-purple-600">Me</span>
          </h2>
        </div>

        {/* ✅ Grid Layout: Stack on small, Side-by-Side on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center px-6 md:px-8">
          {/* ✅ Image (With Hover Tilt Effect) */}
          <div className="about-image flex justify-center">
            <div
              className="tilt w-[250px] sm:w-[320px] md:w-[400px] max-w-full transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.jpg"
                alt="Ogola Sospeter"
                width={400}
                height={400}
                className="
                  object-cover 
                  cursor-pointer
                  rounded-[10%]
                  shadow-lg
                  transition-all duration-300
                  mix-blend-luminosity hover:mix-blend-normal
                "
                draggable={false}
              />
            </div>
          </div>

          {/* ✅ Text Content */}
          <div className="about-content text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              I&apos;m Ogola Sospeter
            </h3>
            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6">
              Backend Developer &amp; Software Engineer
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-prose mb-6 sm:mb-8">
              I am a Backend Developer, Android and Web Developer. I am very
              passionate about improving my coding skills &amp; developing
              applications &amp; websites. I build WebApps and Websites. Python
              remains a backbone to my programming streak!
            </p>

            {/* ✅ Contact Info */}
            <div className="space-y-2 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg">
                <span className="text-blue-600 font-semibold">Email: </span>
                ogolasospeter62@gmail.com
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                <span className="text-blue-600 font-semibold">Place: </span>
                Nairobi, Kenya-00200
              </p>
            </div>

            {/* ✅ Resume Button */}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center px-5 py-2
                bg-purple-700 text-white
                rounded-lg shadow-lg hover:bg-purple-800
                transition-colors duration-300 text-sm sm:text-base md:text-lg
              "
            >
              Resume
              <span className="ml-2 text-lg leading-none">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
