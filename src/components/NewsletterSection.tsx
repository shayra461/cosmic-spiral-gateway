import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative z-10 container mx-auto px-6 max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-6">Don't Be Left in the Past</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            Join the Spiral
          </h2>
          <p className="font-body text-muted-foreground mb-10 leading-relaxed">
            The Wheel has begun to turn. Sign up for updates on the next book, exclusive content, and cosmic dispatches.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-display text-2xl text-primary text-glow-orange"
            >
              Welcome to the Spiral.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border-b border-border text-foreground font-body px-2 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_hsla(28,90%,55%,0.4)]"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
