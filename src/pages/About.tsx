import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="font-mono text-4xl lg:text-6xl font-bold">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              My journey into the world of technology and artificial intelligence
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Bio */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                 Hello! I'm a final-year Artificial Intelligence and Machine Learning Engineering student 
                 with a deep passion for transforming complex theory into practical, real-world applications. 
                 My journey into technology is driven by a desire to build functional solutions that solve tangible problems, 
                 which you can see in the end-to-end projects I've developed.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  My unique strength lies in bridging the gap between academic concepts and functional code. 
                  Whether it's developing security tools, creating automation scripts, or building intelligent systems that understand natural language, 
                  I am committed to writing clean, efficient code and seeing a project through from idea to execution.

                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  I am actively seeking opportunities where I can apply my skills in Python, machine learning, and API integration to contribute to a forward-thinking team. 
                  I am eager to help build innovative software and data-driven solutions.
                </p>
              </div>
            </div>

            {/* Education */}
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h2 className="font-mono text-2xl font-bold text-primary">Education</h2>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Bachelor of Engineering in Artificial Intelligence & Machine Learning</h3>
                    <p className="text-muted-foreground">The Oxford College of Engineering (Visvesvaraya Technological University)</p>
                    <p className="text-muted-foreground">Expected Graduation: 2026 </p>
                    <p className="text-muted-foreground">CGPA: 8 / 10.0</p>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Python Programming",
                        "Data Structures & Algorithms",
                        "Machine Learning",
                        "Deep Learning",
                        "Database Management Systems",
                        "Natural Language Processing",
                        "Computer Vision",
                        "Cloud Computing"
                      ].map((course) => (
                        <li key={course} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h2 className="font-mono text-2xl font-bold text-primary">Certifications</h2>
                  <ul className="space-y-1">
                    {[
                      {
                        title: "Python Full Course Online Complete Beginner to Advanced",
                        issuer: "GeeksforGeeks",
                        year: "2025",
                        file: "python.pdf" 
                      },
                      {
                        title: "SQL (Basic)", 
                        issuer: "HackerRank", 
                        year: "2025",
                        file: "sql-basics.pdf" 
                      },
                      {
                        title: "Cloud Computing Fundamentals",
                        issuer: "IBM",
                        year: "2025",
                        file: "cloud-computing-fundamentals.pdf"
                      },
                      {
                        title: "Data Analytics Job Simulation",
                        issuer: "Deloitte (Forage)",
                        year: "2025",
                        file: "data-analytics-job-simulation.pdf"
                      },
                      {
                        title: "Introduction to Artificial Intelligence",
                        issuer: "LinkedIn Learning",
                        year: "2024",
                        file: "intro-to-ai.jpg"
                      },
                      {
                        title: "Basics of Machine Learning",
                        issuer: "Great Learning Academy",
                        year: "2024",
                        file: "basics-of-machine-learning.jpg"
                      },
                      {
                        title: "Machine Learning using Python",
                        issuer: "Simplilearn",
                        year: "2024",
                        file: "ml-using-python.jpg"
                      }
                    ].map((cert) => (
                      <li key={cert.title}>
                        <a 
                          href={`/certificates/${cert.file}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 -m-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                        >
                          <h4 className="font-semibold group-hover:text-primary transition-colors">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
