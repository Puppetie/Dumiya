import React, { useEffect, useRef } from 'react'

const Contact = ({ setActiveSection }) => {
  const contactRef = useRef(null)

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId); // Clear any pending timeout
      // Set a new timeout to delay the section detection
      timeoutId = setTimeout(() => {
        if (contactRef.current) {
          const rect = contactRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Only set active section when the section is properly centered in the viewport
          // Check if the section takes up at least 50% of the viewport
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
            setActiveSection('contact')
          }
        }
      }, 30); // Reduced delay for more responsive detection
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const socialLinks = [
    { name: 'Discord', icon: '💬', url: '#', color: 'from-ff-indigo-500 to-ff-purple-500' },
    { name: 'Twitter (X)', icon: '🐦', url: '#', color: 'from-ff-red-400 to-ff-cyan-500' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'from-ff-purple-500 to-ff-pink-500' },
    { name: 'Trakt', icon: '📺', url: '#', color: 'from-ff-orange-500 to-ff-red-500' },
    { name: 'Backlogged', icon: '🎮', url: '#', color: 'from-ff-green-500 to-ff-emerald-500' }
  ]

  return (
    <section
      id="contact"
      ref={contactRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-10 h-10 border border-ff-red-200 opacity-20 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-ff-pink-200 opacity-20 -rotate-45"></div>
      </div>

      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ff-red-50/10 dark:to-ff-red-900/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 leading-tight font-sixtyfour mb-6">
            <span className="title-light dark:title-dark">
              GET IN TOUCH
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 mx-auto mb-8"></div>
          <p className="description-text description-text-lg text-ff-slate leading-relaxed max-w-2xl mx-auto">
            <span className="text-ff-red-500 dark:text-ff-red-400 text-base opacity-80 font-mono">[</span>
            Ready to collaborate on a project, discuss gaming strategies, or just chat about art? Let's connect!
            <span className="text-ff-pink-500 dark:text-ff-pink-400 text-base opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-red-600 dark:text-ff-red-400 font-sixtyfour text-center">
              SOCIAL MEDIA
          </h3>
            
            {/* Social Cards */}
            <div className="space-y-4">
              {socialLinks.slice(0, 3).map((social, index) => (
                <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-red-200/30 dark:border-ff-red-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-red-500 to-ff-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{social.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{social.name}</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Connect & Chat</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

          {/* Gaming Platforms Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-pink-600 dark:text-ff-pink-400 font-sixtyfour text-center">
              GAMING PLATFORMS
            </h3>
            
            {/* Platform Cards */}
            <div className="space-y-4">
              {socialLinks.slice(3).map((social, index) => (
                <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-pink-200/30 dark:border-ff-pink-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-pink-500 to-ff-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{social.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{social.name}</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Gaming & Tracking</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-600 dark:text-ff-gold-400 font-sixtyfour text-center">
              CONTACT INFO
            </h3>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-gold-200/30 dark:border-ff-gold-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-gold-500 to-ff-gold-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Response Time</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Within 24 hours</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                  I typically respond quickly to messages. For urgent gaming questions, Discord is fastest!
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-blue-200/30 dark:border-ff-blue-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-blue-500 to-ff-blue-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">favorite</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Best For</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Collaboration & Chat</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                  Art commissions, gaming discussions, and creative collaborations are always welcome!
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-green-200/30 dark:border-ff-green-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-green-500 to-ff-green-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">language</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Languages</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">English & More</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                  Comfortable communicating in multiple languages for international collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
