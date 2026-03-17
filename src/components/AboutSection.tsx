import { motion } from "framer-motion";
import SpiralSVG from "./SpiralSVG";
import desertBg from "@/assets/desert-landscape.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      {/* Desert background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center animate-sand-drift"
        style={{ backgroundImage: `url(${desertBg})` }}
      />
      <div className="absolute inset-0 desert-gradient" />
      
      {/* Floating sand particles */}
      <motion.div
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] h-px w-[30%] bg-gradient-to-r from-transparent via-primary/15 to-transparent"
      />
      <motion.div
        animate={{ x: ["110%", "-10%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-[60%] h-px w-[20%] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
      />

      <SpiralSVG className="absolute -right-40 top-0 w-[80vh] h-[80vh] animate-spiral opacity-10" />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        {/* Animated divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16 justify-center"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border border-primary/60 rotate-45"
          />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-body text-xs uppercase text-primary mb-6 text-center"
          >
            About the Book
          </motion.p>
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
            <motion.p 
              className="text-primary font-display text-2xl italic text-center mt-10"
              animate={{ 
                textShadow: [
                  "0 0 20px hsla(28,90%,55%,0.3)",
                  "0 0 40px hsla(28,90%,55%,0.6)",
                  "0 0 20px hsla(28,90%,55%,0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              The Wheel has begun to turn.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-6 text-center"
        >
          {[
            { num: "4,000", label: "Years of History" },
            { num: "1", label: "Cosmic Secret" },
            { num: "0", label: "Ways Back" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="glass-card p-6 rounded-sm animate-glow-breathe"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              style={{ animationDelay: `${i * 1.3}s` }}
            >
              <p className="font-display text-3xl md:text-4xl text-primary text-glow-orange">{stat.num}</p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="desert-divider mt-16" />
      </div>
    </section>
  );
};

export default AboutSection;
