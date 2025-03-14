"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function MobileMenu({ activeSection, onSectionChange }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when section changes
  useEffect(() => {
    setIsOpen(false);
  }, [activeSection]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="md:hidden mobile-menu-container relative z-30">
      <button
        className="p-2 text-gray-700 dark:text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top-5">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onSectionChange("home");
            }}
            className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeSection === "home" ? "font-semibold bg-gray-50 dark:bg-gray-700" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onSectionChange("projects");
            }}
            className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeSection === "projects" ? "font-semibold bg-gray-50 dark:bg-gray-700" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onSectionChange("about");
            }}
            className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeSection === "about" ? "font-semibold bg-gray-50 dark:bg-gray-700" : ""
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onSectionChange("contact");
            }}
            className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeSection === "contact" ? "font-semibold bg-gray-50 dark:bg-gray-700" : ""
            }`}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
