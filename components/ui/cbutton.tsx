import { cn } from "@/lib/utils";

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:shadow-2xl hover:from-purple-600 hover:to-pink-600 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
