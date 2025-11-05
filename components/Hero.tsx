
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-cover bg-center flex items-center justify-center pt-20 lg:pt-0" style={{ backgroundImage: "linear-gradient(to right bottom, #eef2ff, #fbfbfe, #fcfcfc, #fefefe, #ffffff)" }}>
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 text-center lg:text-left">
        <div className="flex-1 space-y-6 animate-fade-up">
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-gray-900">
            Hi, I’m Vishwas <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            UI/UX Designer crafting clean, human-centered experiences.
          </p>
          <a
            href="#projects"
            className="inline-block bg-primary text-white font-heading font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-primary-700 transition-transform transform hover:scale-105 duration-300"
          >
            Explore My Work
          </a>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-fade-in">
             <div className="absolute inset-0 bg-primary-200 rounded-full blur-2xl"></div>
            <img
              src="https://picsum.photos/seed/vishwas-avatar/400/400"
              alt="Vishwas Avatar"
              className="relative w-full h-full object-cover rounded-full shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        .animate-wave { animation: wave 1.5s ease-in-out infinite; transform-origin: 70% 70%; display: inline-block; }
      `}</style>
    </section>
  );
};

export default Hero;
