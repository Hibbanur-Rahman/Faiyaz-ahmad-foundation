import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FaiyazAhmad } from './components/FaiyazAhmad';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Volunteer } from './components/Volunteer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
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
    </ThemeProvider>
  );
}

export default App;