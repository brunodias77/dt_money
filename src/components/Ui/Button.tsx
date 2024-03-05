import { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    icon?: string;
    children?: ReactNode; // Adicione esta linha
    // onClick: () => void;

}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className={`${className} w-full p-4 rounded`}>
            {children}
        </button>

    );
};

export default Button;