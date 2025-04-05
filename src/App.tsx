import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkingProcess from './components/WorkingProcess';
import Projects from './components/Projects';
import Milestones from './components/Milestones';
import FAQ from './components/FAQ';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';


function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <Hero />
      <Projects />
      <Milestones />
      <Services/>
      <WorkingProcess />
      <FAQ/>
      <ContactCTA/>
    </div>
  );
}

export default App;