import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bookCover from "@/assets/book-front.jpg";
import SpiralSVG from "./SpiralSVG";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bookRotateY = useTransform(springX, [0, 1], [8, -8]);
  const bookRotateX = useTransform(springY, [0, 1], [-5, 5]);
  const glowX = useTransform(springX, [0, 1], [-20, 20]);
  const glowY = useTransform(springY, [0, 1], [-20, 20]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grain"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_hsl(222,47%,10%)_0%,_hsl(222,47%,4%)_50%,_hsl(222,47%,2%)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsla(28,90%,30%,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsla(190,90%,40%,0.08)_0%,_transparent_40%)]" />

      {/* Animated spiral layers */}
      <SpiralSVG className="absolute w-[180vh] h-[180vh] animate-spiral opacity-15" />
      <SpiralSVG className="absolute w-[120vh] h-[120vh] opacity-10" style={{ animation: "spiral-rotate 80s linear infinite reverse" }} />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-30, 30, -30], x: [-15, 15, -15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[20%] w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-accent/8 blur-[60px]"
      />

      {/* Energy conduits with pulse */}
      {[12, 88].map((pos, i) => (
        <div key={pos} className="absolute top-0 bottom-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <motion.div
            animate={{ top: ["-20%", "120%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 2 }}
            className="absolute w-px h-[15%] bg-gradient-to-b from-transparent via-primary/60 to-transparent"
          />
        </div>
      ))}

      {/* Horizontal energy lines */}
      {[25, 75].map((pos, i) => (
        <div key={`h-${pos}`} className="absolute left-0 right-0" style={{ top: `${pos}%` }}>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
          <motion.div
            animate={{ left: ["-10%", "110%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 3 }}
            className="absolute h-px w-[10%] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-20">
        {/* Book Cover with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
          animate={mounted ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 perspective-[1200px]"
        >
          <motion.div
            style={{ rotateY: bookRotateY, rotateX: bookRotateX }}
            className="relative group"
          >
            {/* Multi-layer glow */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-primary/5 to-accent/20 rounded-sm blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
            />
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/40 via-transparent to-accent/30 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Animated border shimmer */}
            <div className="absolute -inset-px overflow-hidden rounded-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0%,_hsla(28,90%,55%,0.4)_10%,transparent_20%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>

            <img
              src={bookCover}
              alt="The Cosmic Spiral — Book One: The Wheel of Taranis by Kent L. Balzer"
              className="relative w-64 md:w-80 lg:w-[420px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] rounded-sm"
            />

            {/* Light reflection */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-sm pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5"
          >
            A Novel by Kent L. Balzer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-medium leading-[1.05] text-foreground mb-5"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", textWrap: "balance" as any }}
          >
            The Cosmic{" "}
            <motion.span
              className="text-primary inline-block"
              style={{ textShadow: "0 0 40px hsla(28, 90%, 55%, 0.5), 0 0 80px hsla(28, 90%, 55%, 0.2)" }}
              animate={{ textShadow: [
                "0 0 40px hsla(28, 90%, 55%, 0.5), 0 0 80px hsla(28, 90%, 55%, 0.2)",
                "0 0 60px hsla(28, 90%, 55%, 0.7), 0 0 120px hsla(28, 90%, 55%, 0.3)",
                "0 0 40px hsla(28, 90%, 55%, 0.5), 0 0 80px hsla(28, 90%, 55%, 0.2)",
              ]}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Spiral
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-display text-2xl md:text-3xl text-muted-foreground italic mb-8"
          >
            Book One: The Wheel of Taranis
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.1 }}
          >
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
              <p className="font-display text-xl md:text-2xl text-foreground/70 leading-relaxed pl-4">
                "The Wheel has begun to turn. Will you be crushed by its weight, or learn to drive it?"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#buy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative z-10">Buy Now</span>
              <span className="absolute inset-0 shadow-[0_0_40px_hsla(28,90%,55%,0.5)] group-hover:shadow-[0_0_60px_hsla(28,90%,55%,0.7)] transition-shadow duration-500" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-10 py-4 border border-foreground/20 text-foreground font-body font-medium text-sm uppercase tracking-[0.15em] rounded-sm backdrop-blur-md hover:border-accent/60 hover:text-accent transition-all duration-500 hover:shadow-[0_0_30px_hsla(190,90%,60%,0.15)]"
            >
              Read Preview
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-foreground/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-1.5 bg-primary rounded-full mt-1.5"
          />
        </motion.div>
        <p className="font-body text-[8px] uppercase tracking-[0.3em] text-muted-foreground/50 mt-1.5">
          Scroll
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
