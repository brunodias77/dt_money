import Image from "next/image";
import Logo from "@/assets/logo.svg";

interface HeaderProps {
    openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
    return (
        <header className=" bg-blue_700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
                <Image src={Logo} alt="Logo" width={150} height={50} />
                <button type="button" onClick={() => openModal()} className="bg-[#6933FF] py-2 px-3 rounded font-semibold">
                    Nova Transação
                </button>
            </div>
        </header>
    )
}

export default Header;