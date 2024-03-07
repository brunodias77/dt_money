import Image from "next/image";
import EntradasImg from "@/assets/Entradas.svg";
import SaidaImg from "@/assets/Saídas.svg";
import Cifrao from "@/assets/cifrao1.svg";
import { useTransactions } from "@/hooks/useTransaction";

const Summary = () => {
    const { transactions } = useTransactions();

    const summary = transactions.reduce(
        (acc, element) => {
            if (element.type === "deposit") {
                acc.deposits += element.value;
                acc.total += element.value;
            } else {
                acc.withdraws += element.value;
                acc.total -= element.value;
            }
            return acc;
        },
        {
            deposits: 0,
            withdraws: 0,
            total: 0,
        }
    );
    return (
        <div className="grid grid-cols-3 gap-8 mt-[-5rem]">
            <div className="bg-[#FFFFFF] py-5 px-8 rounded	text-text_title">
                <header className="flex items-center justify-between" >
                    <p className="">Entradas</p>
                    <Image src={EntradasImg} alt="arrow-up" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-3xl	font-medium	">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div className="bg-[#FFFFFF] py-5 px-8 rounded	text-text_title	">
                <header className="flex items-center justify-between">
                    <p>Saidas</p>
                    <Image src={SaidaImg} alt="arrow-up" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-3xl	font-medium">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="bg-[#33CC95] py-4 px-8 rounded text-white	">
                <header className="flex items-center justify-between">
                    <p>Total</p>
                    <Image src={Cifrao} alt="arrow-up" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-3xl	font-bold">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.total)}
                </strong>
            </div>
        </div>

    );
}
export default Summary;
