import React from "react"; 

interface ButtonProps {
    style?: string;
    label?: string;
    onClick?: (event: any) => void;
}

export const Button: React.FC<ButtonProps> = ({
    onClick, style, label
}: ButtonProps) => {
    return (
        <button className={` text-white px-4 rounded-lg ${style}`} onClick={onClick}>
            {label}
        </button>
    )
}