import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIAL } from '../data/constants';

export default function Hero() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold">Saumya Rajapaksha</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Mobile & Full‑Stack Developer</p>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">I build scalable mobile and web applications using Flutter, Firebase, and modern web technologies.</p>

      <div className="mt-4 flex gap-3">
        <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">View Projects</a>
        <a href="/Saumya Rajapaksha CV.pdf" className="px-4 py-2 border rounded-lg"><FiDownload className="inline" /> CV</a>
      </div>

      <div className="mt-4 flex gap-3 text-lg">
        <a href={SOCIAL.github}><FiGithub /></a>
        <a href={SOCIAL.linkedin}><FiLinkedin /></a>
        <a href={SOCIAL.email}><FiMail /></a>
      </div>
    </motion.div>
  );
}