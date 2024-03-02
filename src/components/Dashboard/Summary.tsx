import Container from "@/components/Ui/Container";
import Image from "next/image";
import EntradasImg from "@/assets/Entradas.svg";
import SaidaImg from "@/assets/Saídas.svg";
import Cifrao from "@/assets/cifrao1.svg";
const Summary = () => {
    return (
        <div className="grid grid-cols-3 gap-8 mt-[-5rem]">
            <div className="bg-[#FFFFFF] py-5 px-8 rounded	text-text_title">
                <header className="flex items-center justify-between" >
                    <p className="">Entradas</p>
                    <Image src={EntradasImg} alt="arrow-up" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-3xl	font-medium	">
                    R$ 1000,00
                </strong>
            </div>
            <div className="bg-[#FFFFFF] py-5 px-8 rounded	text-text_title	">
                <header className="flex items-center justify-between">
                    <p>Saidas</p>
                    <Image src={SaidaImg} alt="arrow-up" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-3xl	font-medium">
                    R$ 1000,00
                </strong>
            </div>
            <div className="bg-[#33CC95] py-4 px-8 rounded text-white	">
                <header className="flex items-center justify-between">
                    <p>Entradas</p>
                    <Image src={Cifrao} alt="arrow-up" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-3xl	font-bold">
                    R$ 1000,00
                </strong>
            </div>
        </div>

    );
}
export default Summary;
