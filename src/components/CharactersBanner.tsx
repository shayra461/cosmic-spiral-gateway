import { motion } from "framer-motion";
import charactersScene from "@/assets/characters-scene.png";

const CharactersBanner = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Parallax image */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${charactersScene})` }}
      />

      {/* Desert heat haze */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Orange heat glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-primary/10 to-transparent" />

      {/* Animated energy lines */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] h-px w-[30%] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
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
