import React, { lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import { RocketIcon, CpuIcon, ZapIcon, SettingsIcon } from 'lucide-react';
export function FeaturedProject() {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const features = [{
    icon: RocketIcon,
    title: 'System Design',
    description: 'Advanced liquid rocket engine architecture'
  }, {
    icon: CpuIcon,
    title: 'Automation',
    description: 'Intelligent control and monitoring systems'
  }, {
    icon: ZapIcon,
    title: 'PCB Fabrication',
    description: 'Custom circuit boards for precision control'
  }, {
    icon: SettingsIcon,
    title: 'Integration',
    description: 'Seamless hardware-software integration'
  }];
  return <div ref={ref} className={`relative overflow-hidden rounded-2xl border border-purple-500/30 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />
      <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full">
            <span className="text-purple-400 text-sm font-medium">
              MAIN PROJECT
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Augmented Ignition System for Liquid Rocket Engine
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Designed and developed a comprehensive augmented ignition system for
            liquid rocket engines, integrating advanced automation, precision
            control systems, and custom PCB fabrication. This end-to-end project
            demonstrates expertise in mechatronics, embedded systems, and
            aerospace engineering principles.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <div key={feature.title} className="p-4 bg-black/40 border border-purple-500/20 rounded-lg hover:border-purple-400/50 transition-all duration-300" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <Icon className="text-purple-400 mb-2" size={24} />
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-xs">{feature.description}</p>
                </div>;
          })}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-purple-500/30">
            <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop" alt="Augmented Ignition System" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>;
}