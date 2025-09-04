import React, { useEffect, useRef } from 'react'

const About = ({ setActiveSection }) => {
  const aboutRef = useRef(null)

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId); // Clear any pending timeout
      // Set a new timeout to delay the section detection
      timeoutId = setTimeout(() => {
        if (aboutRef.current) {
          const rect = aboutRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Only set active section when the section is properly centered in the viewport
          // Check if the section takes up at least 50% of the viewport
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
            setActiveSection('about')
          }
        }
      }, 30); // Reduced delay for more responsive detection
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const skills = [
    { name: 'Digital Art', level: 90, color: 'from-ff-pink-500 to-ff-red-500' },
    { name: 'Gaming Strategy', level: 85, color: 'from-ff-red-500 to-ff-orange-500' },
    { name: 'Creative Design', level: 88, color: 'from-ff-pink-500 to-ff-orange-500' },
    { name: 'Problem Solving', level: 82, color: 'from-ff-green-500 to-ff-emerald-500' },
    { name: 'Team Collaboration', level: 87, color: 'from-ff-orange-500 to-ff-red-500' },
    { name: 'Technical Skills', level: 80, color: 'from-ff-indigo-500 to-ff-red-500' }
  ]

  return (
    <section
      id="about"
      ref={aboutRef}
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
              ABOUT ME
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 mx-auto mb-8"></div>
          <p className="description-text description-text-lg text-ff-slate leading-relaxed max-w-2xl mx-auto">
            <span className="text-ff-red-500 dark:text-ff-red-400 text-base opacity-80 font-mono">[</span>
              A passionate gamer and digital artist who believes in the power of creativity and strategic thinking.
            <span className="text-ff-pink-500 dark:text-ff-pink-400 text-base opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-red-600 dark:text-ff-red-400 font-sixtyfour text-center">
              SKILLS & EXPERTISE
            </h3>
            
            {/* Skill Cards */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-red-200/30 dark:border-ff-red-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{skill.name}</h4>
                    <span className="text-sm text-ff-red-600 dark:text-ff-red-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-ff-slate-200 dark:bg-ff-slate-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-2 bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-pink-600 dark:text-ff-pink-400 font-sixtyfour text-center">
              MY JOURNEY
            </h3>
            
            {/* Journey Cards */}
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-pink-200/30 dark:border-ff-pink-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-pink-500 to-ff-pink-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">sports_esports</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Gaming Journey</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">5+ Years Experience</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                  From pixelated adventures to modern masterpieces, gaming has been my constant companion.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-purple-200/30 dark:border-ff-purple-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-purple-500 to-ff-purple-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">palette</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Artistic Path</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">3+ Years Experience</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                  Digital art is my canvas for expressing the worlds I imagine and bringing ideas to life.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-gold-200/30 dark:border-ff-gold-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-gold-500 to-ff-gold-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">auto_awesome</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">What Drives Me</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Passion & Creativity</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                  Constantly pushing boundaries and exploring new challenges in gaming and art.
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-600 dark:text-ff-gold-400 font-sixtyfour text-center">
              ACHIEVEMENTS
            </h3>
            
            {/* Stats Cards */}
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-red-200/30 dark:border-ff-red-600/30 text-center">
                <div className="text-3xl font-bold text-ff-red-600 dark:text-ff-red-400 mb-2">5+</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Years Gaming</div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-purple-200/30 dark:border-ff-purple-600/30 text-center">
                <div className="text-3xl font-bold text-ff-purple-600 dark:text-ff-purple-400 mb-2">3+</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Years Art</div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-blue-200/30 dark:border-ff-blue-600/30 text-center">
                <div className="text-3xl font-bold text-ff-blue-600 dark:text-ff-blue-400 mb-2">20+</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Games Mastered</div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-green-200/30 dark:border-ff-green-600/30 text-center">
                <div className="text-3xl font-bold text-ff-green-600 dark:text-ff-green-400 mb-2">100+</div>
                <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Artworks Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
