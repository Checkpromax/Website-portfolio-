
import React, { useState } from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { BehanceIcon } from './icons/BehanceIcon';
import { DribbbleIcon } from './icons/DribbbleIcon';
import { MailIcon } from './icons/MailIcon';
import { SendIcon } from './icons/SendIcon';

const socialLinks = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/vishwas", icon: <LinkedInIcon /> },
  { platform: "Behance", url: "https://behance.net/vishwas", icon: <BehanceIcon /> },
  { platform: "Dribbble", url: "https://dribbble.com/vishwas", icon: <DribbbleIcon /> },
  { platform: "Email", url: "mailto:vishwas@example.com", icon: <MailIcon /> }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Here you would typically handle form submission to a backend
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Let’s Collaborate</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            I’m open to design collaborations, internships, or freelance opportunities. Have a project in mind? Let's talk.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="peer w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-4 text-white placeholder-transparent focus:outline-none focus:border-primary" placeholder="Name" />
              <label htmlFor="name" className="absolute left-4 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">Name</label>
            </div>
             <div className="relative">
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="peer w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-4 text-white placeholder-transparent focus:outline-none focus:border-primary" placeholder="Email" />
              <label htmlFor="email" className="absolute left-4 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">Email</label>
            </div>
             <div className="relative">
              <textarea name="message" id="message" required rows={5} value={formData.message} onChange={handleChange} className="peer w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-4 text-white placeholder-transparent focus:outline-none focus:border-primary" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-4 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">Message</label>
            </div>
            <button type="submit" disabled={submitted} className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white font-heading font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-primary-700 transition-transform transform hover:scale-105 duration-300 disabled:bg-primary-800 disabled:cursor-not-allowed">
              <SendIcon />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6">
             <p className="text-gray-300 text-lg text-center lg:text-left">Or connect with me on social media:</p>
             <div className="flex space-x-6">
                {socialLinks.map(link => (
                    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform} className="text-gray-400 hover:text-primary transition-colors duration-300">
                        <span className="w-8 h-8">{link.icon}</span>
                    </a>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
