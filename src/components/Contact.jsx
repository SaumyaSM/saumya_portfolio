import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiClock } from 'react-icons/fi';
import { SOCIAL } from '../data/constants';

export default function Contact() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">Get In Touch</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Let's work together on{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            your next project
          </span>
        </h3>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          I'm available for full-time roles & freelance projects. Let's create something amazing together.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-3xl"
        >
          <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
          
          <div className="space-y-4">
            <a
              href={SOCIAL.email}
              className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                <FiMail className="text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">saumyarsmr@gmail.com</div>
              </div>
            </a>

            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                <FiGithub className="text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">GitHub</div>
                <div className="font-medium">@SaumyaSM</div>
              </div>
            </a>

            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                <FiLinkedin className="text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">LinkedIn</div>
                <div className="font-medium">Saumya Rajapaksha</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl"
        >
          <h4 className="text-2xl font-bold mb-6">Availability</h4>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-purple-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Location</div>
                <div className="text-gray-400">Based in Sri Lanka, working remotely worldwide</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <FiClock className="text-purple-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Timezone</div>
                <div className="text-gray-400">UTC+5:30 (Flexible with global teams)</div>
              </div>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new opportunities
              </div>
            </div>

            <a
              href={SOCIAL.email}
              className="block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}