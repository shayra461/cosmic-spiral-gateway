const SpiralSVG = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 800 800"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M400 400 C400 300 500 200 400 200 C300 200 200 300 200 400 C200 500 300 600 400 600 C500 600 600 500 600 400 C600 300 500 150 400 150 C250 150 150 250 150 400 C150 550 250 650 400 650 C550 650 650 550 650 400 C650 250 550 100 400 100 C200 100 100 200 100 400 C100 600 200 700 400 700 C600 700 700 600 700 400"
      stroke="url(#spiralGrad)"
      strokeWidth="0.5"
      opacity="0.3"
    />
    <defs>
      <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(28, 90%, 55%)" />
        <stop offset="100%" stopColor="hsl(190, 90%, 60%)" />
      </linearGradient>
    </defs>
  </svg>
);

export default SpiralSVG;
