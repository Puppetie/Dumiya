import React, { useState, useEffect, Suspense, lazy } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load components for better performance
const About = lazy(() => import('./components/About'))
const Gaming = lazy(() => import('./components/Gaming'))
const Art = lazy(() => import('./components/Art'))
const ShowsMovies = lazy(() => import('./components/ShowsMovies'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [activeSection, setActiveSection] = useState('home')
  


  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-ff-slate-50 via-ff-red-50 to-ff-pink-100 dark:from-ff-slate-900 dark:via-ff-red-900 dark:to-ff-pink-900 text-ff-slate-800 dark:text-ff-slate-200 font-body transition-colors duration-300 relative overflow-hidden">
        {/* Gaming-themed background */}
        <BackgroundElements />
        
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main content with proper left margin for desktop */}
        <main className="lg:ml-16 relative z-10">
          <Hero id="home" setActiveSection={setActiveSection} />
          <Suspense fallback={<LoadingSpinner />}>
            <About id="about" setActiveSection={setActiveSection} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Gaming id="gaming" setActiveSection={setActiveSection} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Art id="art" setActiveSection={setActiveSection} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ShowsMovies id="shows-movies" setActiveSection={setActiveSection} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Experience id="experience" setActiveSection={setActiveSection} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact id="contact" setActiveSection={setActiveSection} />
          </Suspense>
        </main>
        
        <Suspense fallback={<div className="h-32" />}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

// Background elements component for better organization - memoized for performance
const BackgroundElements = React.memo(function BackgroundElements() {
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
      
    </div>
  )
})

// Loading spinner component for lazy loading
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-ff-red-200 border-t-ff-red-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-ff-pink-500 rounded-full animate-spin animation-delay-500"></div>
      </div>
    </div>
  )
}

export default App

