// CustomInput.tsx
import { ChangeEvent, FC } from 'react';

interface InputProps {
    value: string | number;
    placeholder?: string;
    type?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, placeholder, type = 'text', onChange }) => {
    return (
        <input
            className=" focus:border-blue-500 w-full px-6 h-16 rounded-md bg-gray-200 border border-gray-300 font-normal text-base placeholder-gray-500 mt-4"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
