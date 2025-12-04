import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { SOCIAL } from './data/constants';

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-gray-950 transition-colors duration-500 font-sans text-gray-100 overflow-x-hidden">
        {/* Animated background grid */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative">
          <Header dark={dark} setDark={setDark} />

          {/* Hero Section */}
          <Hero />

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto px-6">
            {/* About + Quick Stats Bento Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <About />
            </motion.section>

            {/* Tech Stack Infinite Scroll */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <Skills />
            </motion.section>

            {/* Featured Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <Projects />
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <Experience />
            </motion.section>

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 mb-20"
            >
              <Contact />
            </motion.section>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800/50 py-12"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Saumya Rajapaksha. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                  <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                    GitHub
                  </a>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                    LinkedIn
                  </a>
                  <a href={SOCIAL.email} className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </main>
    </div>
  );
}
