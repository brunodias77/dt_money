// CustomInput.tsx
import { ChangeEvent, FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    type?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeHolder?: string;
}

const Input: FC<InputProps> = ({ value, placeHolder, type = 'text', onChange }) => {
    return (
        <input
            placeholder={placeHolder}
            className=" focus:border-blue-500 w-full px-6 h-16 rounded-md bg-gray-200 border border-gray-300 font-normal text-base placeholder-gray-500 mt-4"
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
