type BrandMarkProps = {
  className?: string;
  accent?: boolean;
};

export function BrandMark({ className = "", accent = false }: BrandMarkProps) {
  const sun = accent ? "#e39b24" : "currentColor";
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2.4" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180;
        const x1 = 60 + Math.cos(a) * 54;
        const y1 = 60 + Math.sin(a) * 54;
        const x2 = 60 + Math.cos(a) * 59.5;
        const y2 = 60 + Math.sin(a) * 59.5;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 3 === 0 ? sun : "currentColor"}
            strokeWidth={i % 3 === 0 ? 2.6 : 1.6}
            strokeLinecap="round"
          />
        );
      })}
      <path
        d="M71 34c-18-8-38 2-38 18 0 11 8 16 22 18 12 2 18 7 18 15 0 12-14 18-30 14"
        stroke="currentColor"
        strokeWidth="7.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 32h36"
        stroke={sun}
        strokeWidth="7.2"
        strokeLinecap="round"
      />
      <path d="M86 32v50" stroke="currentColor" strokeWidth="7.2" strokeLinecap="round" />
    </svg>
  );
}
