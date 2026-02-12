import { ArrowDown, Github, Linkedin } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import profileAvatar from "@/assets/profile-avatar.jpg";

const HeroSection = () => {
  const typedText = useTypingAnimation([
    "Computer Science Core Student",
    "Full Stack Developer",
    "React Enthusiast",
  ]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating blobs */}
      <div className="floating-blob w-96 h-96 bg-primary top-20 -left-48" />
      <div className="floating-blob w-80 h-80 bg-accent bottom-20 -right-40" style={{ animationDelay: "3s" }} />
      <div className="floating-blob w-64 h-64 bg-primary top-1/2 left-1/2" style={{ animationDelay: "5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-3 animate-fade-in-up">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Arpit <span className="gradient-text">Mishra</span>
            </h1>
            <div className="h-8 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-lg sm:text-xl text-muted-foreground typing-cursor pr-1">
                {typedText}
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Building modern web experiences with clean code and creative design.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <a href="https://github.com/arpitmishra05" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/arpitmishra05/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_hsl(175_80%_50%/0.15)]">
                <img src={profileAvatar} alt="Arpit Mishra" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
