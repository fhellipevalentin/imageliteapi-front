import React from "react";

interface InputTextProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: string;
    placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({ onChange, style, placeholder }: InputTextProps) => {

    return (
        <input type='text' 
                    onChange = {onChange}
                    placeholder={placeholder}
                    className={`border px-3 py-3 rounded-lg text-gray-900 ${style}`} />
    )

}