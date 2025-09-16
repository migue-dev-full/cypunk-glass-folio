import { FileText, Palette, Wind, FileCode, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FileText className="w-8 h-8" />,
      level: 95,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CSS",
      icon: <Palette className="w-8 h-8" />,
      level: 90,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Tailwind CSS",
      icon: <Wind className="w-8 h-8" />,
      level: 92,
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "JavaScript",
      icon: <FileCode className="w-8 h-8" />,
      level: 88,
      color: "from-yellow-400 to-yellow-500"
    },
    {
      name: "Node.js",
      icon: <Server className="w-8 h-8" />,
      level: 85,
      color: "from-green-500 to-green-600"
    }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:neon-purple transition-all duration-300">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                {skill.name}
              </h3>

              {/* Progress Circle */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    fill="none"
                    className="opacity-20"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2.51 * skill.level} 251`}
                    className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_hsl(var(--primary))]"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                </svg>
                {/* Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-inter">
                {skill.name === "HTML" && "Estructura semántica y accesible"}
                {skill.name === "CSS" && "Diseño responsivo y animaciones"}
                {skill.name === "Tailwind CSS" && "Framework utility-first"}
                {skill.name === "JavaScript" && "ES6+ y programación funcional"}
                {skill.name === "Node.js" && "Backend y APIs RESTful"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;