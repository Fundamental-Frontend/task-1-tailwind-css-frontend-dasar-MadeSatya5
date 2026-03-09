type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  label,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition w-fit  cursor-pointer";
  const styles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-background text-primary hover:bg-gray-300",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {label}
    </button>
  );
}
