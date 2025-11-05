
import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

const TOOLS = ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Framer"];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center animate-fade-in">
            <div className="relative w-[350px] h-[450px] rounded-2xl shadow-2xl bg-gray-200">
                <img src="https://picsum.photos/seed/profile-pic/350/450" alt="Vishwas Profile" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I’m passionate about designing intuitive and aesthetically pleasing digital products. My goal is to create meaningful interfaces that simplify experiences and bring joy to users.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {TOOLS.map((tool) => (
                <span key={tool} className="bg-primary-100 text-primary-700 font-semibold px-4 py-2 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
            <a
              href="#"
              download
              className="inline-flex items-center gap-3 bg-gray-800 text-white font-heading font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
