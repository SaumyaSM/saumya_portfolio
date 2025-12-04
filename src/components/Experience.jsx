import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">Experience</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Work Experience</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-3xl hover:border-purple-500/50 transition-all"
      >
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <FiBriefcase className="text-2xl text-purple-400" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
              <div>
                <h4 className="text-2xl font-bold mb-1">Intern Developer</h4>
                <p className="text-purple-400 font-medium mb-2">GDCreations</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  <span>2025 - Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin />
                  <span>Remote</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Developing mobile and web applications, collaborating with cross-functional teams to deliver high-quality software solutions. Working with modern technologies and best practices.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Flutter', 'Firebase', 'React', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-900/50 rounded-lg text-xs text-gray-300 border border-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 p-8 bg-gray-800/30 border border-gray-800 rounded-3xl"
      >
        <h4 className="text-xl font-bold mb-4">Education</h4>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
            🎓
          </div>
          <div>
            <h5 className="font-semibold mb-1">Bachelor of Software Engineering</h5>
            <p className="text-purple-400 text-sm mb-1">University of Plymouth</p>
            <p className="text-gray-500 text-sm">2023 - Present</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
