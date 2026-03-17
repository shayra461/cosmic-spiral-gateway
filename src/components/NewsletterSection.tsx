import { motion } from "framer-motion";
import { useState } from "react";
import SpiralSVG from "./SpiralSVG";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-secondary/15" />
      
      {/* Desert warm haze */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-primary/5 to-transparent" />
      
      {/* Spiral */}
      <SpiralSVG className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] animate-spiral opacity-[0.04]" />

      {/* Floating particles */}
      <motion.div
        animate={{ y: [-30, 30, -30], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[25%] w-40 h-40 rounded-full bg-primary/10 blur-[60px]"
      />

      <div className="relative z-10 container mx-auto px-6 max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-body text-xs uppercase text-accent mb-6"
          >
            Don't Be Left in the Past
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            Join the Spiral
          </h2>
          <p className="font-body text-muted-foreground mb-10 leading-relaxed">
            The Wheel has begun to turn. Sign up for updates on the next book, exclusive content, and cosmic dispatches.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p
                className="font-display text-3xl text-primary"
                animate={{ textShadow: [
                  "0 0 20px hsla(28,90%,55%,0.4)",
                  "0 0 50px hsla(28,90%,55%,0.7)",
                  "0 0 20px hsla(28,90%,55%,0.4)",
                ]}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Welcome to the Spiral.
              </motion.p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative flex-1 group">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-border text-foreground font-body px-2 py-3 focus:outline-none focus:border-primary transition-colors duration-500 placeholder:text-muted-foreground"
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-focus-within:via-primary/60 transition-all duration-500" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm overflow-hidden group shadow-[0_0_30px_hsla(28,90%,55%,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">Subscribe</span>
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
