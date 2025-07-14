import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Welcome to My Portfolio
        </h2>
        <p className="text-pink-200 text-base sm:text-lg md:text-xl max-w-2xl mb-6">
          I'm Huy Do, a passionate Software Engineer specializing in web and Android development, with a strong foundation in algorithms and competitive programming. Explore my skills, projects, and get in touch!
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-300 hover:text-white transition-all duration-300"
          aria-label="Go to Contact section"
        >
          Get in Touch
        </a>
      </section>

      {/* Codeforces Section */}
      <section id="codeforces" className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900/50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Competitive Programming
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pink-200 text-base sm:text-lg mb-4">
            Active participant on <a href="https://codeforces.com/profile/yourhandle" className="text-pink-300 hover:text-pink-100" target="_blank" rel="noopener noreferrer">Codeforces</a>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white/10 rounded-lg">
              <h3 className="text-lg font-semibold text-pink-200">Current Rating</h3>
              <p className="text-2xl font-bold">1600 (Expert)</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <h3 className="text-lg font-semibold text-pink-200">Problems Solved</h3>
              <p className="text-2xl font-bold">500+</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <h3 className="text-lg font-semibold text-pink-200">Best Rank</h3>
              <p className="text-2xl font-bold">Top 1000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900/50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'JavaScript/TypeScript', icon: '📜' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Android (Kotlin)', icon: '🤖' },
            { name: 'Algorithms & Data Structures', icon: '🧠' },
            { name: 'Tailwind CSS', icon: '🎨' },
            { name: 'GraphQL', icon: '🔗' },
            { name: 'MongoDB', icon: '🗄️' },
            { name: 'Competitive Programming', icon: '🏆' },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-3xl mb-2 block">{skill.icon}</span>
              <h3 className="text-lg font-semibold text-pink-200">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'E-Commerce Platform',
              description: 'A full-stack e-commerce app with React, Node.js, and MongoDB.',
              link: '#',
            },
            {
              title: 'Android Fitness Tracker',
              description: 'A Kotlin-based Android app for tracking workouts and nutrition.',
              link: '#',
            },
            {
              title: 'Task Manager',
              description: 'A productivity app built with TypeScript and GraphQL.',
              link: '#',
            },
            {
              title: 'Android Quiz Game',
              description: 'An interactive quiz app for Android using Kotlin and Room database.',
              link: '#',
            },
            {
              title: 'Portfolio Website',
              description: 'This very website, showcasing my skills and projects!',
              link: '#',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-pink-200">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-pink-300 hover:text-pink-100"
                aria-label={`View ${project.title} project`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900/50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>
        <div className="max-w-lg mx-auto space-y-6">
          {/* Social Media Links */}
          <div className="flex justify-center gap-4">
            <a
              href="mailto:your.email@example.com"
              className="text-pink-200 hover:text-pink-100 transition-all duration-300"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zM4 18V8l8 5 8-5v10H4z" />
              </svg>
            </a>
            <a
              href="https://github.com/yourusername"
              className="text-pink-200 hover:text-pink-100 transition-all duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.77c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.67.94.67 1.89v2.8c0 .26.18.57.69.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/yourusername"
              className="text-pink-200 hover:text-pink-100 transition-all duration-300"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.45 2.9h-2.33v6.98A10.01 10.01 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-pink-200 hover:text-pink-100 transition-all duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.39V9.5h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 8.06c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm1.78 12.39H3.56V9.5h3.56v10.95zM22 2H2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/yourusername"
              className="text-pink-200 hover:text-pink-100 transition-all duration-300"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.16c3.21 0 3.58.01 4.84.07 1.17.05 1.81.24 2.23.4.56.21.96.47 1.38.89.42.42.68.82.89 1.38.16.42.35 1.06.4 2.23.06 1.26.07 1.63.07 4.84s-.01 3.58-.07 4.84c-.05 1.17-.24 1.81-.4 2.23-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.16-1.06.35-2.23.4-1.26.06-1.63.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.05-1.81-.24-2.23-.4-.56-.21-.96-.47-1.38-.89-.42-.42-.68-.82-.89-1.38-.16-.42-.35-1.06-.4-2.23-.06-1.26-.07-1.63-.07-4.84s.01-3.58.07-4.84c.05-1.17.24-1.81.4-2.23.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.16 1.06-.35 2.23-.4 1.26-.06 1.63-.07 4.84-.07zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.65.34 3.71.67c-.97.34-1.79.79-2.61 1.61C.28 3.1-.17 3.92.16 4.89c.33.94.54 2.07.6 3.34.06 1.28.07 1.69.07 4.94s-.01 3.66-.07 4.94c-.06 1.28-.27 2.41-.6 3.34-.33.97-.79 1.79-1.61 2.61-.82.82-1.64 1.28-2.61 1.61-.94.33-2.07.54-3.34.6-1.28.06-1.69.07-4.94.07s-3.66-.01-4.94-.07c-1.28-.06-2.41-.27-3.34-.6-.97-.33-1.79-.79-2.61-1.61-.82-.82-1.28-1.64-1.61-2.61-.33-.94-.54-2.07-.6-3.34-.06-1.28-.07-1.69-.07-4.94s.01-3.66.07-4.94c.06-1.28.27-2.41.6-3.34.33-.97.79-1.79 1.61-2.61C3.1.28 3.92-.17 4.89.16c.94.33 2.07.54 3.34.6C8.33.01 8.74 0 12 0zm0 5.83c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm4.67-10.67c-.77 0-1.4.63-1.4 1.4s.63 1.4 1.4 1.4 1.4-.63 1.4-1.4-.63-1.4-1.4-1.4z" />
              </svg>
            </a>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-pink-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-white/10 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-pink-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-white/10 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-pink-200">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 bg-white/10 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-300 hover:text-white transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;