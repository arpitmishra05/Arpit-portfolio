import { MapPin, GraduationCap, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="section-reveal">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            A glimpse into who I am and what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="section-reveal glass-card rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-display font-semibold text-foreground">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I'm Arpit Mishra, a passionate Computer Science student at Lovely Professional University, Phagwara, Punjab. 
              Originally from the culturally rich city of Varanasi, Uttar Pradesh, I bring creativity and dedication to every project I build.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I specialize in full stack web development, with a strong foundation in modern JavaScript frameworks, 
              backend technologies, and database management. I believe in writing clean, scalable code that delivers exceptional user experiences.
            </p>
          </div>

          <div className="section-reveal space-y-4" style={{ transitionDelay: "0.15s" }}>
            {[
              { icon: GraduationCap, label: "Institute", value: "Lovely Professional University, Phagwara, Punjab" },
              { icon: MapPin, label: "Hometown", value: "Varanasi, Uttar Pradesh, India" },
              { icon: Mail, label: "Email", value: "arpitmishra0003@gmail.com", href: "mailto:arpitmishra0003@gmail.com" },
              { icon: Phone, label: "Mobile", value: "8299105304", href: "tel:8299105304" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card rounded-xl p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
