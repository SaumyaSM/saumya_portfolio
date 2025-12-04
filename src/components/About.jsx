import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

export default function About() {
  const highlights = [
    { icon: FiCode, title: 'Full-Stack Development', desc: 'Building end-to-end web applications' },
    { icon: FiSmartphone, title: 'Mobile Apps', desc: 'Flutter & React Native expertise' },
    { icon: FiDatabase, title: 'Backend & Cloud', desc: 'Firebase, Node.js & databases' },
  ];

  const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">About Me</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Full-Stack Developer & <br />a little bit of everything
        </h3>
        <p className="text-xl text-gray-400 max-w-3xl">
          I'm Saumya Rajapaksha, a proactive full-stack developer passionate about creating dynamic digital experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-3xl hover:border-purple-500/50 transition-all"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <FiUsers className="text-2xl text-purple-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Collaboration First</h4>
              <p className="text-gray-400">
                I prioritize client collaboration, fostering open communication throughout the development process to ensure your vision comes to life exactly as imagined.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Side Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl hover:border-purple-500/50 transition-all"
        >
          <FiTrendingUp className="text-3xl text-purple-400 mb-4" />
          <h4 className="text-lg font-bold mb-2">Currently Building</h4>
          <p className="text-gray-400 text-sm mb-4">
            Working on innovative mobile and web applications with modern tech stacks
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-purple-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for projects
          </div>
        </motion.div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-6 bg-gray-800/30 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all cursor-default"
          >
            <item.icon className="text-3xl text-purple-400 mb-3" />
            <h5 className="font-semibold mb-2">{item.title}</h5>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
