import { motion } from "framer-motion";
import bookCover from "@/assets/book-front.jpg";
import desertBg from "@/assets/desert-landscape.jpg";
import SpiralSVG from "./SpiralSVG";

const BuySection = () => {
  return (
    <section id="buy" className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      {/* Desert landscape background */}
      <div
        className="absolute inset-0 opacity-[0.12] bg-cover bg-center animate-sand-drift"
        style={{ backgroundImage: `url(${desertBg})` }}
      />
      <div className="absolute inset-0 desert-gradient" />
      <div className="absolute inset-0 bg-background/70" />

      {/* Spiral */}
      <SpiralSVG className="absolute right-[-20%] top-[-20%] w-[60vh] h-[60vh] animate-spiral opacity-[0.06]" />

      {/* Glowing orb */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-60 h-60 rounded-full bg-primary/10 blur-[80px]"
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
            className="font-body text-xs uppercase text-accent mb-6"
          >
            The Call to Journey
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Begin Your Journey
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 justify-center">
          {/* Book mockup with float animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-accent/15 blur-3xl rounded-sm animate-pulse-glow" />
              <img
                src={bookCover}
                alt="The Cosmic Spiral book"
                className="relative w-56 md:w-72 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] rounded-sm"
                style={{ transform: "perspective(800px) rotateY(-8deg)" }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left max-w-md"
          >
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
              <p className="font-display text-2xl text-foreground italic pl-4">
                "Start your journey through the Spiral today."
              </p>
            </div>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Available now in paperback. Step into a world where time fractures, ancient prophecies awaken, and one man holds the key to everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">Amazon</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm overflow-hidden group shadow-[0_0_30px_hsla(28,90%,55%,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">Direct Purchase</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
