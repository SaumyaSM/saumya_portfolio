import React from 'react';
import { SOCIAL } from '../data/constants';

export default function Contact() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold">Contact</h2>
      <p className="mt-2 text-sm">Email: saumyarsmr@gmail.com</p>
      <p className="text-sm">GitHub: {SOCIAL.github}</p>
      <p className="text-sm">LinkedIn: {SOCIAL.linkedin}</p>
    </div>
  );
}