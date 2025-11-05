
import React from 'react';

const projects = [
  {
    title: "Food Delivery App Redesign",
    thumbnail: "https://picsum.photos/seed/project1/600/400",
    tags: ["Mobile UI", "Prototype", "UX Flow"]
  },
  {
    title: "Travel Booking Platform",
    thumbnail: "https://picsum.photos/seed/project2/600/400",
    tags: ["Web UI", "Research", "Wireframe"]
  },
  {
    title: "NGO Website Concept",
    thumbnail: "https://picsum.photos/seed/project3/600/400",
    tags: ["Responsive", "Accessibility", "Figma"]
  }
];

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  return (
    <a href="#" className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img src={project.thumbnail} alt={project.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-primary-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">Selected Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
