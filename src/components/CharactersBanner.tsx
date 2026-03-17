import { motion } from "framer-motion";
import charactersScene from "@/assets/characters-scene.png";

const CharactersBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full image display */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full"
      >
        <img
          src={charactersScene}
          alt="The heroes of The Cosmic Spiral"
          className="w-full h-auto block"
        />
      </motion.div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-background to-transparent z-10" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-background to-transparent z-10" />
      {/* Side fades */}
      <div className="absolute top-0 bottom-0 left-0 w-[10%] bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-[10%] bg-gradient-to-l from-background to-transparent z-10" />

      {/* Orange heat glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-primary/8 to-transparent z-10" />

      {/* Energy line */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-[45%] h-px w-[30%] bg-gradient-to-r from-transparent via-accent/25 to-transparent z-20"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 md:pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3"
            animate={{ textShadow: [
              "0 0 10px hsla(190,90%,60%,0.3)",
              "0 0 30px hsla(190,90%,60%,0.6)",
              "0 0 10px hsla(190,90%,60%,0.3)",
            ]}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Five strangers. One destiny.
          </motion.p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground text-glow-orange">
            The Fate of the Spiral Rests in Their Hands
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersBanner;
