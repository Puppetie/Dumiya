import React, { useEffect, useRef } from "react";

const ShowsMovies = ({ setActiveSection }) => {
  const showsMoviesRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (showsMoviesRef.current) {
          const rect = showsMoviesRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
            setActiveSection("shows-movies");
          }
        }
      }, 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <section
      id="shows-movies"
      ref={showsMoviesRef}
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
              SHOWS & MOVIES
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 mx-auto mb-8"></div>
          <p className="description-text description-text-lg text-ff-slate leading-relaxed max-w-2xl mx-auto">
            <span className="text-ff-red-500 dark:text-ff-red-400 text-base opacity-80 font-mono">[</span>
              My favorite shows and movies that inspire my creativity and storytelling.
            <span className="text-ff-pink-500 dark:text-ff-pink-400 text-base opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Shows Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-red-600 dark:text-ff-red-400 font-sixtyfour text-center">
              FAVORITE SHOWS
            </h3>
            
            {/* Show Cards */}
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-red-200/30 dark:border-ff-red-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-red-500 to-ff-red-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">tv</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">JoJo's Bizarre Adventure</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Anime • Action</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-pink-200/30 dark:border-ff-pink-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-pink-500 to-ff-pink-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">movie</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Attack on Titan</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Anime • Drama</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-gold-200/30 dark:border-ff-gold-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-gold-500 to-ff-gold-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">theaters</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Breaking Bad</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Drama • Crime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Movies Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-pink-600 dark:text-ff-pink-400 font-sixtyfour text-center">
              FAVORITE MOVIES
            </h3>
            
            {/* Movie Cards */}
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-purple-200/30 dark:border-ff-purple-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-purple-500 to-ff-purple-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">movie_filter</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Spirited Away</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Anime • Fantasy</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-blue-200/30 dark:border-ff-blue-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-blue-500 to-ff-blue-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">auto_awesome</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Inception</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Sci-Fi • Thriller</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-green-200/30 dark:border-ff-green-600/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-green-500 to-ff-green-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white text-xl">star</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">The Matrix</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Sci-Fi • Action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genres & Inspiration */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-600 dark:text-ff-gold-400 font-sixtyfour text-center">
              INSPIRATION
            </h3>
            
            {/* Genre Tags */}
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-red-200/30 dark:border-ff-red-600/30">
                <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-3">Favorite Genres</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-ff-red-100 dark:bg-ff-red-900/30 text-ff-red-700 dark:text-ff-red-300 rounded-full text-sm font-mono">Anime</span>
                  <span className="px-3 py-1 bg-ff-pink-100 dark:bg-ff-pink-900/30 text-ff-pink-700 dark:text-ff-pink-300 rounded-full text-sm font-mono">Sci-Fi</span>
                  <span className="px-3 py-1 bg-ff-gold-100 dark:bg-ff-gold-900/30 text-ff-gold-700 dark:text-ff-gold-300 rounded-full text-sm font-mono">Fantasy</span>
                  <span className="px-3 py-1 bg-ff-purple-100 dark:bg-ff-purple-900/30 text-ff-purple-700 dark:text-ff-purple-300 rounded-full text-sm font-mono">Drama</span>
                  <span className="px-3 py-1 bg-ff-blue-100 dark:bg-ff-blue-900/30 text-ff-blue-700 dark:text-ff-blue-300 rounded-full text-sm font-mono">Action</span>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-ff-pink-200/30 dark:border-ff-pink-600/30">
                <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-3">Creative Influence</h4>
                <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400 leading-relaxed">
                  These shows and movies inspire my art, storytelling, and creative projects. 
                  They shape my understanding of narrative, character development, and visual aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsMovies;

