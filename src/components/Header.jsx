import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const { isDark, toggleTheme } = useTheme()
  const mobileMenuRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false)
      })
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home', description: 'Welcome to my portfolio', bgColor: 'from-ff-red-50 to-ff-pink-50', darkBgColor: 'from-ff-red-900 to-ff-pink-900' },
    { id: 'about', label: 'About', icon: 'person', description: 'Learn about my journey', bgColor: 'from-ff-green-50 to-ff-red-50', darkBgColor: 'from-ff-green-900 to-ff-red-900' },
    { id: 'gaming', label: 'Gaming', icon: 'sports_esports', description: 'My gaming achievements', bgColor: 'from-ff-pink-50 to-ff-red-50', darkBgColor: 'from-ff-pink-900 to-ff-red-900' },
    { id: 'art', label: 'Art', icon: 'palette', description: 'Digital art portfolio', bgColor: 'from-ff-pink-50 to-ff-orange-50', darkBgColor: 'from-ff-pink-900 to-ff-orange-900' },
    { id: 'shows-movies', label: 'Shows & Movies', icon: 'movie', description: 'Favorite entertainment', bgColor: 'from-ff-purple-50 to-ff-pink-50', darkBgColor: 'from-ff-purple-900 to-ff-pink-900' },
    { id: 'experience', label: 'Experience', icon: 'work', description: 'Work & projects', bgColor: 'from-ff-yellow-50 to-ff-red-50', darkBgColor: 'from-ff-yellow-900 to-ff-red-900' },
    { id: 'contact', label: 'Contact', icon: 'email', description: 'Get in touch', bgColor: 'from-ff-red-50 to-ff-pink-50', darkBgColor: 'from-ff-red-900 to-ff-pink-900' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Add a small delay to ensure smooth scrolling
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
      // Don't set active section immediately - let scroll detection handle it
      // setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  const handleKeyDown = (event, sectionId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToSection(sectionId)
    }
  }

  return (
    <>
      {/* Left Book Navigation - Desktop Only */}
      <nav 
        ref={navRef}
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block transition-all duration-300`}
        aria-label="Main navigation"
      >
        <div className="relative">
          {/* Navigation Pages - each with its own book spine */}
          <div className="space-y-3">
            {navItems.map((item) => (
              <div key={item.id} className="group relative">
                {/* Individual book spine for each nav item */}
                <div 
                  className={`w-16 h-16 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-r-lg ${
                    activeSection === item.id 
                      ? 'shadow-xl shadow-rose-300/50 dark:shadow-slate-400/40' 
                      : 'group-hover:bg-gray-300 dark:group-hover:bg-slate-700'
                  }`}
                  style={{
                    backgroundColor: 'rgb(248 250 252)' // slate-50 - very light
                  }}
                  data-theme="light"
                ></div>
                
                {/* Page that peeks out */}
                <button
                  className={`nav-button absolute left-0 top-0 w-16 h-16 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer rounded-md focus:outline-none ${
                    activeSection === item.id 
                      ? 'scale-110 shadow-lg ring-2 ring-rose-200 dark:ring-slate-400' 
                      : 'hover:scale-125 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-slate-400/30'
                  }`}
                  style={{
                    backgroundColor: activeSection === item.id 
                      ? (isDark ? 'rgb(51 65 85)' : 'rgb(254 226 226)') 
                      : (isDark ? 'rgb(30 41 59)' : 'rgb(248 250 252)')
                  }}
                  data-theme="light"
                  data-dark-bg="rgb(30 41 59)" // slate-800 - darker
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-describedby={`tooltip-${item.id}`}
                  role="button"
                  tabIndex={0}
                >
                  {/* Enhanced active indicator */}
                  {activeSection === item.id && (
                    <>
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-400 dark:to-pink-400 rounded-full shadow-lg transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-400 dark:to-pink-400 rounded-full animate-ping opacity-60 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
                                              {/* Enhanced glow effect */}
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-rose-500/10 to-pink-500/10 dark:from-rose-400/10 dark:to-pink-400/10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
                        {/* Dark mode glow effect */}
                        <div className="absolute inset-0 rounded-md dark:bg-gradient-to-r dark:from-rose-400/5 dark:to-pink-400/5 dark:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
                    </>
                  )}
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center">
                      <span className={`material-icons text-lg transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        activeSection === item.id 
                          ? 'scale-125 opacity-100 text-rose-600 dark:text-rose-400' 
                          : 'opacity-70 text-gray-600 dark:text-gray-300 group-hover:opacity-100 group-hover:scale-125 group-hover:text-rose-500 dark:group-hover:text-rose-300'
                      }`}>{item.icon}</span>
                    </div>
                  </div>
                </button>
                
                {/* Enhanced tooltip with better positioning */}
                <div 
                  id={`tooltip-${item.id}`}
                  className={`absolute left-20 top-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-4 py-3 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none min-w-max z-50 ${
                    hoveredItem === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  role="tooltip"
                  aria-hidden={hoveredItem !== item.id}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="material-icons text-xl">{item.icon}</span>
                    <div className="font-ui font-bold text-slate-700 dark:text-slate-200 text-lg">{item.label}</div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-body max-w-48 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {activeSection === item.id ? '📍 Active' : 'Click to navigate'}
                    </div>
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-white dark:bg-slate-800 border-l border-b border-slate-200 dark:border-slate-600 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Theme Toggle Button - Fixed positioning */}
      <div className="fixed top-4 right-4 z-[60] hidden lg:block">
        <button
          onClick={toggleTheme}
          className="theme-button w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-out focus:outline-none shadow-lg ring-2 ring-rose-200 dark:ring-slate-400 hover:shadow-xl hover:shadow-rose-200/30 dark:hover:shadow-slate-400/30"
          style={{
            backgroundColor: isDark ? '#1e293b' : '#f8fafc'
          }}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <div className="text-xl material-icons transition-all duration-300">
            {isDark ? (
              <span className="text-yellow-500 hover:text-yellow-400" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))' }}>
                light_mode
              </span>
            ) : (
              <span className="text-indigo-600 hover:text-indigo-500" style={{ filter: 'drop-shadow(0 0 8px rgba(79, 70, 229, 0.5))' }}>
                dark_mode
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Top Header for Mobile */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-body lg:hidden`}
        style={{
          backgroundColor: isScrolled 
            ? (isDark ? '#7f1d1d' : 'rgba(255, 255, 255, 0.95)')
            : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-ff-red-400 to-ff-pink-500 flex items-center justify-center border border-ff-red-300 dark:border-ff-red-400 rounded-lg">
                <span className="text-xl material-icons">sports_esports</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-sixtyfour font-bold title-light dark:title-dark">
                  Final Fantasy Portfolio
                </span>
                <span className="text-xs text-ff-slate-500 dark:text-ff-slate-400 font-mono">v1.0.0</span>
              </div>
            </div>

            {/* Theme Toggle Button for Mobile */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 border-2 border-rose-200 dark:border-slate-400 rounded-lg focus:outline-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-200/30 dark:hover:shadow-slate-400/30"
                style={{
                  backgroundColor: isDark ? '#1e293b' : '#f8fafc'
                }}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <span className="text-xl material-icons transition-all duration-300">
                  {isDark ? (
                    <span className="text-yellow-500 hover:text-yellow-400" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))' }}>
                      light_mode
                    </span>
                  ) : (
                    <span className="text-indigo-600 hover:text-indigo-500" style={{ filter: 'drop-shadow(0 0 8px rgba(79, 70, 229, 0.5))' }}>
                      dark_mode
                    </span>
                  )}
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 border-2 border-rose-200 dark:border-slate-400 rounded-lg focus:outline-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-200/30 dark:hover:shadow-slate-400/30 focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
                style={{
                  backgroundColor: isDark ? '#1e293b' : '#f8fafc'
                }}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="text-xl material-icons text-rose-600 dark:text-rose-400">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div 
            ref={mobileMenuRef}
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div 
              className="backdrop-blur-md border-t border-ff-red-300 dark:border-ff-red-600 shadow-lg rounded-b-lg"
              style={{
                backgroundColor: isDark ? '#7f1d1d' : 'rgba(255, 255, 255, 0.95)'
              }}
            >
              <nav className="px-4 py-4 space-y-2" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 transition-all duration-200 font-ui border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-rose-600 to-pink-600 dark:from-slate-700 dark:to-slate-600 text-white border-rose-500 shadow-lg ring-2 ring-rose-200 ring-opacity-50 scale-105'
                        : 'text-gray-600 dark:text-gray-200 border-transparent hover:border-rose-300 dark:hover:border-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20'
                    }`}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    <span className={`material-icons transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      activeSection === item.id ? 'scale-110 opacity-100 text-white dark:text-white' : 'opacity-70 text-gray-500 dark:text-gray-300 hover:opacity-100'
                    }`}>{item.icon}</span>
                    <span className={`font-medium ${
                      activeSection === item.id ? 'font-bold' : ''
                    }`}>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="ml-auto text-rose-200 material-icons">location_on</span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
