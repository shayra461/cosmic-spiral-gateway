import { motion } from "framer-motion";

const themes = [
  {
    icon: "◬",
    title: "Ancient Civilizations",
    description: "Forbidden archives. Sacred sites. Lost knowledge buried beneath millennia of silence.",
  },
  {
    icon: "◎",
    title: "Time Travel",
    description: "Timeline fractures ripple across reality. The past, present, and future collide.",
  },
  {
    icon: "⟁",
    title: "Cosmic Forces",
    description: "Reptilian shadows and cosmic energies wage war beyond the veil of perception.",
  },
  {
    icon: "∞",
    title: "The Akashic Realm",
    description: "At the edge of existence, the Wheel of Taranis awaits its chosen champion.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const StoryWorldSection = () => {
  return (
    <section id="world" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-6">Fragments of Time</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            The Story World
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {themes.map((theme) => (
            <motion.div
              key={theme.title}
              variants={item}
              className="glass-card p-8 rounded-sm group hover:border-accent/50 transition-colors duration-500 cursor-default"
              style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}
              whileHover={{ borderColor: "rgba(100,220,255,0.4)" }}
            >
              <span className="text-4xl block mb-4 text-primary text-glow-orange">{theme.icon}</span>
              <h3 className="font-display text-2xl text-foreground mb-3">{theme.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{theme.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoryWorldSection;
