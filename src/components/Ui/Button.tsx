import { FC, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, className = "", ...props }) => {
    return (
        <button
            {...props}
            className={`${className} w-full h-16 border border-solid border-gray-300 rounded items-center justify-center outline-none transition duration-200`}>
            {children}
        </button>
    );
};

