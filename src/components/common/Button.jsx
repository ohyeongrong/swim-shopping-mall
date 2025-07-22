import clsx from "clsx";

function Button({  content, variant = "primary", size = "lg", fontSize= "sm", className = "", ...props }) {

    const baseStyle = "flex items-center justify-center";
    
    const variants = {
        primary: " bg-[var(--color-black)] text-[var(--color-white)]",
        secondary: "border border-[var(--color-black)] text-[var(--color-black)]  bg-[var(--color-white)]",
        textBtn: "text-[var(--color-gray-500) underline"
    };

    const sizes = {
        xs: "py-1",
        sm: "py-2",
        md: "py-3",
        lg: "py-3.5",
        xl: "py-4",
    };
    const fontSizes = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
    };

    return (
        <button
        className={ clsx(baseStyle, variants[variant], sizes[size], fontSizes[fontSize], className) }
        {...props}
        >
            { content }
        </button>
    );
}

export default Button;
