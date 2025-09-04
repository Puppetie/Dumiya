import React, { useEffect, useRef } from "react";

const Hero = ({ setActiveSection }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId); // Clear any pending timeout
      // Set a new timeout to delay the section detection
      timeoutId = setTimeout(() => {
        if (heroRef.current) {
          const rect = heroRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Only set active section when the section is properly centered in the viewport
          // Check if the section takes up at least 50% of the viewport
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
            setActiveSection("home");
          }
        }
      }, 30); // Reduced delay for more responsive detection
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);



  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}

        {/* Traditional geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-10 h-10 border border-ff-red-200 opacity-20 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-ff-pink-200 opacity-20 -rotate-45"></div>
      </div>

      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ff-red-50/10 dark:to-ff-red-900/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              {/* Final Fantasy title with magic glow */}
              <div className="relative">
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold relative z-10 leading-tight font-sixtyfour"
                >
                  <span className="title-light dark:title-dark">
                    DUMIYA'S
                  </span>
                </h1>
                {/* Magic glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-ff-red-300 to-ff-pink-300 opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-ff-red-200 to-ff-pink-200 opacity-30 blur-md"></div>
              </div>

              <div className="relative">
                <h2
                  className="text-3xl md:text-5xl lg:text-6xl font-bold relative z-10 leading-tight font-sixtyfour"
                >
                  <span className="title-light dark:title-dark">
                    PORTFOLIO
                  </span>
                </h2>
                {/* Magic underline with glow effect */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 opacity-80"></div>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-ff-red-300 to-ff-pink-300 opacity-60 animate-pulse"></div>
              </div>
            </div>

            <p className="description-text description-text-lg text-ff-slate leading-relaxed max-w-2xl relative">
              <span className="text-ff-red-500 dark:text-ff-red-400 text-base opacity-80 font-mono">[</span>
                Passionate about gaming and art — always exploring new worlds and new ways to create.              <span className="text-ff-pink-500 dark:text-ff-pink-400 text-base opacity-80 font-mono">]</span>
            </p>
          </div>

          {/* Right Column - Floating Interest Icons */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-ff-red-500/10 to-ff-pink-500/10 dark:from-ff-red-600/20 dark:to-ff-pink-600/20 rounded-full blur-3xl"></div>
              
              {/* Floating Game Logos Container */}
              <div className="relative w-full h-full">
                                 {/* Persona Logo - Spaced out */}
                 <div className="absolute top-5 left-4 w-20 h-20 bg-white/90 dark:bg-slate-800/90 rounded-xl flex items-center justify-center shadow-lg animate-float-slow hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-red-200/30 dark:border-ff-red-600/30">
                   <img src="/assets/PersonaLogo.png" alt="Persona" className="w-16 h-16 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Persona
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                 </div>
                
                                 {/* Deltarune Logo - Spaced out */}
                 <div className="absolute top-4 right-22 w-18 h-18 bg-white/90 dark:bg-slate-800/90 rounded-lg flex items-center justify-center shadow-lg animate-float-medium hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-pink-200/30 dark:border-ff-pink-600/30">
                   <img src="/assets/DeltaruneIcon.png" alt="Deltarune" className="w-14 h-14 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Deltarune
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                 </div>
                
                                 {/* JJBA Logo - Spaced out */}
                 <div className="absolute top-26 right-63 w-18 h-18 bg-white/90 dark:bg-slate-800/90 rounded-lg flex items-center justify-center shadow-lg animate-float-fast hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-orange-200/30 dark:border-ff-orange-600/30">
                   <img src="/assets/jjbaIcon.png" alt="JoJo's Bizarre Adventure" className="w-17 h-17 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     JoJo's Bizarre Adventure
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                 </div>
                
                                 {/* Nier Logo - Spaced out */}
                 <div className="absolute top-40 -right-10 w-20 h-20 bg-white/90 dark:bg-slate-800/90 rounded-xl flex items-center justify-center shadow-lg animate-float-slow hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-slate-200/30 dark:border-ff-slate-600/30">
                   <img src="/assets/nierIcon.png" alt="NieR" className="w-18 h-18 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     NieR
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                </div>
                
                                 {/* Omori Logo - Spaced out */}
                 <div className="absolute bottom-15 left-4 w-14 h-14 bg-white/90 dark:bg-slate-800/90 rounded-lg flex items-center justify-center shadow-lg animate-float-medium hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-indigo-200/30 dark:border-ff-indigo-600/30">
                   <img src="/assets/omoriIcon.png" alt="Omori" className="w-12 h-12 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Omori
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                </div>
                
                                 {/* Final Fantasy Logo - Spaced out */}
                 <div className="absolute bottom-4 right-15 w-26 h-20 bg-white/90 dark:bg-slate-800/90 rounded-2xl flex items-center justify-center shadow-lg animate-float-fast hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-gold-200/30 dark:border-ff-gold-600/30 z-10">
                   <img src="/assets/ffIcon.png" alt="Final Fantasy" className="w-25 h-25 object-contain group-hover:animate-pulse filter invert" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Final Fantasy
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                </div>
                
                                 {/* MP Logo - Spaced out */}
                 <div className="absolute top-22 left-24 w-17 h-17 bg-white/90 dark:bg-slate-800/90 rounded-xl flex items-center justify-center shadow-lg animate-float-slow hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-purple-200/30 dark:border-ff-purple-600/30">
                   <img src="/assets/mpIcon.png" alt="MP" className="w-15 h-15 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Mob Psycho 100
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                </div>
                
                                 {/* DEX Logo - Spaced out */}
                 <div className="absolute top-32 right-17 w-20 h-16 bg-white/90 dark:bg-slate-800/90 rounded-xl flex items-center justify-center shadow-lg animate-float-medium hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-blue-200/30 dark:border-ff-blue-600/30">
                   <img src="/assets/dexIcon.png" alt="DEX" className="w-15 h-15 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Dexter
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                </div>
                
                                 {/* Hollow Knight Logo - Spaced out */}
                 <div className="absolute bottom-50 right-4 w-15 h-15 bg-white/90 dark:bg-slate-800/90 rounded-lg flex items-center justify-center shadow-lg animate-float-fast hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-green-200/30 dark:border-ff-green-600/30">
                   <img src="/assets/hkIcon.png" alt="Hollow Knight" className="w-10 h-10 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Hollow Knight
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                </div>
                
                                                  {/* EVA Logo - Spaced out */}
                 <div className="absolute bottom-20 left-20 w-17 h-17 bg-white/90 dark:bg-slate-800/90 rounded-xl flex items-center justify-center shadow-lg animate-float-slow hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-ff-cyan-200/30 dark:border-ff-cyan-600/30">
                   <img src="/assets/evaIcon.png" alt="EVA" className="w-18 h-18 object-contain group-hover:animate-pulse" />
                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ff-slate-800 dark:bg-ff-slate-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999]">
                     Neon Genesis Evangelion
                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ff-slate-800 dark:border-t-ff-slate-700"></div>
                   </div>
                </div>
                
                {/* Additional floating elements */}
                <div className="absolute top-24 right-20 w-6 h-6 bg-ff-red-400 rounded-full animate-float-slow opacity-60"></div>
                <div className="absolute bottom-24 left-20 w-4 h-4 bg-ff-pink-400 rounded-full animate-float-medium opacity-60"></div>
                <div className="absolute top-40 left-20 w-5 h-5 bg-ff-gold-400 rounded-full animate-float-fast opacity-60"></div>
                <div className="absolute bottom-40 right-16 w-3 h-3 bg-ff-purple-400 rounded-full animate-float-slow opacity-60"></div>
              </div>
              
              {/* Title */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-ff-slate-600 dark:text-ff-slate-300 text-sm font-mono tracking-wider">
                  peak fiction interests
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll indicator */}
        <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-3">
            {/* Scroll arrow */}
            <div className="text-ff-red-400 dark:text-ff-red-300 text-3xl opacity-70 animate-bounce">
              <span className="material-icons">keyboard_arrow_down</span>
            </div>
            <div className="text-ff-red-300 dark:text-ff-red-400 text-xs font-mono opacity-50 tracking-wider">
              SCROLL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
