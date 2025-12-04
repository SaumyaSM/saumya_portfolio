import React from 'react';
import { PROJECTS } from '../data/constants';

export default function Projects() {
  return (
    <div id="projects">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <a key={p.title} href={p.repo} target="_blank" rel="noreferrer" className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md block">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm">{p.desc}</p>
            <div className="mt-3 flex gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}