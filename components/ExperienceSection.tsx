"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { experienceData } from "@/lib/data";

export default function ExperienceSection() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({
          origin: "top",
          distance: "80px",
          duration: 1000,
          reset: true,
        });
        sr.reveal(".experience .timeline", { delay: 400 });
        sr.reveal(".experience .timeline .container", { interval: 400 });
      }
    };
    initScrollReveal();
  }, []);

  const experiences = experienceData.slice(0, 3);

  return (
    <section className="experience px-4" id="experience">
      {/* Heading */}
      <h2 className="text-center mb-8 sm:mb-10 md:mb-12 flex justify-center items-center gap-2 text-black">
        <FaBriefcase className="text-xl sm:text-2xl" />
        Experience
      </h2>

      {/* Timeline */}
      <div className="timeline max-w-[1200px] mx-auto relative">
        {/* Timeline Line - Hidden on mobile, shown on md screens */}
        <div className="hidden md:block absolute w-[2px] bg-[#020133] h-[85%] left-1/2 -translate-x-1/2 top-[5%]" />
        
        {/* Mobile Timeline Line */}
        <div className="md:hidden absolute w-[2px] bg-[#020133] h-[90%] left-8 top-[5%]" />

        {experiences.map((exp, index) => (
          <div key={index} className="container relative flex mb-6">
            {/* Mobile Layout Structure */}
            <div className="md:hidden flex w-full">
              {/* Briefcase Icon for Mobile */}
              <div className="absolute left-8 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#020133] flex items-center justify-center z-10">
                <FaBriefcase className="text-[#020133] text-sm" />
              </div>
              
              {/* Content Box for Mobile */}
              <div className="ml-16 w-[calc(100%-4rem)]">
                <div className="bg-[#f68c09] rounded-lg p-4 relative">
                  <h2 className="text-lg font-bold mb-1 text-black">{exp.company}</h2>
                  <h3 className="text-base mb-1 text-black">{exp.role}</h3>
                  <p className="text-sm text-black">{exp.duration}</p>
                  <p className="text-sm text-black mt-2">Overview</p>
                  <p className="text-sm text-black mt-1">
                    {exp.overview }
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Layout Structure - Hidden on mobile */}
            <div className="hidden md:flex items-center justify-center w-full">
              {/* Briefcase Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-[#020133] flex items-center justify-center z-10">
                <FaBriefcase className="text-[#020133] text-lg" />
              </div>

              {/* Content Container */}
              <div className={`w-[45%] ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                <div className="bg-[#f68c09] rounded-lg p-6 relative">
                  {/* Arrow */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      index % 2 === 0
                        ? "left-0 -translate-x-full"
                        : "right-0 translate-x-full"
                    }`}
                  >
                    <div
                      className={`w-0 h-0 border-y-[12px] border-y-transparent ${
                        index % 2 === 0
                          ? "border-r-[12px] border-r-[#f68c09]"
                          : "border-l-[12px] border-l-[#f68c09]"
                      }`}
                    />
                  </div>

                  <h2 className="text-xl font-bold mb-2 text-black">{exp.company}</h2>
                  <h3 className="text-lg mb-2 text-black">{exp.role}</h3>
                  <p className="text-base text-black">{exp.duration}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4A21EF] text-white shadow-lg hover:bg-[#3A19BF] transition-all duration-300 text-sm sm:text-base"
        >
          <span>View All</span>
          <FaArrowRight className="text-base" />
        </Link>
      </div>
    </section>
  );
}