
import React, { useState, useEffect } from 'react';

const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Contact"];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const id = entry.target.id;
                const navLink = id.charAt(0).toUpperCase() + id.slice(1);
                setActiveSection(navLink === 'Hero' ? 'Home' : navLink);
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <svg
            className="w-7 h-7 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.5 16.5l-3.5-3.5-3.5 3.5M12 18.5v-13" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 8.5l3-3 4.5 4.5 4.5-4.5 3 3" />
          </svg>
          <span className="font-heading text-2xl font-bold text-gray-800">Vishwas</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-heading font-medium text-gray-600 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform ${activeSection === link ? 'text-primary after:scale-x-100' : ''}`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
