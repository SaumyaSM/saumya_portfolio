import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { SOCIAL } from '../data/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-16">
      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full"
        >
          <span className="text-sm text-purple-400">👋 Hello, I'm Saumya Rajapaksha</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          I help build{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            ideas into
          </span>
          <br />
          seamless{' '}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            digital experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Full-Stack & Mobile Developer crafting scalable applications with Flutter, Firebase, and modern web technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
          >
            View My Work
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="/saumya_portfolio/SaumyaRajapaksha-CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 hover:border-gray-600 transition-all"
          >
            <FiDownload />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}