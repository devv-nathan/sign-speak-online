
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
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200": variant === "secondary",
          "border border-blue-500 text-blue-500 hover:bg-blue-50": variant === "outline",
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
