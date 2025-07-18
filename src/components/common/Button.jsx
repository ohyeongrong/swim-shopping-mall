import clsx from "clsx";

function Button({  content, variant = "primary", size = "lg", className = "", ...props }) {

    const baseStyle = "flex items-center justify-center text-sm";
    
    const variants = {
        primary: " bg-[var(--color-black)] text-[var(--color-white)]",
        secondary: "border border-[var(--color-black)] text-[var(--color-black)]",
    };

    const sizes = {
        xs: "py-1",
        sm: "py-2",
        md: "py-3",
        lg: "py-3.5",
        xl: "py-4",
    };

    return (
        <button
        className={ clsx(baseStyle, variants[variant], sizes[size], className) }
        {...props}
        >
            { content }
        </button>
    );
}

export default Button;
