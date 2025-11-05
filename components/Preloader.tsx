
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary-600 flex items-center justify-center z-50">
      <div className="flex items-center space-x-3 animate-logo-fade-in">
        <svg
          className="w-12 h-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M15.5 16.5l-3.5-3.5-3.5 3.5M12 18.5v-13"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4.5 8.5l3-3 4.5 4.5 4.5-4.5 3 3"
          />
        </svg>
        <span className="text-white font-heading text-4xl font-bold tracking-wider">Vishwas</span>
      </div>
    </div>
  );
};

export default Preloader;
