
interface ContainerProps {
    children: React.ReactNode;
    className?: string; // Permitindo que a classe seja passada como parâmetro opcional
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    )
}
export default Container;