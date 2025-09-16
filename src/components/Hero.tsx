import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 border border-destructive/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-poppins font-bold mb-6">
            <span className="gradient-text">Full Stack</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter leading-relaxed">
            Creando experiencias digitales del futuro con
            <span className="text-primary font-semibold"> tecnologías avanzadas</span> y
            <span className="text-accent font-semibold"> diseño innovador</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto font-inter">
            Especializado en React, Node.js, TypeScript y tecnologías de vanguardia. 
            Transformando ideas complejas en soluciones digitales elegantes y funcionales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold px-8 py-3 neon-purple hover-glow transition-all duration-300"
            >
              Ver Proyectos
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-inter font-semibold px-8 py-3 glass hover-glow transition-all duration-300"
            >
              Descargar CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-purple transition-all duration-300 hover-glow"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:neon-green transition-all duration-300 hover-glow"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive hover:neon-red transition-all duration-300 hover-glow"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;