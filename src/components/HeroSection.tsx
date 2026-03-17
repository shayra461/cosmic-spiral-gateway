import { motion } from "framer-motion";
import bookCover from "@/assets/book-front.jpg";
import SpiralSVG from "./SpiralSVG";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grain">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(222,47%,8%)_0%,_hsl(222,47%,4%)_70%,_hsl(222,47%,2%)_100%)]" />

      {/* Spiral background */}
      <SpiralSVG className="absolute w-[150vh] h-[150vh] animate-spiral opacity-20" />

      {/* Energy conduits */}
      <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-energy-line" />
      <div className="absolute right-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-energy-line" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20">
        {/* Book Cover */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-sm blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={bookCover}
              alt="The Cosmic Spiral — Book One: The Wheel of Taranis by Kent L. Balzer"
              className="relative w-64 md:w-80 lg:w-96 shadow-2xl rounded-sm"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left max-w-xl"
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">A Novel by Kent L. Balzer</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground mb-4" style={{ textWrap: "balance" as any }}>
            The Cosmic{" "}
            <span className="text-primary text-glow-orange">Spiral</span>
          </h1>
          <p className="font-display text-2xl md:text-3xl text-muted-foreground italic mb-6">
            Book One: The Wheel of Taranis
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed">
            "The Wheel has begun to turn. Will you be crushed by its weight, or learn to drive it?"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#buy"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_hsla(28,90%,55%,0.4)]"
            >
              Buy Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-body font-medium text-sm uppercase tracking-[0.15em] rounded-sm backdrop-blur-md hover:border-accent/60 hover:text-accent transition-colors duration-300"
            >
              Read Preview
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-1.5" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
