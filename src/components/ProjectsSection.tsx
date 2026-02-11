import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Ecommerce Website",
    description: "A full-featured online shopping platform with product browsing, cart management, secure checkout, and user authentication.",
    features: ["Product catalog with filters", "Shopping cart & wishlist", "Secure payment integration", "User authentication & profiles", "Order tracking dashboard", "Admin panel for inventory"],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    featured: true,
  },
  {
    title: "AI Smart Assistant",
    description: "An intelligent recommendation system powered by machine learning that provides personalized suggestions based on user behavior and preferences.",
    features: ["Natural language processing", "Personalized recommendations", "Real-time data analysis", "Interactive dashboard"],
    tech: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="floating-blob w-80 h-80 bg-primary right-0 top-20" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6">
        <div className="section-reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Featured work showcasing my skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="section-reveal glass-card glow-border rounded-xl p-6 sm:p-8"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                  Featured Project
                </span>
              )}
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="grid sm:grid-cols-2 gap-2 mb-5">
                {project.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="https://github.com/arpitmishra05" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://craftingsign.com/" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
