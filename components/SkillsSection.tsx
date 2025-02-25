"use client";

import { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { skillsData } from "@/lib/data";
import Image from "next/image";

export default function SkillsSection() {
  // ✅ Scroll Reveal Animation
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "60px",
        duration: 800,
        reset: true,
      });

      sr.reveal(".skills-title", { delay: 200 });
      sr.reveal(".skills-grid .skill-card", { interval: 150 });
    }
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#f6f6f7] to-[#7841e6] py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ Title */}
        <h2 className="skills-title text-center font-bold text-[#3106f1] mb-8 text-2xl sm:text-3xl">
          <FaLaptopCode className="inline-block mr-2" />
          Skills & <span className="text-[rgb(141,127,5)]">Abilities</span>
        </h2>

        {/* ✅ Skills Grid */}
        <div className="bg-white/40 rounded-2xl p-8 w-full mx-auto mt-8">
          <div
            className="skills-grid grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2"
          >
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="
                  skill-card
                  bg-[rgba(0,0,22,0.9)] 
                  p-4 
                  rounded-2xl 
                  shadow-md 
                  hover:shadow-lg hover:shadow-[rgba(0,2,68,0.8)] 
                  transition-all 
                  duration-200 
                  cursor-pointer
                "
              >
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <span className="text-lg sm:text-xl font-medium font-poppins text-white text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
