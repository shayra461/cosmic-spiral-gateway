import { motion } from "framer-motion";
import SpiralSVG from "./SpiralSVG";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-background" />
      <SpiralSVG className="absolute -right-40 top-0 w-[80vh] h-[80vh] animate-spiral opacity-10" />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <div className="w-3 h-3 border border-primary/60 rotate-45" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-6 text-center">About the Book</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground text-center mb-12">
            The Akashic Record
          </h2>

          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg font-body">
            <p className="drop-cap">
              When Matthew Farley uncovers a crystal obelisk hidden deep within a forgotten cave, he has no idea he has awakened something ancient—or that it has been waiting for one man.
            </p>
            <p>
              Dr. Jack Magnus, a brilliant chemist and physicist is haunted by a strange spiral birthmark, and soon discovers the artifact is tied not only to lost civilizations, but to his own hidden origins. Guided by a Navajo prophecy, forbidden Vatican archives, and a retired secret space program operative, Jack is drawn into a cosmic struggle over time itself.
            </p>
            <p>
              As timeline fractures ripple across reality and reptilian forces move from the shadows, Jack must confront the truth of who—and what—he is. His journey will take him from sacred Earth sites to alien worlds, from the depths of human history to the edge of the Akashic realm, where the legendary Wheel of Taranis awaits.
            </p>
            <p>
              To claim it, Jack must survive impossible trials, face betrayal and loss, and awaken a power that could heal the Spiral of time… —or shatter it forever.
            </p>
            <p className="text-primary font-display text-2xl italic text-center mt-10">
              The Wheel has begun to turn.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-6 text-center"
        >
          {[
            { num: "4,000", label: "Years of History" },
            { num: "1", label: "Cosmic Secret" },
            { num: "0", label: "Ways Back" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 rounded-sm">
              <p className="font-display text-3xl md:text-4xl text-primary text-glow-orange">{stat.num}</p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
