
import React from 'react';

const skills = [
  { name: "UI Design", icon: "🎨" },
  { name: "UX Research", icon: "🔍" },
  { name: "Prototyping", icon: "⚙️" },
  { name: "Wireframing", icon: "📐" },
  { name: "Usability Testing", icon: "🧪" },
  { name: "Design Systems", icon: "📚" }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">Design Skills & Tools</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
