
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

const ButtonLink = ({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonLinkProps) => {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 border border-blue-500/20": variant === "primary",
          "bg-secondary/80 text-white hover:bg-secondary hover:-translate-y-1 border border-white/5": variant === "secondary",
          "border border-blue-500/50 text-blue-400 hover:bg-blue-900/20 hover:-translate-y-1": variant === "outline",
          "h-12 px-6 py-3 text-base": size === "default",
          "h-10 px-4 text-sm": size === "sm",
          "h-14 px-8 text-lg font-semibold": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
