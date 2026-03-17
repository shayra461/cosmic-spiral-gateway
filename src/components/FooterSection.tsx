import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="relative py-12 border-t border-border/50 bg-grain overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-primary/3 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-foreground">The Cosmic Spiral</p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Kent L. Balzer. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {["Twitter", "Instagram", "Goodreads"].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
