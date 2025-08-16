import React from 'react';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FaiyazAhmad } from './components/FaiyazAhmad';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Volunteer } from './components/Volunteer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`min-h-screen ${currentTheme.colors.background}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <FaiyazAhmad />
        <Services />
        <Gallery />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;