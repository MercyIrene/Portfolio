import React, { lazy } from 'react';
import { useInView } from 'react-intersection-observer';
export function About() {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  return <section id="about" ref={ref} className={`py-20 px-4 md:px-8 max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-purple-500/30">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" alt="Mercy Irene Wangari" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I am a Mechatronics Engineer with a passion for creating
              intelligent systems that seamlessly integrate hardware and
              software. My work spans from embedded systems design to full-stack
              development, always pushing the boundaries of what technology can
              achieve.
            </p>
            <p>
              With experience in robotics, IoT systems, and enterprise
              automation, I bring a unique perspective that combines mechanical
              precision, electronic innovation, and software elegance. Every
              project is an opportunity to solve complex problems with creative,
              efficient solutions.
            </p>
            <p>
              When I am not engineering solutions, you will find me exploring
              fiction, experimenting in the kitchen, or tinkering with DIY
              electronics projects.
            </p>
          </div>
        </div>
      </div>
    </section>;
}