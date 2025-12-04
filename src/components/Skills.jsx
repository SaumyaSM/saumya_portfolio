import React from 'react';
import { SKILLS } from '../data/constants';

export default function Skills() {
  return (
    <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold">Skills</h2>
      {Object.entries(SKILLS).map(([title, items]) => (
        <div key={title} className="mt-3">
          <h4 className="text-sm font-medium capitalize">{title}</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {items.map((s) => (
              <span key={s} className="text-xs px-3 py-1 border rounded-full">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
