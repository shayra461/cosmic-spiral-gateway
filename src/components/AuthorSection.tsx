import { motion } from "framer-motion";
import authorPhoto from "@/assets/author-kent.jpeg";

const AuthorSection = () => {
  return (
    <section id="author" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-accent text-center mb-6">The Mind Behind the Spiral</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground text-center mb-16">
            Meet the Author
          </h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            {/* Author image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-b from-primary/30 to-accent/20 rounded-sm blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative w-56 md:w-64 aspect-[3/4] glass-card rounded-sm overflow-hidden">
                  <img
                    src={authorPhoto}
                    alt="Kent L. Balzer"
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-foreground/80 leading-relaxed font-body">
              <p>
                Kent L. Balzer was born in Texas City, Texas, in 1967 and grew up along the Gulf Coast with a lifelong passion for music, storytelling, and big ideas. After graduating from Dickinson High School in 1985, he served in the United States Navy as a Yeoman Third Class from 1985 to 1989.
              </p>
              <p>
                He later earned a Bachelor of Arts in Radio-Television from the University of Houston in 1996.
              </p>
              <p>
                A musician as well as a writer, Balzer has performed drums and percussion with bands including Apex, Brass Hat, Hellfire Revival, and The Soarce.
              </p>
              <p>
                Drawing on interests that span science, mythology, philosophy, and history, he is the author of The Cosmic Spiral Trilogy, an ambitious work exploring the deep patterns that shape the universe and humanity's place within it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
