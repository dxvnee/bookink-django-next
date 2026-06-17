import { ReactNode } from "react";

interface CardProps{
    className?: string;
    children: ReactNode;
}

export default function Card({ className, children } : CardProps ){
    return (
        <div className={` bg-gray-100 rounded-md p-8 flex flex-col items-center justify-center ${className}`}>
            {children}
        </div>

    )
}