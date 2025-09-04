import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gaming from './components/Gaming'
import Art from './components/Art'
import ShowsMovies from './components/ShowsMovies'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  
  // Debug logging
  console.log('App component rendered')
  console.log('Environment:', process.env.NODE_ENV)
  console.log('User agent:', navigator.userAgent)

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-ff-slate-50 via-ff-red-50 to-ff-pink-100 dark:from-ff-slate-900 dark:via-ff-red-900 dark:to-ff-pink-900 text-ff-slate-800 dark:text-ff-slate-200 font-body transition-colors duration-300 relative overflow-hidden">
        {/* Debug indicator */}
        <div className="fixed top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs z-50">
          App Loaded
        </div>
        
        {/* Simple test content */}
        <div className="fixed top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs z-50">
          React Working
        </div>
        {/* Gaming-themed background */}
        <BackgroundElements />
        
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main content with proper left margin for desktop */}
        <main className="lg:ml-16 relative z-10">
          <Hero id="home" setActiveSection={setActiveSection} />
          <About id="about" setActiveSection={setActiveSection} />
          <Gaming id="gaming" setActiveSection={setActiveSection} />
          <Art id="art" setActiveSection={setActiveSection} />
          <ShowsMovies id="shows-movies" setActiveSection={setActiveSection} />
          <Experience id="experience" setActiveSection={setActiveSection} />
          <Contact id="contact" setActiveSection={setActiveSection} />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

// Background elements component for better organization
function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ff-slate-50 via-ff-red-50 to-ff-pink-100 dark:from-ff-slate-900 dark:via-ff-red-900 dark:to-ff-pink-900"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_rgba(239,68,68,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,_rgba(236,72,153,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_75%,_rgba(245,158,11,0.1)_0%,_transparent_50%)]"></div>
      </div>
      
      {/* Enhanced grid design */}
      <div className="absolute inset-0">
        {/* Main grid */}
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Secondary grid */}
        <div className="absolute inset-0 opacity-8 dark:opacity-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.3)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
        </div>
        
        {/* Diagonal grid */}
        <div className="absolute inset-0 opacity-6 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(245,158,11,0.25)_1px,transparent_1px),linear-gradient(-45deg,rgba(245,158,11,0.25)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
      </div>
      
      {/* Magic swirls */}
      <div className="absolute inset-0 opacity-10 dark:opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-ff-red-200 to-ff-pink-200 dark:from-ff-red-700 dark:to-ff-pink-700 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-ff-gold-200 to-ff-red-200 dark:from-ff-gold-700 dark:to-ff-red-700 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Mouse glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-8 h-8 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 rounded-full blur-md opacity-60 animate-pulse transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out" 
          style={{
            left: 'var(--mouse-x, 50%)',
            top: 'var(--mouse-y, 50%)',
            pointerEvents: 'none'
          }}
        />
      </div>
    </div>
  )
}

export default App

