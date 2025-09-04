import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gaming', href: '#gaming' },
    { name: 'Art', href: '#art' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'Discord', icon: '💬', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Trakt', icon: '📺', url: '#' },
    { name: 'Backlogged', icon: '🎮', url: '#' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-ff-slate-800 via-ff-red-800 to-ff-purple-800 dark:from-ff-slate-900 dark:via-ff-red-900 dark:to-ff-purple-900 text-ff-slate-800 dark:text-white font-body">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
                             <div className="w-10 h-10 bg-gradient-to-br from-ff-red-400 to-ff-purple-500 flex items-center justify-center border border-ff-red-300 dark:border-ff-red-400 rounded-lg">
                 <span className="text-xl">🌸</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-display font-bold bg-gradient-to-r from-ff-red-400 to-ff-purple-400 bg-clip-text text-transparent">
                   GamerArtist
                 </span>
                <span className="text-xs text-ff-slate-600 dark:text-ff-slate-400 font-mono">v1.0.0</span>
              </div>
            </div>
            <p className="text-ff-slate-700 dark:text-ff-slate-300 mb-4 max-w-md font-body text-sm">
              A passionate gamer and digital artist creating immersive experiences through creativity, 
              strategy, and artistic vision. Join me on this journey of pixels and imagination.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                                     className="w-8 h-8 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center text-base hover:bg-ff-red-500 hover:border-ff-red-400 transition-all duration-200 group rounded-lg"
                  title={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-display font-bold text-ff-slate-800 dark:text-white mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                                         className="text-ff-slate-600 dark:text-ff-slate-300 hover:text-ff-red-600 dark:hover:text-ff-red-300 transition-colors duration-200 font-body text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-display font-bold text-ff-slate-800 dark:text-white mb-3">Contact</h3>
            <div className="space-y-1.5 text-xs text-ff-slate-600 dark:text-ff-slate-300 font-body">
              <p>📧 gamerartist@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>🌐 www.gamerartist.com</p>
              <p>📍 Digital Realm, Internet</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-ff-slate-300 dark:border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-ff-slate-600 dark:text-ff-slate-400 text-xs font-body">
              © {currentYear} GamerArtist. All rights reserved. 
              <span className="ml-2 text-xs font-mono">Built with React & Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-ff-slate-600 dark:text-ff-slate-400 font-body">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
                             <span className="text-ff-red-600 dark:text-ff-red-300 font-mono">v1.0.0</span>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2 text-ff-slate-600 dark:text-ff-slate-400 text-xs font-mono">
            <span>🌸</span>
            <span>Welcome to the world of gaming and art</span>
            <span>🌸</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
