import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProject } from './components/FeaturedProject';
import { ProjectCard } from './components/ProjectCard';
import { InterestCard } from './components/InterestCard';
import { ContactForm } from './components/ContactForm';
import { ParticleBackground } from './components/ParticleBackground';
export function App() {
  return <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsSection />
        <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Engineering solutions that bridge hardware and software innovation
          </p>
          <FeaturedProject />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <ProjectCard title="Enterprise Architecture Automation" description="Automated enterprise architecture workflows and digital transformation solutions" image="/images/avolution-abacus.webp" />
            <ProjectCard title="Smart Farm & IoT Systems" description="IoT-enabled agricultural monitoring and automation systems" image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" />
            <ProjectCard title="Robotics Training Modules" description="Educational robotics curriculum and hands-on training systems" image="/images/uArm.jpg" />
          </div>
        </section>
        <section id="interests" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Interests & Insights
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Beyond engineering - exploring creativity and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InterestCard title="Reading Fiction" description="Exploring narratives that inspire creative problem-solving" icon="BookOpen" href="https://mercyirene.com/blog/reading-fiction" />
            <InterestCard title="Cooking" description="Experimenting with recipes as a form of systematic innovation" icon="ChefHat" href="https://mercyirene.com/blog/culinary-creations" />
            <InterestCard title="DIY Electronics" description="Building and tinkering with circuits and embedded systems" icon="Cpu" href="https://mercyirene.com/projects/diy-electronics" />
          </div>
        </section>
        <ContactForm />
        <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-800">
          <p>&copy; 2025 MercyIrene.com | All rights reserved.</p>
        </footer>
      </main>
    </div>;
}
