import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "iOS/Android", level: 75 },
        { name: "PWA", level: 88 }
      ]
    },
    {
      title: "DevOps",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS/Azure", level: 82 },
        { name: "CI/CD", level: 78 },
        { name: "Kubernetes", level: 70 }
      ]
    }
  ];

  const tools = [
    "Git", "Figma", "VS Code", "Postman", "Jira", "Slack", "Linux", "Firebase"
  ];

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="gradient-text">Tecnologías</span> & 
            <span className="text-foreground"> Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Dominio completo del stack tecnológico moderno para crear soluciones escalables y eficientes
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="glass-card rounded-2xl p-6 hover-glow transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-inter font-medium text-foreground/90">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-2xl font-poppins font-semibold text-foreground">
              Herramientas & Tecnologías Adicionales
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span 
                key={tool}
                className="px-4 py-2 glass rounded-full text-sm font-inter font-medium text-foreground/90 hover:text-primary hover:neon-purple transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;