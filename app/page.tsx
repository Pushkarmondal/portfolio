'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import Experience from './Experience';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-900/50 p-6 rounded-lg transition-all duration-300">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <button 
          className="text-gray-400 hover:text-white focus:outline-none"
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        {children}
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          <span>GitHub</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 whitespace-nowrap">Pushkar Mondal</h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">Backend Developer</h2>
            <p className="text-base md:text-lg text-gray-400 mb-6">
              I build robust and scalable server-side applications with a focus on performance and clean architecture.
            </p>
            <div className="flex space-x-4 mb-12">
              <a href="https://github.com/Pushkarmondal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pushkar-mondal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/pushkarmondal79" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:nishitm060@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-gray-700 transition-all duration-300">
                <Image 
                  src="/Gemini_Generated_Image_guqbalguqbalguqb.png" 
                  alt="Pushkar Mondal" 
                  fill
                  sizes="(max-width: 768px) 8rem, (max-width: 1024px) 10rem, 12rem"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">About Me</h2>
        <div>
          <p className="text-gray-300 mb-4">
          I&apos;m a passionate backend developer with expertise in designing and implementing efficient robust solutions. 
          I love solving complex problems and building scalable systems that can handle millions of requests.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-white">Skills & Tools</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-200 border-b border-gray-700 pb-2">DevOps & Cloud</h3>
            <ul className="flex flex-wrap gap-4">
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Docker, Kubernetes (Kind, Minikube, EKS)
              </li>
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Terraform, GitHub Actions, CI/CD
              </li>
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                AWS (EC2, S3, Lambda, Boto3), CloudWatch
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-200 border-b border-gray-700 pb-2">Backend Development</h3>
            <ul className="flex flex-wrap gap-4">
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Node.js, Express, Bun, TypeScript
              </li>
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                PostgreSQL, MongoDB, Prisma ORM
              </li>
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                WebSocket, Redis, Kafka, WebRTC
              </li>
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                REST APIs, JSON handling, JWT, OAuth, OpenAPI
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-200 border-b border-gray-700 pb-2">Frontend</h3>
            <ul className="flex flex-wrap gap-4">
              <li className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                React, NextJS
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Experience />

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-white">Projects</h2>
        <div className="space-y-4">
          <ProjectCard
            title="AI Code Reviewer"
            description="An AI-powered backend service that analyzes code for bugs, performance, security issues, and best practices using Google's GenAI."
            technologies={['Node.js', 'Express', 'Google GenAI', 'Vite', 'TypeScript']}
            githubLink="https://github.com/Pushkarmondal/Ai_code_review"
          />

          <ProjectCard
            title="BetterUptime DApp"
            description="A decentralized uptime monitoring app built using Turborepo, supporting real-time alerts and multi-service monitoring."
            technologies={['Bun', 'TypeScript', 'Prisma', 'PostgreSQL', 'WebSockets']}
            githubLink="https://github.com/Pushkarmondal/betteruptime-dapp"
          />

          <ProjectCard
            title="Medium Full Stack"
            description="A Medium-style blogging platform with real-time features, clean design, and seamless authentication."
            technologies={['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma']}
            githubLink="https://github.com/Pushkarmondal/frontend-medium"
          />

          <ProjectCard
            title="WalletCore"
            description="Secure backend API for a digital wallet, supports account creation, authentication, and money transfer (Paytm-style)."
            technologies={['Node.js', 'Express', 'MongoDB', 'React']}
            githubLink="https://github.com/Pushkarmondal/Payment-full-stack"
          />

          <ProjectCard
            title="Second Brain"
            description="A website for organizing knowledge — save and share documents, notes, and links."
            technologies={['Node.js', 'Express', 'TypeScript', 'Prisma', 'React']}
            githubLink="https://github.com/Pushkarmondal/Second-Brain"
          />

          <ProjectCard
            title="BidCraft"
            description="A real-time auction platform where users can create auctions, place bids, and announce winners — built with WebSockets and secure authentication."
            technologies={['Node.js', 'Express', 'TypeScript', 'Prisma', 'React', 'WebSockets', 'TailwindCSS']}
            githubLink="https://github.com/Pushkarmondal/live_bidding_website"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-green-400 mt-2">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Real-time bidding system
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Live auctions with status indicators
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Secure JWT-based auth
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                WebSocket-powered updates
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Admin approval system
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
        <div className="bg-slate-900/50 p-6 rounded-lg">
          <p className="text-gray-300 mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
          <a 
            href="mailto:nishitm060@gmail.com" 
            className="inline-block bg-slate-300 hover:bg-slate-400 text-black font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
