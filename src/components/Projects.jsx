import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from 'react-icons/fi';
import { PROJECTS } from '../data/constants';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-3xl hover:border-purple-500/50 transition-all overflow-hidden cursor-pointer"
            onClick={() => project.images && setSelectedProject(project)}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex gap-2">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 bg-gray-900/50 rounded-xl group-hover:bg-purple-900/30 transition-colors"
                  >
                    <FiGithub className="text-lg" />
                  </a>
                  {project.linkedinPost && (
                    <a
                      href={project.linkedinPost}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 bg-gray-900/50 rounded-xl group-hover:bg-purple-900/30 transition-colors"
                    >
                      <FiExternalLink className="text-lg" />
                    </a>
                  )}
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

              {project.images && (
                <div className="flex items-center gap-2 text-sm text-purple-400 font-medium">
                  View Gallery
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for gallery */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <div className="sticky top-0 flex justify-between items-center p-6 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 z-10">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-all text-sm"
                  >
                    <FiGithub />
                    View Repository
                  </a>
                  {selectedProject.linkedinPost && (
                    <a
                      href={selectedProject.linkedinPost}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-lg font-semibold hover:bg-blue-900/50 transition-all text-sm"
                    >
                      <FiExternalLink />
                      LinkedIn Post
                    </a>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Gallery content */}
            <div className="p-6">
              {/* Poster - Full width (only for LifeLink) */}
              {selectedProject.title.includes('LifeLink') && (
                <motion.img
                  src={selectedProject.images[0]}
                  alt={`${selectedProject.title} poster`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full rounded-xl border border-gray-800 object-cover mb-8"
                />
              )}

              {/* Screenshots - Grid */}
              {selectedProject.title.includes('LifeLink') ? (
                <>
                  <h3 className="text-lg font-semibold mb-4">Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {selectedProject.images.slice(1).map((image, idx) => (
                      <motion.img
                        key={idx}
                        src={image}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (idx + 1) * 0.1 }}
                        className="w-full rounded-xl border border-gray-800 object-cover"
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {selectedProject.images.map((image, idx) => (
                    <motion.img
                      key={idx}
                      src={image}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="w-full rounded-xl border border-gray-800 object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}