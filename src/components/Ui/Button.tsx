
interface ButtonProps {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
    return (
        <button className={`${className} w-full p-2 bg-yellow-400`}>Click me</button>

    );
};

export default Button;