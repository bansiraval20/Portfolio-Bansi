import React, { useEffect } from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import About from "./Component/AboutPage/About";
import Hero from "./Component/HomePage/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Skill from "./Component/SkillsPage/Skills";
import Certificate from "./Component/CertificatesPage/Certificate";
import Contact from "./Component/ContactPage/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#0f0f1b] to-[#1c1c2e] min-h-screen text-white flex flex-col overflow-hidden">
      <Router>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skill />} />
            <Route path="/Certificate" element={<Certificate />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
