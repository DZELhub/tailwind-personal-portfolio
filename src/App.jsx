"use strict";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-(--color-bg-secondary)">
      <Navbar />
      <main className="pt-16 pb-14 max-w-6xl mx-auto px-4 min-h-screen">
        <Hero />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
