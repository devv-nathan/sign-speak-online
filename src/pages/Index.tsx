
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
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    // Select all elements to animate
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      observer.observe(el);
    });
    
    // Enhanced parallax effect for moving gradients
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
      
      // Apply transformations to gradient elements based on scroll
      const gradientElements = document.querySelectorAll('.scroll-gradient');
      gradientElements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = index % 2 === 0 ? 0.05 : -0.05;
        const yPos = -(scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
        
        // Dynamic opacity based on viewport position
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const distanceFromCenter = Math.abs(windowHeight/2 - (rect.top + rect.height/2));
          const maxDistance = windowHeight/2 + rect.height/2;
          const opacity = 0.4 * (1 - (distanceFromCenter / maxDistance));
          element.style.opacity = Math.max(0.1, opacity).toString();
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set positions
    handleScroll();
    
    return () => {
      if (revealElements) {
        revealElements.forEach(el => observer.unobserve(el));
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* Background Graphics */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="graphic-dot w-96 h-96 top-1/4 -left-48 opacity-20 scroll-gradient"></div>
        <div className="graphic-dot w-80 h-80 top-3/4 -right-36 opacity-15 scroll-gradient"></div>
        <div className="graphic-circle w-[800px] h-[800px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scroll-gradient"></div>
        <div className="graphic-circle w-[1200px] h-[1200px] top-2/3 left-1/4 opacity-10 scroll-gradient"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      </div>
      
      <main className="relative z-10">
        <Hero />
        <div className="section-divider"></div>
        <Overview />
        <div className="section-divider"></div>
        <HowItWorks />
        <div className="section-divider"></div>
        <Features />
        <div className="section-divider"></div>
        <TechStack />
        <div className="section-divider"></div>
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
