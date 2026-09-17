"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", className = "" }: Props) {
  if (variant === "ghost") {
    return (
      <Link href={href} className={`link-3d ${className}`}>
        {children}
      </Link>
    );
  }
  const cls = variant === "secondary" ? "btn-3d btn-3d-line" : "btn-3d btn-3d-sun";
  return (
    <Link href={href} className={`${cls} ${className}`}>
      {children}
    </Link>
  );
}
