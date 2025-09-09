import React, { useState, useEffect, useRef } from 'react'

const Gaming = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('favorites')
  const gamingRef = useRef(null)

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId); // Clear any pending timeout
      // Set a new timeout to delay the section detection
      timeoutId = setTimeout(() => {
        if (gamingRef.current) {
          const rect = gamingRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Only set active section when the section is properly centered in the viewport
          // Check if the section takes up at least 50% of the viewport
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
            setActiveSection('gaming')
          }
        }
      }, 30); // Reduced delay for more responsive detection
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const favoriteGames = [
    { name: 'Final Fantasy XVI', genre: 'Action RPG', hours: 200, rating: 10, platform: 'PS5', color: 'from-ff-red-500 to-ff-pink-500' },
    { name: 'Final Fantasy XIV', genre: 'MMORPG', hours: 150, rating: 9, platform: 'PC', color: 'from-ff-pink-500 to-ff-gold-500' },
    { name: 'Final Fantasy VII Remake', genre: 'Action RPG', hours: 120, rating: 9, platform: 'PS5', color: 'from-ff-red-400 to-ff-red-600' },
    { name: 'Final Fantasy XV', genre: 'Action RPG', hours: 180, rating: 8, platform: 'PC', color: 'from-ff-gold-500 to-ff-gold-600' },
    { name: 'Final Fantasy X', genre: 'Turn-based RPG', hours: 80, rating: 10, platform: 'PC', color: 'from-ff-pink-400 to-ff-pink-600' },
    { name: 'Final Fantasy VI', genre: 'Turn-based RPG', hours: 160, rating: 10, platform: 'PC', color: 'from-ff-red-500 to-ff-red-600' }
  ]

  const achievements = [
    { title: 'Warrior of Light', description: 'Completed FFXVI main story', game: 'FF XVI', date: '2023', color: 'from-ff-red-500 to-ff-pink-500' },
    { title: 'Crystal Master', description: '100% completion in FFXIV', game: 'FF XIV', date: '2022', color: 'from-ff-pink-500 to-ff-gold-500' },
    { title: 'No Death Run', description: 'Completed FFVII Remake without dying', game: 'FF VII', date: '2023', color: 'from-ff-red-400 to-ff-red-600' },
    { title: 'Master Artist', description: 'Created 50+ custom characters', game: 'FF XIV', date: '2023', color: 'from-ff-gold-500 to-ff-gold-600' },
    { title: 'Trophy Hunter', description: 'Platinum trophy in FFXVI', game: 'FF XVI', date: '2023', color: 'from-ff-pink-400 to-ff-pink-600' },
    { title: 'Legendary Hero', description: 'Completed FFVI on highest difficulty', game: 'FF VI', date: '2024', color: 'from-ff-red-500 to-ff-red-600' }
  ]

  const gamingStats = [
    { stat: 'Total Hours', value: '1000+', icon: '⏰', color: 'from-ff-red-500 to-ff-red-600' },
    { stat: 'Games Completed', value: '50+', icon: '🏆', color: 'from-ff-pink-500 to-ff-pink-600' },
    { stat: 'Achievements', value: '200+', icon: '🎯', color: 'from-ff-gold-500 to-ff-gold-600' },
    { stat: 'Platforms', value: '5', icon: '🖥️', color: 'from-ff-red-400 to-ff-red-500' },
    { stat: 'Favorite Genre', value: 'RPG', icon: '⚔️', color: 'from-ff-pink-400 to-ff-pink-500' },
    { stat: 'Speed Runs', value: '15+', icon: '🏃', color: 'from-ff-gold-400 to-ff-gold-500' }
  ]

  const tabs = [
    { id: 'favorites', label: 'Favorite Games', icon: '🎮', color: 'from-ff-red-500 to-ff-pink-500' },
    { id: 'achievements', label: 'Achievements', icon: '🏆', color: 'from-ff-pink-500 to-ff-gold-500' },
    { id: 'stats', label: 'Gaming Stats', icon: '📊', color: 'from-ff-gold-500 to-ff-red-500' }
  ]

  return (
    <section
      id="gaming"
      ref={gamingRef}
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
              GAMING PROFILE
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 mx-auto mb-8"></div>
          <p className="description-text description-text-lg text-ff-slate leading-relaxed max-w-2xl mx-auto">
            <span className="text-ff-red-500 dark:text-ff-red-400 text-base opacity-80 font-mono">[</span>
              From strategic RPGs to action-packed adventures, discover my gaming journey and achievements.
            <span className="text-ff-pink-500 dark:text-ff-pink-400 text-base opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Favorite Games Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-red-600 dark:text-ff-red-400 font-sixtyfour text-center">
              FAVORITE GAMES
            </h3>
            
            {/* Game Cards */}
            <div className="space-y-4">
              {favoriteGames.slice(0, 3).map((game, index) => (
                <div key={index} className="card card-padding card-border card-border-red card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-red-500 to-ff-red-600 rounded-lg flex items-center justify-center">
                      <span className="material-icons text-white text-xl">sports_esports</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{game.name}</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{game.genre} • {game.platform}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-sm">
                    <span className="text-ff-red-600 dark:text-ff-red-400 font-mono">{game.hours}h played</span>
                    <span className="text-ff-pink-600 dark:text-ff-pink-400 font-mono">{game.rating}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-pink-600 dark:text-ff-pink-400 font-sixtyfour text-center">
              ACHIEVEMENTS
            </h3>
            
            {/* Achievement Cards */}
            <div className="space-y-4">
              {achievements.slice(0, 3).map((achievement, index) => (
                <div key={index} className="card card-padding card-border card-border-pink card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-pink-500 to-ff-pink-600 rounded-lg flex items-center justify-center">
                      <span className="material-icons text-white text-xl">emoji_events</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{achievement.title}</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{achievement.game} • {achievement.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming Stats Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-600 dark:text-ff-gold-400 font-sixtyfour text-center">
              GAMING STATS
            </h3>
            
            {/* Stats Cards */}
            <div className="space-y-4">
              {gamingStats.slice(0, 4).map((stat, index) => (
                <div key={index} className="card card-padding card-border card-border-gold card-hover text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-ff-gold-600 dark:text-ff-gold-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{stat.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gaming
