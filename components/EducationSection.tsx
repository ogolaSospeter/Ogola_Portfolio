"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    image: "/educat/jkuat.jpeg",
    title: "Bachelor of Science in Computer Technology",
    school: "Jomo Kenyatta University of Agriculture and Technology || JKUAT",
    period: "2021-2025",
    status: { text: "Completed", color: "rgb(1, 90, 20)" }
  },
  {
    image: "/educat/Aspire.png",
    title: "Certificate in Leadership Development and Team Management",
    school: "Aspire Institute Inc.",
    period: "2024",
    status: { text: "Completed", color: "rgb(1, 90, 20)" }
  },
  {
    image: "/educat/plp.jpg",
    title: "Certificate in Software Development",
    school: "Power Learn Project || PLP AFRICA",
    period: "2024",
    status: { text: "Completed", color: "rgb(1, 90, 20)" }
  },
  {
    image: "/educat/ALX.png",
    title: "Certificate in Software Engineering",
    school: "ALX_SE || ALX AFRICA",
    period: "2023-2024",
    status: { text: "Completed", color: "rgb(1, 90, 20)" }
  },
  {
    image: "/educat/school.jpeg",
    title: "Kenya Certificate of Secondary Education",
    school: "Homabay High School",
    period: "2016-2019",
    status: { text: "Completed [A- [79 Points]]", color: "rgb(1, 90, 20)" }
  }
];

export default function EducationSection() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({
          origin: "top",
          distance: "80px",
          duration: 1000,
          reset: true
        });

        sr.reveal(".education-item", { interval: 200 });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section 
      id="education" 
      className="bg-[#e5ecfb] py-16 education"
    >
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="mb-2">
          <FaGraduationCap className="inline-block mr-2" />
          My <span className="text-[#ff7b00]">Education</span>
        </h2>
        <p className="text-lg sm:text-xl font-semibold font-nunito mt-2 mb-8">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="
              education-item 
              bg-white 
              rounded-lg 
              shadow-md 
              hover:shadow-xl 
              hover:scale-[1.03] 
              transition-all 
              duration-300 
              mb-8 
              overflow-hidden 
              flex flex-col md:flex-row 
              gap-6
            "
          >
            {/* Image Container */}
            <div className="relative w-full md:w-72 h-48 md:h-auto overflow-hidden flex-shrink-0">
              <Image
                src={edu.image}
                alt={edu.school}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center p-6">
              <h3 className="text-2xl sm:text-3xl text-[#012970] font-semibold mb-3">
                {edu.title}
              </h3>
              <p className="text-base sm:text-lg mb-2">
                {edu.school}
              </p>
              <h4 className="text-lg sm:text-xl font-nunito font-bold mb-1">
                {edu.period} |{" "}
                <span style={{ color: edu.status.color }}>
                  {edu.status.text}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
