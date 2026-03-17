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

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-6">Voices from the Spiral</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            What Readers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 rounded-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
