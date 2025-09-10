import React, { useState, useEffect, useRef } from 'react'

const Art = ({ setActiveSection }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const artRef = useRef(null)

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId); // Clear any pending timeout
      // Set a new timeout to delay the section detection
      timeoutId = setTimeout(() => {
        if (artRef.current) {
          const rect = artRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Only set active section when the section is properly centered in the viewport
          // Check if the section takes up at least 50% of the viewport
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
            setActiveSection('art')
          }
        }
      }, 30); // Reduced delay for more responsive detection
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const categories = [
    { id: 'all', label: 'All', icon: '🎨', color: 'from-ff-red-500 to-ff-pink-500' },
    { id: 'digital', label: 'Digital Art', icon: '💻', color: 'from-ff-red-500 to-ff-red-600' },
    { id: 'concept', label: 'Concept Art', icon: '🌌', color: 'from-ff-pink-500 to-ff-pink-600' },
    { id: 'character', label: 'Character Design', icon: '👤', color: 'from-ff-gold-500 to-ff-gold-600' },
    { id: 'landscape', label: 'Landscapes', icon: '🏔️', color: 'from-ff-red-400 to-ff-red-500' },
    { id: 'abstract', label: 'Abstract', icon: '🌀', color: 'from-ff-pink-400 to-ff-pink-500' }
  ]

  const portfolioItems = [
    { id: 1, title: 'Cyberpunk Cityscape', category: 'digital', description: 'Neon-lit futuristic city with flying cars', year: '2024', image: '🌃' },
    { id: 2, title: 'Fantasy Warrior', category: 'character', description: 'Armored knight with magical sword', year: '2023', image: '⚔️' },
    { id: 3, title: 'Mountain Valley', category: 'landscape', description: 'Serene mountain landscape at sunset', year: '2023', image: '🏔️' },
    { id: 4, title: 'Abstract Emotions', category: 'abstract', description: 'Colorful representation of human emotions', year: '2024', image: '🎭' },
    { id: 5, title: 'Space Station', category: 'concept', description: 'Futuristic space station design', year: '2023', image: '🚀' },
    { id: 6, title: 'Forest Guardian', category: 'character', description: 'Mystical forest spirit character', year: '2024', image: '🌳' },
    { id: 7, title: 'Ocean Depths', category: 'landscape', description: 'Underwater scene with bioluminescent creatures', year: '2023', image: '🌊' },
    { id: 8, title: 'Digital Dreams', category: 'abstract', description: 'Surreal digital art piece', year: '2024', image: '💫' }
  ]

  const tools = [
    { name: 'Adobe Photoshop', proficiency: 90, icon: '🎨', color: 'from-ff-red-500 to-ff-red-600' },
    { name: 'Procreate', proficiency: 85, icon: '✏️', color: 'from-ff-pink-500 to-ff-pink-600' },
    { name: 'Blender', proficiency: 75, icon: '🗿', color: 'from-ff-gold-500 to-ff-gold-600' },
    { name: 'Krita', proficiency: 80, icon: '🖌️', color: 'from-ff-red-400 to-ff-red-500' },
    { name: 'Affinity Designer', proficiency: 70, icon: '📐', color: 'from-ff-pink-400 to-ff-pink-500' },
    { name: 'Clip Studio Paint', proficiency: 85, icon: '🖼️', color: 'from-ff-gold-400 to-ff-gold-500' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section
      id="art"
      ref={artRef}
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
              DIGITAL ART
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 mx-auto mb-8"></div>
          <p className="description-text description-text-lg text-ff-slate leading-relaxed max-w-2xl mx-auto">
            <span className="text-ff-red-500 dark:text-ff-red-400 text-base opacity-80 font-mono">[</span>
              Exploring the boundaries of digital creativity through character design, landscapes, and conceptual art.
            <span className="text-ff-pink-500 dark:text-ff-pink-400 text-base opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-red-600 dark:text-ff-red-400 font-sixtyfour text-center">
              PORTFOLIO
            </h3>
            
            {/* Artwork Cards */}
            <div className="space-y-4">
              {portfolioItems.slice(0, 3).map((item) => (
                <div key={item.id} className="card card-padding card-border card-border-red card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-red-500 to-ff-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{item.image}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{item.title}</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{item.category} • {item.year}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-pink-600 dark:text-ff-pink-400 font-sixtyfour text-center">
              TOOLS & SOFTWARE
            </h3>
            
            {/* Tool Cards */}
            <div className="space-y-4">
              {tools.slice(0, 3).map((tool, index) => (
                <div key={index} className="card card-padding card-border card-border-pink card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{tool.name}</h4>
                    </div>
                    <span className="text-sm text-ff-pink-600 dark:text-ff-pink-400 font-mono">{tool.proficiency}%</span>
                  </div>
                  <div className="w-full bg-ff-slate-200 dark:bg-ff-slate-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-2 bg-gradient-to-r ${tool.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: `${tool.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Art Stats & Philosophy */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-600 dark:text-ff-gold-400 font-sixtyfour text-center">
              ART STATS
            </h3>
            
            {/* Stats Cards */}
            <div className="space-y-4">
              <div className="card card-padding card-border card-border-gold card-hover text-center">
                <div className="text-3xl font-bold text-ff-gold-600 dark:text-ff-gold-400 mb-2">500+</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Artworks Created</div>
              </div>

              <div className="card card-padding card-border card-border-purple card-hover text-center">
                <div className="text-3xl font-bold text-ff-purple-600 dark:text-ff-purple-400 mb-2">6</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Software Mastered</div>
              </div>

              <div className="card card-padding card-border card-border-blue card-hover text-center">
                <div className="text-3xl font-bold text-ff-blue-600 dark:text-ff-blue-400 mb-2">3+</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Years Experience</div>
              </div>

              <div className="card card-padding card-border card-border-green card-hover text-center">
                <div className="text-3xl font-bold text-ff-green-600 dark:text-ff-green-400 mb-2">15+</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Art Styles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Art
