import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import vaultImage from '@/assets/password-vault.png';
import handwritingImage from '@/assets/handwriting-generator.png'
import voiceAnalyticsImage from '@/assets/voice-analytics.png'

const projects = [
  {
    id: 1,
    title: "Secure Command-Line Password Vault",
    description: "A unified command-line tool to generate strong, unique passwords and store them securely using Fernet encryption.",
    tags: ["Python", "Cryptography", "Fernet", "Security", "CLI"],
    image: vaultImage
  },
  {
    id: 2,
    title: "Personalized Handwriting Generator",
    description: "An application that converts digital text into a realistic, personalized handwriting image, mimicking natural stroke variations",
    tags: ["Python", "Pillow", "Image Processing", "Automation"],
    image: handwritingImage
  },
  {
    id: 3,
    title: "Speech-Driven NLU Framework for Data Analytics",
    description: "An intelligent chatbot that translates natural voice commands into executable Python code to query and analyze datasets instantly.",
    tags: ["Python", "Flask", "Pandas", "Gemini API", "NLU"],
    image: voiceAnalyticsImage
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-mono text-4xl lg:text-5xl font-bold">
            My <span className="text-primary">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work in AI, machine learning, and data science
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-glow hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="font-mono text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-sm text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/projects">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
