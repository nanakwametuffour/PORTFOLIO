import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Hero from './Hero';
import Footer from './Footer';

export default function Home() {
  return (
    <main className='py-10 h-auto w-full px-2 md:px-5 lg:px-10'>
        <Hero/>
      <About />
      <Projects />
     
      <Contact />
      <Footer/>
    </main>
  );
}
