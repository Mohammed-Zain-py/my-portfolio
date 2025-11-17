import { Code2, Database, Boxes, TerminalSquare } from "lucide-react";

const competencies = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "SQL"]
  },
  {
    icon: Boxes,
    title: "Libraries & Frameworks",
    skills: ["Pandas", "Scikit-learn", "Flask", "Pillow (PIL)"]
  },
  {
    icon: Database,
    title: "Key Concepts",
    skills: ["Machine Learning", "Data Science", "Cryptography", "API Integration", "NLU"]
  },
  {
    icon: TerminalSquare,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Command Line", "REST APIs"]
  },
];

const CoreCompetencies = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-mono text-4xl lg:text-5xl font-bold">
            Core <span className="text-primary">Competencies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical skills and tools I leverage to build intelligent solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div
                key={competency.title}
                className="group p-8 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="font-mono text-xl font-semibold text-foreground">
                    {competency.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {competency.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
