
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Dynamic Sign Language Translator';
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Select all elements to animate
    const revealElements = document.querySelectorAll('.section-container > *:not(.absolute)');
    revealElements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
    
    return () => {
      if (revealElements) {
        revealElements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Overview />
        <HowItWorks />
        <Features />
        <TechStack />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
