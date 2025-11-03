import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SendIcon, CheckCircleIcon } from 'lucide-react';
export function ContactForm() {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Django backend with CSRF protection
    setIsSubmitted(true);
    setStatusMessage('Thanks for reaching out! This demo form does not send messages yet. Please connect with me on LinkedIn while the secure backend is under construction.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setIsSubmitted(false);
    setStatusMessage(null);
  };
  return <section id="contact" ref={ref} className={`py-20 px-4 md:px-8 max-w-4xl mx-auto transition-all duration-1000 scroll-mt-24 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I would love to hear
          from you.
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20" />
        <form onSubmit={handleSubmit} className="relative p-8 md:p-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl">
          {/* Note: Django backend integration required with CSRF token */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors duration-300" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors duration-300" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">
              {isSubmitted ? <>
                  <CheckCircleIcon size={20} />
                  Next Steps Below
                </> : <>
                  <SendIcon size={20} />
                  Send Message
                </>}
            </button>
          </div>
        </form>
      </div>
      {statusMessage && <p className="mt-8 text-sm text-gray-400 text-center" aria-live="polite">
          {statusMessage}{' '}
          <a href="www.linkedin.com/in/mercy-irene-wangari" target="_blank" rel="noopener noreferrer" className="text-purple-300 underline">
            Continue on LinkedIn
          </a>
          .
        </p>}
    </section>;
}
