import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h2 className="font-mono text-2xl font-bold">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of the following channels. I typically respond within 24 hours.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card className="p-6 border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
                  <a href="mailto: mdzainaiml2026@gmail.com " className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">mdzainaiml2026@gmail.com</div>
                    </div>
                  </a>
                </Card>
                
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

            {/* Contact Form */}
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-glow">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
