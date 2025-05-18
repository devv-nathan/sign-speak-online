
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
    
    // Parallax effect for moving gradients
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
      
      // Adjust opacity of background elements based on scroll
      const gradientElements = document.querySelectorAll('.scroll-gradient');
      gradientElements.forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const opacity = 0.2 + (0.8 * (1 - (Math.abs(windowHeight/2 - rect.top) / windowHeight)));
          element.style.opacity = opacity.toString();
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
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
        <div className="graphic-dot w-96 h-96 top-1/4 -left-48 opacity-20"></div>
        <div className="graphic-dot w-80 h-80 top-3/4 -right-36 opacity-15"></div>
        <div className="graphic-circle w-[800px] h-[800px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="graphic-circle w-[1200px] h-[1200px] top-2/3 left-1/4 opacity-10"></div>
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
