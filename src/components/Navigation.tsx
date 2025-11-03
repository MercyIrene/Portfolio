import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    href: '#home',
    label: 'Home'
  }, {
    href: '#about',
    label: 'About'
  }, {
    href: '#skills',
    label: 'Skills'
  }, {
    href: '#projects',
    label: 'Projects'
  }, {
    href: '#interests',
    label: 'Interests'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-purple-900/80 via-purple-800/60 to-pink-900/80 backdrop-blur-lg border-b border-purple-500/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            MIW
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </a>)}
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <div className="md:hidden bg-gradient-to-b from-purple-950/95 via-purple-900/90 to-pink-950/95 backdrop-blur-lg border-t border-purple-500/30">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => <a key={link.href} href={link.href} className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>)}
          </div>
        </div>}
    </nav>;
}
