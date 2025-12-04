import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans text-gray-800 dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Header dark={dark} setDark={setDark} />

          <section className="mt-12 grid md:grid-cols-3 gap-10 items-start">
            <Hero />
            <div className="md:col-span-2">
              <About />
              <Skills />
              <Experience />
            </div>
          </section>

          <section className="mt-12">
            <Projects />
          </section>

          <section className="mt-12">
            <Contact />
          </section>

          <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Saumya Rajapaksha — Built with ❤️ and clean code
          </footer>
        </div>
      </main>
    </div>
  );
}
