"use client";

import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Function to show the selected section
  const showSection = (section: string) => {
    setActiveSection(section);
    // Update URL hash without scrolling
    window.history.pushState(null, "", `#${section}`);
  };

  // Initialize the active section based on the URL hash on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ["home", "projects", "about", "contact"].includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full py-6 flex justify-between items-center px-4 md:justify-center md:gap-8 border-b border-gray-300 dark:border-gray-700 bg-[#e6e6e6] bg-opacity-50 dark:bg-[#121212] dark:bg-opacity-50 backdrop-blur-sm">
        {/* Logo/Site Name - Only visible on mobile */}
        <div className="md:hidden text-lg font-semibold">Arsln.dev</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:gap-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              showSection("home");
            }}
            className={`text-base md:text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
              activeSection === "home" ? "font-semibold" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              showSection("projects");
            }}
            className={`text-base md:text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
              activeSection === "projects" ? "font-semibold" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              showSection("about");
            }}
            className={`text-base md:text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
              activeSection === "about" ? "font-semibold" : ""
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              showSection("contact");
            }}
            className={`text-base md:text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
              activeSection === "contact" ? "font-semibold" : ""
            }`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu activeSection={activeSection} onSectionChange={showSection} />
      </nav>

      {/* Content Sections */}
      <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
        {/* Home Section */}
        <div
          id="home"
          className={`content section ${activeSection === "home" ? "block" : "hidden"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Hey, I'm Arsalan</h2>
          <p className="mb-4">SDE1 at Lets Transport with expertise in NestJS, Golang, and various web technologies. Passionate about backend development and building scalable services.</p>
          <p className="mb-2">Connect with me:</p>
          <ul className="list-none space-y-2 ml-4">
            <li>
              <a href="mailto:arsalanrashidthoker@gmail.com" className="link dark:text-blue-400 dark:hover:text-blue-300">Email</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arsalan-rashid-thoker/" className="link dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/SpoonBuoy/" className="link dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </div>

        {/* Projects Section */}
        <div
          id="projects"
          className={`content section ${activeSection === "projects" ? "block" : "hidden"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Projects</h2>
          <ul className="list-none grid gap-4 grid-cols-1 md:grid-cols-2">
            <li>
              <ProjectCard
                title="Shurl"
                description="URL Shortener"
                link="https://arsalan.live/shurl"
              />
            </li>
            <li>
              <ProjectCard
                title="Golru"
                description="LRU Cache Implementation in Go with React Dashboard"
                link="https://github.com/SpoonBuoy/golru"
                isGithub={true}
              />
            </li>
            <li>
              <ProjectCard
                title="Ruscii"
                description="Rust-based simple text art generator"
                link="https://github.com/SpoonBuoy/ruscii"
                isGithub={true}
              />
            </li>
            <li>
              <ProjectCard
                title="Boolean"
                description="C++ Boolean Expression Evaluator"
                link="https://github.com/SpoonBuoy/boolean"
                isGithub={true}
              />
            </li>
            <li>
              <ProjectCard
                title="OSKA"
                description="Notification Alerter"
                link="https://github.com/SpoonBuoy/oska"
                isGithub={true}
              />
            </li>
            <li>
              <ProjectCard
                title="Img-Dash"
                description="Full stack image dashboard"
                link="http://65.0.53.93:3000/"
              />
            </li>
            <li>
              <ProjectCard
                title="Keymoji"
                description="Chrome Extension"
                link="https://github.com/SpoonBuoy/boolean"
                isGithub={true}
              />
            </li>
            <li>
              <ProjectCard
                title="SPALM"
                description="Self Propulsive Auto Landing Machine"
                link="https://github.com/SpoonBuoy/SPALM"
                isGithub={true}
              />
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div
          id="about"
          className={`content section ${activeSection === "about" ? "block" : "hidden"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">A passionate software developer focused on backend systems and efficient code. I enjoy building scalable solutions and exploring new technologies.</p>
          <p className="mb-4">Currently working at Lets Transport, contributing to robust systems in NestJS and other technologies.</p>
          <p className="mb-4">I have done my Bachelors in Electrical Engineering from <a className="link dark:text-blue-400 dark:hover:text-blue-300" href="https://nitsri.ac.in" target="_blank" rel="noopener noreferrer">NIT Srinagar</a>, graduated in 2023 with 8.2 CGPA</p>

          <h3 className="text-xl font-semibold mb-2">Competitive Programming</h3>
          <ul className="list-none space-y-2 mb-4 ml-4">
            <li>
              <a href="https://codeforces.com/profile/arsln" className="link dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">Codeforces Profile</a>
            </li>
            <li>
              <a href="https://www.codechef.com/users/northpole" className="link dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">Codechef Profile</a>
            </li>
          </ul>

          <p>
            <a href="https://resume.arsln.dev/resume" className="link dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">View My Resume</a>
          </p>
        </div>

        {/* Contact Section */}
        <div
          id="contact"
          className={`content section ${activeSection === "contact" ? "block" : "hidden"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-6">Feel free to reach out with any questions or opportunities.</p>

          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
            // Clear form fields
            const form = e.target as HTMLFormElement;
            form.reset();
          }}>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
