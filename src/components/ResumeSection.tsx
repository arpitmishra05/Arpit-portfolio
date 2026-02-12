import { Download, GraduationCap, Calendar } from "lucide-react";

const timeline = [
  { year: "2022 – Present", title: "B.Tech in Computer Science", place: "Lovely Professional University, Punjab" },
  { year: "2020 – 2022", title: "Higher Secondary (12th)", place: "Varanasi, Uttar Pradesh" },
  { year: "2018 – 2020", title: "Secondary School (10th)", place: "Varanasi, Uttar Pradesh" },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="section-reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">Education journey & experience</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Timeline */}
          <div className="section-reveal space-y-6 mb-10">
            {timeline.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex gap-4" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Calendar size={12} /> {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download */}
          <div className="section-reveal text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={18} /> Download Resume
            </a>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
