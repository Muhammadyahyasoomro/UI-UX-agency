import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkingProcess from './components/WorkingProcess';
import Projects from './components/Projects';
import Milestones from './components/Milestones';
import FAQ from './components/FAQ';
import Services from './components/Services';
import { DesignProcessShowcase } from './components/InfiniteScroll';
import { ThreeDMarqueeDemo } from './components/Preview';
import { BackgroundBeams } from './components/ui/background-beams';
import ContactForm from './components/ContactForm';



function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <Hero />
      <Projects />
      <ThreeDMarqueeDemo />
      <Milestones />
      <Services />
      <WorkingProcess />
      <DesignProcessShowcase />
      <FAQ />
      <BackgroundBeams />
      <ContactForm />
    </div>
  );
}

export default App;