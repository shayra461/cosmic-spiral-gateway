import { motion } from "framer-motion";

const reviews = [
  {
    text: "A breathtaking fusion of science fiction and ancient mythology. Balzer weaves a tapestry of time that left me questioning everything I thought I knew.",
    author: "Reader Review",
    rating: 5,
  },
  {
    text: "The Wheel of Taranis is the kind of book that stays with you long after the last page. Epic in scope, intimate in heart.",
    author: "Reader Review",
    rating: 5,
  },
  {
    text: "Imagine Dune meets Indiana Jones with a cosmic twist. This is one of the most ambitious debut novels I've ever encountered.",
    author: "Reader Review",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative py-[15vh] md:py-[20vh] overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-background" />
      
      {/* Desert warm glow */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-primary/10 to-transparent"
      />

      {/* Drifting sand */}
      <motion.div
        animate={{ x: ["-10%", "120%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[50%] h-px w-[20%] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
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
            className="font-body text-xs uppercase text-primary mb-6"
          >
            Voices from the Spiral
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            What Readers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 rounded-sm group relative overflow-hidden"
            >
              {/* Top border glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <motion.span 
                    key={j} 
                    className="text-primary text-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15 + j * 0.05, duration: 0.3 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-6 italic relative z-10">
                "{review.text}"
              </p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="desert-divider mt-16" />
      </div>
    </section>
  );
};

export default ReviewsSection;
