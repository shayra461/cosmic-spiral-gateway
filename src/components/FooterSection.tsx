const FooterSection = () => {
  return (
    <footer className="relative py-12 border-t border-border bg-grain">
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-foreground">The Cosmic Spiral</p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Kent L. Balzer. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {["Twitter", "Instagram", "Goodreads"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
