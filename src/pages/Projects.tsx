import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import vaultImage from '@/assets/password-vault.png';
import handwritingImage from '@/assets/handwriting-generator.png';
import voiceAnalyticsImage from '@/assets/voice-analytics.png';
import sonarImage from '@/assets/sonar-classification.png';
import movieImage from '@/assets/movie-recommendation.png';
import gamesImage from '@/assets/mini-games.png';

const categories = ["All", "Machine Learning", "Data Analysis", "CLI & Automation"];

const allProjects = [
  {
    id: 1,
    title: "Secure Command-Line Password Vault",
    description: "A unified command-line tool to generate strong, unique passwords and store them securely using Fernet encryption.",
    category: "CLI & Automation",
    tags: ["Python", "Cryptography", "Fernet", "Security", "CLI"],
    image: vaultImage
  },
  {
    id: 2,
    title: "Personalized Handwriting Generator",
    description: "An application that converts digital text into a realistic, personalized handwriting image using a custom-made font.",
    category: "CLI & Automation",
    tags: ["Python", "Pillow", "Image Processing", "Automation"],
    image: handwritingImage
  },
  {
    id: 3,
    title: "Speech-Driven NLU Framework for Data Analytics",
    description: "An intelligent chatbot that translates natural voice commands into executable Python code to query and analyze datasets instantly.",
    category: "Data Analysis",
    tags: ["Python", "Flask", "Pandas", "Gemini API", "NLU"],
    image: voiceAnalyticsImage
  },
  {
    id: 4,
    title: "Sonar-Based Object Classification",
    description: "A machine learning model to distinguish between metallic and non-metallic objects from sonar reflection data.",
    category: "Machine Learning",
    tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    image: sonarImage
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description: "A content-based filtering engine that recommends movies based on plot keywords, genres, and other metadata.",
    category: "Machine Learning",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Science", "NLP"],
    image: movieImage
  },
  {
    id: 6,
    title: "Mini Game Collection",
    description: "A collection of interactive, text-based games built to showcase fundamental programming and object-oriented principles.",
    category: "Software Development",
    tags: ["Python", "OOP", "CLI"],
    image: gamesImage
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="font-mono text-4xl lg:text-6xl font-bold">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of my work in AI, machine learning, and software development
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-primary" : "border-primary/50"}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
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
                    <div className="text-xs text-primary font-mono">
                      {project.category}
                    </div>
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
        </div>
      </section>
    </div>
  );
};

export default Projects;
