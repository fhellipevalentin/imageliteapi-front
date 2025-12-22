import React from "react"; 

interface ButtonProps {
    style?: string;
    label?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: any) => void;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    onClick, style, label, type, children
}: ButtonProps) => {
    return (
        <button type={type} className={` text-white px-4 rounded-lg ${style}`} onClick={onClick}>
            {children || label}
        </button>
    )
}
