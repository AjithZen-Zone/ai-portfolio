import React from 'react';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AIPlayground from './components/AIPlayground';
import About from './components/About';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import StrategyCTA from './components/StrategyCTA';
import ProjectForm from './components/ProjectForm';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';


function App() {
  return (
    <>
      <TopNavBar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Process />
        <Projects />
        <AIPlayground />
        <Testimonials />
        <StrategyCTA />
        <ProjectForm />

        <FeedbackForm />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}






export default App;
