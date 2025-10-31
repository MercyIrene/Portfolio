import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse" />
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Mercy Irene Wangari
              </span>
            </h1>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-2">
            Mechatronics Engineer
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          I design and build intelligent systems that bridge hardware and
          software — blending engineering precision with digital innovation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            <LinkedinIcon size={20} className="text-purple-400" />
            <span className="text-gray-300 group-hover:text-white">
              LinkedIn
            </span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-pink-600/20 hover:bg-pink-600/40 border border-pink-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50">
            <GithubIcon size={20} className="text-pink-400" />
            <span className="text-gray-300 group-hover:text-white">GitHub</span>
          </a>
          <a href="#contact" className="group flex items-center gap-2 px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            <MailIcon size={20} className="text-cyan-400" />
            <span className="text-gray-300 group-hover:text-white">
              Contact
            </span>
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>;
}