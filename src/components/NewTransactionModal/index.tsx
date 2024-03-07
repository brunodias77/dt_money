import Modal from "react-modal";
import fecharImg from "@/assets/Fechar.svg";
import Image from "next/image";
import Input from "@/components/Ui/Input";
import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";
import EntradasImg from "@/assets/Entradas.svg";
import SaidasImg from "@/assets/Saídas.svg";
import { useTransactions } from "@/hooks/useTransaction";
import { useState } from "react";


const NewTransactionModal = ({ isNewTransactionModalOpen, handleCloseNewTransactionModal, }: any) => {
    const { createTransaction } = useTransactions();
    const [type, setType] = useState("deposit");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [value, setValue] = useState(0);

    async function handleCreateNewTransaction(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await createTransaction({ title, value, category, type });
        setType("deposit");
        setTitle("");
        setValue(0);
        setCategory("");
        handleCloseNewTransactionModal();
    }

    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content bg-background">

            <button
                type="button"
                onClick={handleCloseNewTransactionModal}
                className="react-modal-close"
            >
                <Image src={fecharImg} alt="fechar modal" />
            </button>
            <Container>
                <form onSubmit={handleCreateNewTransaction} className="">
                    <h2 className="text-text_title text-2xl	">Cadastrar transação</h2>
                    <Input placeHolder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <Input placeHolder="VALOR" type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} />
                    <div className="flex gap-2 items-center justify-between w-full mt-4">
                        <Button
                            type="button"
                            onClick={() => {
                                setType('deposit');
                            }}
                            className={` cursor-pointer	 flex items-center justify-center ${type === 'deposit' ? 'bg-green-100' : 'bg-white'}`}                        >
                            <Image src={EntradasImg} alt="Entradas" className="w-7 h-7" />
                            <span className="ml-4 text-base text-gray-700">Entradas</span>
                        </Button>
                        <Button
                            type="button"
                            onClick={() => setType('withdraw')}
                            className={`cursor-pointer flex items-center justify-center ${type === 'withdraw' ? 'bg-red-100' : 'bg-white'}`}
                        >
                            <Image src={SaidasImg} alt="Saídas" className="w-7 h-7" />
                            <span className="ml-4 text-base text-gray-700">Saídas</span>
                        </Button>

                    </div>
                    <Input placeHolder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)}
                    />
                    <Button className="hover:brightness-90 mt-8 bg-green_600 text-white font-bold px-8" type="submit">
                        <span className="text-lg">Cadastrar</span>
                    </Button>
                </form>
            </Container>
        </Modal >
    )
};
export default NewTransactionModal;
