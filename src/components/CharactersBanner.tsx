import { motion } from "framer-motion";
import charactersScene from "@/assets/characters-scene.png";

const CharactersBanner = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${charactersScene})` }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-accent text-glow-cyan mb-3">
            Five strangers. One destiny.
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground text-glow-orange">
            The Fate of the Spiral Rests in Their Hands
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersBanner;
