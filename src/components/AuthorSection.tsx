import { motion } from "framer-motion";
import authorPhoto from "@/assets/author-kent.jpeg";
import SpiralSVG from "./SpiralSVG";

const AuthorSection = () => {
  return (
    <section id="author" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-secondary/20" />
      {/* Desert sand gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-primary/5 to-transparent" />
      
      {/* Slow spiral */}
      <SpiralSVG className="absolute -left-60 -bottom-40 w-[60vh] h-[60vh] animate-spiral opacity-[0.06]" />

      {/* Drifting sand line */}
      <motion.div
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[25%] h-px w-[25%] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
      />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-body text-xs uppercase text-accent text-center mb-6"
        >
          The Mind Behind the Spiral
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-medium text-foreground text-center mb-16"
        >
          Meet the Author
        </motion.h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Author image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative group">
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-b from-primary/30 to-accent/20 rounded-sm blur-xl"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-56 md:w-64 aspect-[3/4] glass-card rounded-sm overflow-hidden group-hover:shadow-[0_0_40px_hsla(28,90%,55%,0.3)] transition-shadow duration-700">
                <img
                  src={authorPhoto}
                  alt="Kent L. Balzer"
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Bio with staggered paragraphs */}
          <div className="space-y-5 text-foreground/80 leading-relaxed font-body">
            {[
              "Kent L. Balzer was born in Texas City, Texas, in 1967 and grew up along the Gulf Coast with a lifelong passion for music, storytelling, and big ideas. After graduating from Dickinson High School in 1985, he served in the United States Navy as a Yeoman Third Class from 1985 to 1989.",
              "He later earned a Bachelor of Arts in Radio-Television from the University of Houston in 1996.",
              "A musician as well as a writer, Balzer has performed drums and percussion with bands including Apex, Brass Hat, Hellfire Revival, and The Soarce.",
              "Drawing on interests that span science, mythology, philosophy, and history, he is the author of The Cosmic Spiral Trilogy, an ambitious work exploring the deep patterns that shape the universe and humanity's place within it.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="desert-divider mt-16" />
      </div>
    </section>
  );
};

export default AuthorSection;
