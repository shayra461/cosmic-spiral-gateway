import { motion } from "framer-motion";
import bookCover from "@/assets/book-front.jpg";

const BuySection = () => {
  return (
    <section id="buy" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-6">The Call to Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Begin Your Journey
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20 justify-center"
        >
          {/* Book mockup */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl rounded-sm" />
            <img
              src={bookCover}
              alt="The Cosmic Spiral book"
              className="relative w-56 md:w-72 shadow-2xl rounded-sm"
              style={{ transform: "perspective(800px) rotateY(-8deg)" }}
            />
          </div>

          <div className="text-center md:text-left max-w-md">
            <p className="font-display text-2xl text-foreground mb-2 italic">
              "Start your journey through the Spiral today."
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Available now in paperback. Step into a world where time fractures, ancient prophecies awaken, and one man holds the key to everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:scale-105 transition-transform duration-300"
              >
                Amazon
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_hsla(28,90%,55%,0.4)]"
              >
                Direct Purchase
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuySection;
