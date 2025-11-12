import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CpuIcon, CodeIcon, CircuitBoardIcon, DatabaseIcon, WrenchIcon, ZapIcon, ServerIcon, LayersIcon } from 'lucide-react';
export function SkillsSection() {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const engineeringSkills = [{
    name: 'Embedded Systems',
    icon: CpuIcon
  }, {
    name: 'PCB Design',
    icon: CircuitBoardIcon
  }, {
    name: 'Robotics',
    icon: WrenchIcon
  }, {
    name: 'IoT Systems',
    icon: ZapIcon
  }, {
    name: 'Full-Stack Development',
    icon: CodeIcon
  }, {
    name: 'Database Design',
    icon: DatabaseIcon
  }];
  const toolsSkills = [{
    name: 'Python',
    icon: CodeIcon
  }, {
    name: 'React & TypeScript',
    icon: LayersIcon
  }, {
    name: 'Django',
    icon: ServerIcon
  }, {
    name: 'Arduino & Raspberry Pi',
    icon: CpuIcon
  }, {
    name: 'CAD',
    icon: WrenchIcon
  }, {
    name: 'Git & CI/CD',
    icon: DatabaseIcon
  }];
  const SkillCard = ({
    skill,
    index,
    category
  }: {
    skill: {
      name: string;
      icon: any;
    };
    index: number;
    category: string;
  }) => {
    const Icon = skill.icon;
    return <div className={`group relative p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
      transitionDelay: `${index * 100}ms`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-500" />
        <div className="relative flex items-center gap-4">
          <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/40 transition-colors duration-300">
            <Icon className="text-purple-400 group-hover:text-purple-300" size={24} />
          </div>
          <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      </div>;
  };
  return <section id="skills" ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        Skills & Expertise
      </h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        My comprehensive toolkit for building intelligent systems
      </p>
      <div className="space-y-16">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-purple-400">
            Engineering & Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} category="engineering" />)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-pink-400">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} category="tools" />)}
          </div>
        </div>
      </div>
    </section>;
}
