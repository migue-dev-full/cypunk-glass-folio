import { Github, Linkedin, Mail, Twitter, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub", color: "hover:text-foreground" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <Mail size={20} />, href: "mailto:contact@example.com", label: "Email", color: "hover:text-accent" },
  ];

  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <footer id="contacto" className="relative border-t border-white/10">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-poppins font-bold gradient-text">
                FullStack Developer
              </span>
            </div>
            <p className="text-muted-foreground font-inter leading-relaxed mb-6 max-w-md">
              Creando experiencias digitales del futuro con tecnologías de vanguardia. 
              Especializado en desarrollo full-stack con enfoque en diseño innovador y funcionalidad excepcional.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground ${link.color} hover-glow transition-all duration-300`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-foreground mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-foreground mb-6">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground font-inter text-sm">
                  hello@fullstack.dev
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground font-inter text-sm">
                  github.com/fullstack
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground font-inter text-sm">
                  linkedin.com/in/fullstack
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground font-inter text-sm">
              <span>© {currentYear} FullStack Developer. Hecho con</span>
              <Heart className="w-4 h-4 text-destructive animate-pulse" />
              <span>y mucho café</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm font-inter">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidad
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Términos
              </a>
              <span className="text-muted-foreground">
                Versión 1.0
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-primary/10 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-accent/10 rounded-lg rotate-45 animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;