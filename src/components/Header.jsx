import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiSun, FiMoon, FiMail } from 'react-icons/fi';
import { SOCIAL } from '../data/constants';

export default function Header({ dark, setDark }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg"
            >
              SR
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-bold text-sm">Saumya Rajapaksha</div>
              <div className="text-xs text-gray-500">Full-Stack Developer</div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <motion.a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
            >
              <FiGithub />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href={SOCIAL.email}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 rounded-lg transition-all font-medium"
            >
              <FiMail />
              <span>Contact</span>
            </motion.a>

            <motion.button
              onClick={() => setDark(!dark)}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
            >
              {dark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}