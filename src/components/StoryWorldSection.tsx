import { motion } from "framer-motion";
import desertBg from "@/assets/desert-landscape.jpg";

const themes = [
  {
    icon: "◬",
    title: "Ancient Civilizations",
    description: "Forbidden archives. Sacred sites. Lost knowledge buried beneath millennia of silence.",
    color: "primary" as const,
  },
  {
    icon: "◎",
    title: "Time Travel",
    description: "Timeline fractures ripple across reality. The past, present, and future collide.",
    color: "accent" as const,
  },
  {
    icon: "⟁",
    title: "Cosmic Forces",
    description: "Reptilian shadows and cosmic energies wage war beyond the veil of perception.",
    color: "primary" as const,
  },
  {
    icon: "∞",
    title: "The Akashic Realm",
    description: "At the edge of existence, the Wheel of Taranis awaits its chosen champion.",
    color: "accent" as const,
  },
];

const StoryWorldSection = () => {
  return (
    <section id="world" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-background" />
      
      {/* Desert bg subtle */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-bottom"
        style={{ backgroundImage: `url(${desertBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Floating desert orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-primary/5 blur-[60px]"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[30%] right-[15%] w-32 h-32 rounded-full bg-accent/5 blur-[50px]"
      />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-body text-xs uppercase text-primary mb-6"
          >
            Fragments of Time
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            The Story World
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 rounded-sm group cursor-default relative overflow-hidden"
              style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}
            >
              {/* Hover glow overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                theme.color === "accent" 
                  ? "bg-gradient-to-br from-accent/5 to-transparent" 
                  : "bg-gradient-to-br from-primary/5 to-transparent"
              }`} />
              
              {/* Shimmer line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-700" />

              <motion.span 
                className={`text-4xl block mb-4 ${theme.color === "accent" ? "text-accent" : "text-primary text-glow-orange"}`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {theme.icon}
              </motion.span>
              <h3 className="font-display text-2xl text-foreground mb-3 relative z-10">{theme.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed relative z-10">{theme.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="desert-divider mt-16" />
      </div>
    </section>
  );
};

export default StoryWorldSection;
