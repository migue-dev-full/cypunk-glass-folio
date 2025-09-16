import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Cyberpunk",
      description: "Plataforma de comercio electrónico con diseño futurista, pagos integrados y gestión de inventario en tiempo real.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Panel de control para visualización de datos con gráficos interactivos y métricas en tiempo real.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Aplicación móvil de banca digital con autenticación biométrica y transacciones seguras.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "TypeScript"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 4,
      title: "AI Chat Platform",
      description: "Plataforma de chat inteligente con procesamiento de lenguaje natural y respuestas automatizadas.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "FastAPI", "OpenAI", "Redis"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "IoT Monitoring System",
      description: "Sistema de monitoreo para dispositivos IoT con alertas en tiempo real y análisis predictivo.",
      image: "/api/placeholder/400/300",
      technologies: ["Node.js", "InfluxDB", "Docker", "AWS"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Manager",
      description: "Herramienta para gestión de redes sociales con programación de posts y análisis de engagement.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Prisma", "Tailwind", "Vercel"],
      github: "#",
      live: "#",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="text-foreground">Proyectos</span>
            <span className="gradient-text"> Destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades técnicas y creatividad
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-muted-foreground/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.live}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-poppins font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-inter font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8 text-center">
            Otros Proyectos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-card rounded-xl p-6 hover-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.live}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-inter mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-inter text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8"
          >
            Ver Más Proyectos en GitHub
            <Github className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
