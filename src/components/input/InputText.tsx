import React from "react";

interface InputTextProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
  placeholder?: string;
  id?: string;
  value?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  onChange,
  style,
  placeholder,
  id,
  value,
}: InputTextProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      id={id}
      className={`border px-3 py-3 rounded-lg text-gray-900 ${style}`}
    />
  );
};
