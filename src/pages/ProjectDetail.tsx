import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

import vaultImage from '@/assets/password-vault.png';
import legacyATSImage from '@/assets/legacyATSImage.png';
import handwritingImage from '@/assets/handwriting-generator.png';
import voiceAnalyticsImage from '@/assets/voice-analytics.png';
import sonarImage from '@/assets/sonar-classification.png';
import movieImage from '@/assets/movie-recommendation.png';
import gamesImage from '@/assets/mini-games.png';

const projectsData: { [key: string]: any } = {
  "1": {
  title: "LegacyATS",
  image: legacyATSImage,
  videoUrl: "https://res.cloudinary.com/uyvtqzym/video/upload/v1782842335/VID_20260630220241_hxbwgc.mp4",
  demo: "https://legacyats.streamlit.app/",
  problem: "Many resumes are rejected by Applicant Tracking Systems (ATS) before reaching recruiters because they contain poor formatting, missing keywords, or are not optimized for job descriptions. Candidates often have no visibility into why their resumes fail.",
  solution: "Developed a web application that simulates ATS resume screening by analyzing uploaded resumes against job descriptions, calculating an ATS compatibility score, identifying missing keywords, and providing AI-powered improvement suggestions.",
  features: [
    "Upload and analyze PDF resumes",
    "Compare resumes against job descriptions",
    "Generate ATS compatibility scores",
    "Identify matched and missing keywords",
    "Provide actionable resume optimization suggestions",
    "AI-powered resume improvement suggestions",
    "Recruiter demo mode for testing different scenarios",
    "REST API architecture with FastAPI backend and Streamlit frontend"
  ],
  techStack: ["Python","FastAPI","Streamlit","pdfplumber","Google Gemini API","REST API","Git","Render","Streamlit Community Cloud"
  ],
  github: "https://github.com/Mohammed-Zain-py/LegacyATS"
  },

  "2": {
    title: "Secure Password Vault",
    image: vaultImage,
    videoUrl: "https://res.cloudinary.com/uyvtqzym/video/upload/v1782842309/VN20260630_221231_kkxorv.mp4",
    problem: "Managing dozens of online accounts often leads to weak or reused passwords, while storing credentials in plain text or third-party services introduces additional security risks.",
    solution: "Built a self-hosted password vault with a web interface that securely generates, encrypts, stores, and manages credentials locally using authenticated access and encrypted storage.",
    features: [
      "Master password authentication for secure vault access",
      "Fernet encryption for storing credentials securely",
      "Generate, search, add, update, and delete saved passwords",
      "Encrypted backup and restore with MySQL-backed storage"
    ],
    techStack: ["Python", "FastAPI", "Streamlit", "MySQL", "Cryptography (Fernet)"],
    github: "https://github.com/Mohammed-Zain-py/python-password-vault",
  },

  "3": {
    title: "Speech-Driven NLU Framework for Data Analytics",
    image: voiceAnalyticsImage,
    videoUrl: "https://res.cloudinary.com/uyvtqzym/video/upload/v1782838365/VID_20260630220752_r80qrp.mp4",
    problem: "Traditional data analysis tools require technical knowledge, making it difficult for non-technical users to explore datasets and extract insights independently.",
    solution: "Developed a web application that enables users to analyze CSV datasets through natural language using text or voice, translating requests into executable Pandas operations for interactive data exploration.",
    features: [
      "Natural language analytics through text and voice interaction",
      "Dynamic Pandas code generation and execution using Gemini API",
      "Conversation memory with multilingual support",
      "Interactive charts and audio responses for analytical queries"
    ],
    techStack: ["Python", "Flask", "Pandas", "Gemini API", "SQLite", "Chart.js"],
    github: "https://github.com/Mohammed-Zain-py/Speech-driven-NLU-framework",
  },

  "4": {
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

  "5": {
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

  "6": {
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
  
  "7": {
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

                {project.videoUrl && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                        <Play className="mr-2 h-5 w-5" />
                        Watch Demo
                      </Button>
                    </DialogTrigger>
                    {/* Modal Content - Styled dark to match your portfolio */}
                    <DialogContent className="sm:max-w-[900px] bg-[#0a0a0a] border-border/40 p-0 overflow-hidden">
                      <DialogTitle className="sr-only">Project Demo Video</DialogTitle>
                      <video
                        src={project.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-auto outline-none"
                        style={{ backgroundColor: '#0a0a0a', maxHeight: '80vh' }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </DialogContent>
                  </Dialog>
                )}
                {/* ----------------------------- */}

                <Button size="lg" variant="outline" className="border-primary/50" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Static Project Image (Visual Anchor Maintained) */}
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