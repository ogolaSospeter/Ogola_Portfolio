import dynamic from 'next/dynamic';
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSectionWrapper from '@/components/ContactSectionWrapper';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <div className="mx-auto w-full max-w-screen-2xl">
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSectionWrapper />
      </div>
    </div>
  );
}
