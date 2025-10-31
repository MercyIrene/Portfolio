import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpenIcon, ChefHatIcon, CpuIcon, BoxIcon } from 'lucide-react';
interface InterestCardProps {
  title: string;
  description: string;
  icon: 'BookOpen' | 'ChefHat' | 'Cpu';
}
const iconMap: Record<string, BoxIcon> = {
  BookOpen: BookOpenIcon,
  ChefHat: ChefHatIcon,
  Cpu: CpuIcon
};
export function InterestCard({
  title,
  description,
  icon
}: InterestCardProps) {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const Icon = iconMap[icon];
  return <div ref={ref} className={`group relative p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-500" />
      <div className="relative">
        <div className="mb-6 inline-block p-4 bg-purple-600/20 rounded-xl group-hover:bg-purple-600/40 transition-colors duration-300">
          <Icon className="text-purple-400 group-hover:text-purple-300" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>;
}