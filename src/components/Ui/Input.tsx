import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, ...props }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
            <input type="text" className="w-full px-6 h-16 rounded-md bg-gray-200 border border-gray-300 font-normal text-base placeholder-gray-600 mt-4" placeholder={placeholder} {...props} />
        </div>
    );
};

export default Input;