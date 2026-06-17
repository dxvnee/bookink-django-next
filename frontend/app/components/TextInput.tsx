import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default function TextInput({ className, ...props }: TextInputProps) {
    return (
        <input className={`w-64 h-12 p-4 text-black rounded-md border border-orange-300 bg-white placeholder-gray-500 ${className}`} {...props} />
    )
}
