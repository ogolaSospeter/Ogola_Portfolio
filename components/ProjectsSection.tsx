"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";

export default function ProjectsSection() {
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

        sr.reveal(".work-item", { interval: 200 });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section
      id="work"
      className="bg-gradient-to-b from-[#005f6b] to-[#387888] py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          <FaLaptopCode className="inline-block mr-2" />
          Projects{" "}
          <span className="text-[rgb(255,230,0)]">Done</span>
        </h2>

        {/* Grid of Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 my-8">
          {projectsData.slice(0, 5).map((project, index) => (
            <div key={index} className="work-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="
              inline-flex items-center px-6 py-3
              rounded-full border-2 border-white text-white
              hover:bg-white hover:text-black
              transition-colors duration-500 group
            "
          >
            <span className="text-xl font-bold font-nunito">View All</span>
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
