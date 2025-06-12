import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import KnowledgeSpaces from '../components/KnowledgeSpaces';
import FeaturesSection from '../components/FeaturesSection';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="knowledge-spaces">
          <KnowledgeSpaces />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        
            <footer className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end">
                        <p>تواصل معنا: edusphereacademy.info@gmail.com</p>
                    </div>
                </div>
            </footer>
      </main>
    </div>
  );
};

export default Home; 