import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { PROJECTS } from '../data/constants';

export default function Projects() {
  return (
    <div id="projects" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">Featured Case Studies</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Curated work</h3>
        <p className="text-xl text-gray-400 max-w-3xl">
          A selection of projects showcasing my expertise in mobile and web development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-3xl hover:border-purple-500/50 transition-all overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex gap-2">
                  <div className="p-2.5 bg-gray-900/50 rounded-xl group-hover:bg-purple-900/30 transition-colors">
                    <FiGithub className="text-lg" />
                  </div>
                  <div className="p-2.5 bg-gray-900/50 rounded-xl group-hover:bg-purple-900/30 transition-colors">
                    <FiExternalLink className="text-lg" />
                  </div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-900/50 text-gray-300 text-xs rounded-lg border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-purple-400 font-medium">
                View Details
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}