import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';

export default function Skills() {
  // Flatten all skills for infinite scroll
  const allSkills = Object.values(SKILLS).flat();
  // Double the array for seamless loop
  const skills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">My Skills</h2>
        <h3 className="text-4xl md:text-5xl font-bold">
          Passionate about{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            cutting-edge technologies
          </span>
        </h3>
      </motion.div>

      {/* Infinite Scrolling Skills */}
      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />

        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-4 py-8"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 bg-gray-800/30 border border-gray-800 rounded-full text-sm font-medium whitespace-nowrap hover:border-purple-500/50 transition-all"
            >
              {skill}
            </div>
          ))}
        </motion.div>

        {/* Second row - opposite direction */}
        <motion.div
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-4 py-8"
        >
          {skills.map((skill, i) => (
            <div
              key={`reverse-${i}`}
              className="flex-shrink-0 px-6 py-3 bg-gray-800/30 border border-gray-800 rounded-full text-sm font-medium whitespace-nowrap hover:border-purple-500/50 transition-all"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills by Category */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(SKILLS).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-gray-800/30 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all"
          >
            <h4 className="text-sm uppercase tracking-wider text-purple-400 mb-4 font-semibold">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-gray-900/50 rounded-lg text-xs text-gray-300 border border-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
