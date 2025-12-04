import React from 'react';
import { FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';
import { SOCIAL } from '../data/constants';

export default function Header({ dark, setDark }) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-white font-bold shadow-lg">SR</div>
        <div>
          <div className="font-semibold">Saumya Rajapaksha</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineering Student</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"> <FiGithub /> GitHub </a>
        <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"> <FiLinkedin /> LinkedIn </a>
        <button onClick={() => setDark(!dark)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">{dark ? <FiSun /> : <FiMoon />}</button>
      </div>
    </header>
  );
}