import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid-cream" | "solid-wine" | "outline-cream" | "outline-wine";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const VARIANT_CLASSES: Record<Variant, string> = {
  "solid-cream":
    "bg-cream text-textDark hover:bg-white",
  "solid-wine": "bg-wine text-cream hover:bg-textDark",
  "outline-cream":
    "bg-cream/10 text-cream hover:bg-cream hover:text-textDark",
  "outline-wine":
    "bg-wine/10 text-wine hover:bg-wine hover:text-cream",
};

export default function PillButton({
  href,
  children,
  variant = "solid-wine",
  className = "",
  ...rest
}: PillButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("https");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ease-out";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${VARIANT_CLASSES[variant]} ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${VARIANT_CLASSES[variant]} ${className}`}>
      {children}
    </Link>
  );
}
