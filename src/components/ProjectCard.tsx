import React from 'react';
import { useInView } from 'react-intersection-observer';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}
export function ProjectCard({
  title,
  description,
  image
}: ProjectCardProps) {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  return <div ref={ref} className={`group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 group-hover:from-purple-900/40 group-hover:to-pink-900/40 transition-all duration-500" />
      <div className="relative aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      <div className="relative p-6 space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>;
}
