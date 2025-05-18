
import ButtonLink from "./ButtonLink";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/60 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="section-container min-h-[85vh] flex flex-col justify-center">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6 animate-fade-in font-display">
            Dynamic Sign Language Translator
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-12 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Bridging communication gaps through real-time sign language translation powered by computer vision and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <ButtonLink href="#" variant="primary" size="lg" className="group">
              View Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#" variant="outline" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              GitHub Repo
            </ButtonLink>
          </div>
        </div>
        
        <div className="absolute left-0 right-0 bottom-10 flex justify-center">
          <a 
            href="#overview" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-blue-500 animate-bounce mb-8 transition-transform hover:shadow-lg hover:scale-105"
            aria-label="Scroll to overview section"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
