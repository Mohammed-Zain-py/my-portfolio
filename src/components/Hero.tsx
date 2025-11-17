import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-mono text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Mohammed Zain:</span>
                <br />
                <span className="text-primary">Python & AI</span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Crafting Intelligent Solutions
              </p>
              <p className="text-lg text-muted-foreground/80">
                A final-year engineering student with a passion for building machine learning models and data-driven applications.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all group">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/in/mohammed-zain-aiml/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow-pulse" />
              <img
                src={heroPortrait}
                alt="Professional portrait"
                className="relative rounded-2xl shadow-card object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
