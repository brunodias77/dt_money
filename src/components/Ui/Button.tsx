import { FC, ReactNode } from 'react';
import { darken, transparentize } from 'polished';

interface ButtonProps {
    isActive: boolean;
    activeColor: string;
    onClick: () => void;
    children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ isActive, activeColor, onClick, children }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full h-16 border border-solid border-gray-300 rounded items-center justify-center outline-none transition duration-200 ${isActive ? `bg-${activeColor}` : 'bg-transparent'
                }`}
        >
            {children}
        </button>
    );
};

export default Button;
// import { ButtonHTMLAttributes, ReactNode } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     className?: string;
//     icon?: string;
//     children?: ReactNode; // Adicione esta linha
//     isActive?: boolean;
//     activeColor?: string;
//     // onClick: () => void;

// }

// const Button: React.FC<ButtonProps> = ({ className, children, isActive, activeColor, ...props }) => {
//     return isActive ?
//         (<button className={`${className} w-full p-4 rounded bg-${activeColor}`} {...props}>
//             {children}
//         </button>) :
//         (<button className={`${className} w-full p-4 rounded`}>
//             {children}
//         </button>);
// };

// export default Button;