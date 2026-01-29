"use strict";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
