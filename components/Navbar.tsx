"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaPython, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Research", href: "/#research" },
  { name: "Projects", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
      updateActiveSection();
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const updateActiveSection = () => {
    const sections = document.querySelectorAll("section[id]");
    let currentSection = "";
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY >= top - 200) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    updateActiveSection();
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.split("#")[1];
    const isOnHomePage = pathname === "/";
    if (isOnHomePage) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 50, behavior: "smooth" });
      }
    } else {
      router.push(href);
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title =
        document.visibilityState === "visible"
          ? "Portfolio | Ogola Sospeter"
          : "Come Back To Portfolio!";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const getLinkClassName = (href: string, isMobile: boolean = false) => `
    text-sm font-medium tracking-wide transition-all duration-200
    ${
      isMobile
        ? `block px-4 py-2.5 rounded-lg hover:text-blue-500 hover:bg-gray-800 ${
            activeSection === href.split("#")[1] ? "text-blue-400 bg-gray-800" : "text-gray-300"
          }`
        : `relative px-2 py-1.5 hover:text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
            activeSection === href.split("#")[1]
              ? "text-blue-600 after:scale-x-100"
              : "text-gray-700"
          }`
    }
  `;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white shadow-sm"}`}>
        <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-gray-900 transition-colors duration-200 hover:text-[#002057]"
          >
            <FaPython className="text-2xl text-[#002057] transition-colors duration-200" />
            Ogola<span className="text-[#ff7b00]">.S</span>
          </Link>

          <button
            onClick={toggleMenu}
            className={`md:hidden text-2xl text-gray-700 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={getLinkClassName(item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <nav
        className={`fixed top-[68px] left-0 w-full bg-gray-900 transform transition-transform duration-300 ease-in-out md:hidden z-40
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col p-4 gap-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={getLinkClassName(item.href, true)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
