import { ReactNode } from "react";

interface ButtonInputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

export default function ButtonInput({ className, children, ...rest }: ButtonInputProps) {
    return (
        <button {...rest} className={`w-64 h-12 bg-orange-500 text-white rounded-md hover:bg-orange-600 cursor-pointer font-bold ${className}`}>
            <p>{children}</p>
        </button>
    )
}

