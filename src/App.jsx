import React from 'react';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] radial-glow-1"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] radial-glow-2"></div>
      </div>
      
      <TopNavBar />
      
      <main className="max-w-7xl mx-auto px-8">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <WhyChooseMe />
        <Contact />
        <AIChatbot />
      </main>

      <Footer />
    </>
  );
}

export default App;
