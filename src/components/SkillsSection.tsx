import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "React", level: 80 },
  { name: "Java", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 70 },
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      <div className="floating-blob w-72 h-72 bg-accent -left-36 top-0" />

      <div className="w-full px-6">
        <div className="section-reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="section-reveal space-y-5">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary">
                  <div
                    className={`skill-bar-fill ${animate ? "animate" : ""}`}
                    style={{ maxWidth: `${skill.level}%`, transitionDelay: `${i * 0.1}s` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="section-reveal glass-card rounded-xl p-6" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">What I Bring</h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-4">
              With a strong foundation in both frontend and backend technologies, I build end-to-end web applications 
              that are performant, accessible, and visually polished. From crafting pixel-perfect UIs with React and Tailwind CSS 
              to designing RESTful APIs with Node.js and MongoDB — I cover the full stack.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mb-4">
              I'm passionate about writing clean, maintainable code and continuously learning emerging technologies. 
              My approach emphasizes performance optimization, responsive design, and scalable architecture.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Git", "REST APIs", "Responsive Design", "UI/UX", "Agile"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
