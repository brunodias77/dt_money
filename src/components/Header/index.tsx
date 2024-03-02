import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Container from "@/components/Ui/Container";

interface HeaderProps {
    openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
    return (
        <header className=" bg-blue_700 text-white">
            <Container className="pt-8 pb-40 flex items-center justify-between">
                <Image src={Logo} alt="Logo" width={150} height={50} />
                <button type="button" onClick={() => openModal()} className="bg-[#6933FF] text-white py-2 px-8 rounded font-bold ransition duration-200 ease-in-out hover:filter hover:brightness-90">
                    Nova Transação
                </button>
            </Container>
        </header>
    )
}

export default Header;