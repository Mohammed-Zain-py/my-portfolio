import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="font-mono text-4xl lg:text-6xl font-bold">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, or just having a chat about tech
            </p>
          </div>
          
          {/* Centered Layout Container */}
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in-up">
            <div className="space-y-6 text-center">
              <h2 className="font-mono text-2xl font-bold">Get In Touch</h2>
              <p className="text-muted-foreground">
                Feel free to reach out through any of the following channels. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Email Card */}
              <Card className="p-6 border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
                <a href="mailto:mdzainaiml2026@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">mdzainaiml2026@gmail.com</div>
                  </div>
                </a>
              </Card>
              
              {/* LinkedIn Card */}
              <Card className="p-6 border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
                <a href="https://www.linkedin.com/in/mohammed-zain-aiml/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Connect with me professionally</div>
                  </div>
                </a>
              </Card>
              
              {/* GitHub Card */}
              <Card className="p-6 border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
                <a href="https://github.com/Mohammed-Zain-py" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-muted-foreground">Check out my code</div>
                  </div>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;