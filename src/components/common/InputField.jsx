
function InputField({
    id,
    label,
    type = "text",
    value,
    onChange,
    onBlur,
    placeholder,
    required = false,
    disabled = false,
    errorMessage,
    pattern,
    minLength,
    maxLength,
}) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']"
            >
                {label}
            </label>
            <input
                className="px-4 py-3 border border-[var(--color-gray-400)] bg-[var(--color-white)] text-[var(--color-gray-600)] focus:outline-none"
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}
            />
            {errorMessage && (
                <p className="text-xs text-[var(--color-red)]">{errorMessage}</p>
            )}
        </div>
    );
}

export default InputField;
