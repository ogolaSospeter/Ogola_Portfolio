"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaPython, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Me", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when scrolling & update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Scroll Spy: Update active section on scroll
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

  // Smooth Scrolling (Handles navigation between pages)
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();

  const targetId = href.split("#")[1];
  const isOnHomePage = pathname === "/";

  if (isOnHomePage) {
    // If already on the homepage, scroll smoothly
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  } else {
    // If on a different page, navigate first
    router.push(href);

    // Wait for navigation before scrolling
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500); // Delay allows the page to load first
  }

  setIsOpen(false);
};


  // Change Title on Visibility Change
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title =
        document.visibilityState === "visible"
          ? "Portfolio | Ogola Sospeter"
          : "Come Back To Portfolio!";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Link styling for desktop and mobile
  const getLinkClassName = (href: string, isMobile: boolean = false) => `
    text-md font-small tracking-wide transition-all duration-200
    ${
      isMobile
        ? `block px-4 py-2 hover:text-blue-500 hover:bg-gray-800 ${
            activeSection === href.split("#")[1]
              ? "text-blue-500 bg-gray-800"
              : ""
          }`
        : `relative px-2 py-2 hover:text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
            activeSection === href.split("#")[1]
              ? "text-blue-500 after:scale-x-100"
              : ""
          }`
    }
  `;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between md:pl-8 md:pr-2 px-8 py-6 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-800 transition-colors duration-200 hover:text-orange-500"
          >
            <FaPython className="text-3xl transition-colors duration-200" />
            Ogola.S
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden text-3xl text-gray-700 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <li key={index} className="text-sm font-small">
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

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-20 left-0 w-full bg-gray-900 text-white transform transition-transform duration-300 ease-in-out md:hidden z-40
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col p-3 bg-gray-900">
          {navItems.map((item, index) => (
            <li key={index} className="my-2">
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

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
