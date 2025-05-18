
import ButtonLink from "./ButtonLink";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900/30 to-background pt-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/10 to-transparent moving-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse-subtle scroll-gradient"></div>
      <div className="absolute bottom-1/4 left-10 w-[30rem] h-[30rem] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-float scroll-gradient"></div>
      
      <div className="section-container min-h-[90vh] flex flex-col justify-center">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-8 animate-fade-in font-display leading-tight">
            Dynamic Sign Language Translator
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 mb-16 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Bridging communication gaps through real-time sign language translation powered by computer vision and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <ButtonLink href="#" variant="primary" size="lg" className="group">
              View Demo
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#" variant="outline" size="lg" className="group">
              <Github className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              GitHub Repo
            </ButtonLink>
          </div>
        </div>
        
        <div className="absolute left-0 right-0 bottom-16 flex justify-center">
          <a 
            href="#overview" 
            className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary/80 shadow-lg shadow-blue-900/20 text-blue-300 animate-bounce mb-8 transition-transform hover:shadow-xl hover:scale-110 backdrop-blur-sm border border-white/5"
            aria-label="Scroll to overview section"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
