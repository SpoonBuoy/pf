"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  isGithub?: boolean;
}

export function ProjectCard({ title, description, link, isGithub = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-gray-800 transition-all transform hover:-translate-y-1 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={link} className="block h-full" target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between items-start">
          <h3 className="font-medium mb-2">{title}</h3>
          <span className={`transform transition-transform duration-300 ${isHovered ? "scale-125" : "scale-100"}`}>
            {isGithub ? <Github size={18} /> : <ArrowUpRight size={18} />}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

        {/* Animated underline that appears on hover */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out ${
            isHovered ? "w-full" : "w-0"
          }`}
        ></div>
      </a>
    </div>
  );
}
