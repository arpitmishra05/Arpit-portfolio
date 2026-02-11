import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/arpitmishra05" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arpitmishra05/" },
  // { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  // { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arpit Mishra. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
