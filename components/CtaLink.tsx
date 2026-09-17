import Link from "next/link";
import { company } from "@/data/company";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-semibold tracking-wide text-white hover:bg-navy-2",
  secondary:
    "inline-flex items-center justify-center rounded-sm border border-navy bg-white px-5 py-3 text-sm font-semibold tracking-wide text-navy hover:bg-paper",
  ghost:
    "inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-navy underline-offset-4 hover:underline",
};

export function CtaLink({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={company.phoneHref} className={className}>
      {company.phone}
    </a>
  );
}
