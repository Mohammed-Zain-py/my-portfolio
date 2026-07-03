import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-mono text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-foreground">Mohammed Zain</span>
                <br />
                <span className="text-primary">Python Full Stack</span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
              
              <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-lg">
                A software engineer specializing in Python, FastAPI, and scalable web architectures. Passionate about building high-performance, data-driven applications from the backend logic to the user interface.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all group">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/in/mohammed-zain-py/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Scaled Up AI Network */}
          <div className="relative hidden lg:flex justify-center items-center h-full min-h-[500px] animate-fade-in opacity-80">
            
            {/* Expanded Background Glow to match larger size */}
            <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />

            {/* Larger Network SVG Container */}
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              
              <svg viewBox="0 0 200 200" className="absolute w-full h-full animate-[spin_40s_linear_infinite] text-primary opacity-60">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                <path d="M50 50 L100 100 L150 60 L120 150 L50 120 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-50" />
                <path d="M100 100 L50 120 L80 180 L120 150 L170 120 L150 60" fill="none" stroke="currentColor" strokeWidth="0.2" className="opacity-30" />
                
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <circle cx="100" cy="100" r="4" fill="currentColor" />
                <circle cx="150" cy="60" r="2" fill="currentColor" />
                <circle cx="120" cy="150" r="3" fill="currentColor" />
                <circle cx="50" cy="120" r="2.5" fill="currentColor" />
                <circle cx="80" cy="180" r="1.5" fill="currentColor" />
                <circle cx="170" cy="120" r="2" fill="currentColor" />
                
                <circle cx="100" cy="100" r="20" fill="url(#glow)" />
                <circle cx="50" cy="50" r="15" fill="url(#glow)" />
                <circle cx="120" cy="150" r="15" fill="url(#glow)" />
              </svg>

              {/* Inner core */}
              <div className="absolute w-32 h-32 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite_reverse] flex items-center justify-center backdrop-blur-sm bg-[#0a0a0a]/30">
                <div className="w-16 h-16 border border-primary/40 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),1)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;