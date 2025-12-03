import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import vaultImage from '@/assets/password-vault.png';
import handwritingImage from '@/assets/handwriting-generator.png';
import voiceAnalyticsImage from '@/assets/voice-analytics.png';
import sonarImage from '@/assets/sonar-classification.png';
import movieImage from '@/assets/movie-recommendation.png';
import gamesImage from '@/assets/mini-games.png';

const projectsData: { [key: string]: any } = {
  "1": {
    title: "Secure Command-Line Password Vault",
    image: vaultImage,
    problem: "Reusing weak passwords across multiple services is a major security risk, but manually managing dozens of unique, strong passwords is impractical and insecure.",
    solution: "Built a unified command-line tool that generates, encrypts, and securely stores credentials, allowing users to manage all their passwords from one secure terminal interface.",
    features: [
      "Strong, cryptographically-secure random password generation",
      "Symmetric-key encryption (Fernet) for all stored credentials",
      "Unified CLI for adding, retrieving, updating, and deleting passwords",
      "Persistent, secure storage using a local MySQL database"
    ],
    techStack: ["Python", "MySQL", "Cryptography (Fernet)", "CLI"],
    github: "https://github.com/Mohammed-Zain-py/python-password-vault",
  },
  "2": {
    title: "Personalized Handwriting Generator",
    image: handwritingImage,
    problem: "Standard digital text lacks the personal touch and authenticity of real handwriting for creative projects, e-greetings, or digital signatures.",
    solution: "Developed a Python script that converts any text string into a high-resolution, realistic handwriting image, using a custom-built font file for a truly personal style.",
    features: [
      "Converts digital text strings to high-resolution PNG image files",
      "Utilizes a custom-made .ttf font file for a unique, personalized look",
      "Image processing via the Pillow library to handle text layout and rendering",
      "Lightweight and portable script for easy automation"
    ],
    techStack: ["Python", "Pillow (PIL)", "Image Processing", "Automation"],
    github: "https://github.com/Mohammed-Zain-py/Personalized-Handwriting-Generator",
  },
  "3": {
    title: "Speech-Driven NLU Framework for Data Analytics",
    image: voiceAnalyticsImage,
    problem: "Non-technical stakeholders cannot directly query databases or run analysis, creating a bottleneck and reliance on data science teams for basic insights.",
    solution: "Developed an intelligent web application that translates natural voice commands into executable Python (Pandas) code, allowing users to ask questions in plain English and receive instant data analysis.",
    features: [
      "Real-time speech-to-text transcription via browser API",
      "Natural Language Understanding (NLU) using the Gemini API to interpret intent",
      "Dynamic generation and execution of Python code for data analysis",
      "Web-based frontend (Flask) to display results and visualizations"
    ],
    techStack: ["Python", "Flask", "Pandas", "Gemini API", "NLU", "HTML/CSS"],
    github: "https://github.com/Mohammed-Zain-py/Speech-driven-NLU-framework",
  },
  "4": {
    title: "Sonar-Based Object Classification",
    image: sonarImage,
    problem: "Manually distinguishing between underwater objects like rocks and metallic mines from sonar data is slow, difficult, and has a high margin of error.",
    solution: "Built a machine learning classifier that ingests sonar reflection data and accurately classifies objects as either 'Rock' or 'Mine' with high precision and recall.",
    features: [
      "Data preprocessing and feature extraction from sonar signals",
      "Trained and evaluated multiple classification models",
      "Achieved high accuracy in classifying unseen data",
      "Demonstrates a complete, end-to-end machine learning workflow"
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
  },
  "5": {
    title: "Movie Recommendation System",
    image: movieImage,
    problem: "With thousands of available options, users often struggle to find new movies that are genuinely tailored to their specific tastes, leading to decision fatigue.",
    solution: "Developed a content-based filtering engine that analyzes movie metadata (like plot keywords, genres, and cast) to provide users with personalized movie recommendations.",
    features: [
      "Text preprocessing and vectorization of movie plots using TF-IDF",
      "Calculates a similarity score between all movies using cosine similarity",
      "Accepts a movie title as input and returns a ranked list of similar movies",
      "Demonstrates key NLP and recommendation engine concepts"
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "NLTK", "Data Science"],
  },
  "6": {
    title: "Mini Game Collection",
    image: gamesImage,
    problem: "A need to demonstrate core programming fundamentals, logic, and Object-Oriented Programming (OOP) principles in a practical, interactive, and self-contained project.",
    solution: "Coded a collection of classic text-based games from scratch, focusing on clean code, reusable classes for game logic, and a clear, interactive command-line interface.",
    features: [
      "Multiple self-contained games (e.g., Hangman, Tic-Tac-Toe) in one package",
      "Clear separation of game logic from the user interface (CLI)",
      "Strong application of Object-Oriented Programming (OOP) principles",
      "User-friendly and robust command-line interaction"
    ],
    techStack: ["Python", "Object-Oriented Programming (OOP)", "CLI"],
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id || "1"];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24">
        <div className="container max-w-5xl">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          
          <div className="space-y-12 animate-fade-in">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="font-mono text-4xl lg:text-5xl font-bold">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <Button size="lg" className="bg-gradient-primary" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </a>
                    </Button>
                )}
                <Button size="lg" variant="outline" className="border-primary/50" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Image */}
            <div className="rounded-xl overflow-hidden border border-border/40 shadow-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            {/* Problem Statement */}
            <div className="space-y-4">
              <h2 className="font-mono text-2xl font-bold text-primary">
                Problem Statement
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h2 className="font-mono text-2xl font-bold text-primary">
                My Solution & Key Features
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {project.solution}
              </p>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h2 className="font-mono text-2xl font-bold text-primary">
                Tech Stack Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
