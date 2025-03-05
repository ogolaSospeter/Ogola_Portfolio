"use client";

import Image from "next/image";
import { FaEye, FaCode } from "react-icons/fa";
import type { Project } from "@/lib/types";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import VanillaTilt
    const initTilt = async () => {
      if (typeof window !== "undefined" && cardRef.current) {
        const VanillaTilt = (await import("vanilla-tilt")).default;
        VanillaTilt.init(cardRef.current, { max: 15 });
      }
    };
    initTilt();
  }, []);

  return (
    <div
      ref={cardRef}
      className="
        relative
        w-full
        h-90
        rounded-lg
        shadow-md
        overflow-hidden
        group
       
        hover:scale-[1.02]
      "
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover"
        draggable={false}
      />

      {/* Overlay Content */}
      <div
        className="
          absolute inset-x-0
          transition-all duration-300
          bg-white/90
          top-[85%] group-hover:top-[10%]
          h-full
        "
      >
        {/* Title Bar */}
        <div className="flex justify-between items-center h-16 px-4 bg-[#026969]">
          <h3 className="text-xl text-white font-semibold">{project.name}</h3>
        </div>

        {/* Description & Buttons */}
        <div className="m-4 flex flex-col justify-center">
          <p className="text-sm mb-6">{project.description}</p>
          <div className="flex items-center gap-4">
            <a
              href={project.links.view}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center px-5 py-2 
                rounded-lg bg-black text-white text-base
                hover:bg-gray-800 transition-colors
              "
            >
              <FaEye className="mr-2" /> View
            </a>
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center px-5 py-2 
                rounded-lg bg-black text-white text-base
                hover:bg-gray-800 transition-colors
              "
            >
              <FaCode className="mr-2" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
