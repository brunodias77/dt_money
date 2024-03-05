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
            className="w-full px-6 h-16 rounded-md bg-gray-200 border border-gray-300 font-normal text-base placeholder-gray-500 mt-4"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;


// import React, { ChangeEvent, InputHTMLAttributes } from 'react';

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//     label?: string;
//     placeholder?: string;
//     value: string | number;
//     setValue: React.Dispatch<React.SetStateAction<string | number>>;
// }
// const Input: React.FC<InputProps> = ({ label, placeholder, value, setValue, ...props }) => {
//     console.log("Dentro do input ============> ", value);
//     return (
//         <div className="mb-4">
//             {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
//             <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} className="w-full px-6 h-16 rounded-md bg-gray-200 border border-gray-300 font-normal text-base placeholder-gray-600 mt-4" placeholder={placeholder} {...props} />
//         </div>
//     );
// };

// export default Input;