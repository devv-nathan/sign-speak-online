
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
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5": variant === "primary",
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 hover:-translate-y-0.5": variant === "secondary",
          "border border-blue-500 text-blue-500 hover:bg-blue-50 hover:-translate-y-0.5": variant === "outline",
          "h-10 px-4 py-2 text-sm": size === "default",
          "h-9 px-3 text-xs": size === "sm",
          "h-12 px-8 text-base": size === "lg",
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
