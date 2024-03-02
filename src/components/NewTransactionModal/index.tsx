import Modal from "react-modal";
import fecharImg from "@/assets/Fechar.svg";
import Image from "next/image";
import Input from "@/components/Ui/Input";
import Button from "@/components/Ui/Button";
import { useTransactions } from "@/hooks/useTransaction";
import { useState } from "react";
import Container from "@/components/Ui/Container";


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
            className="react-modal-content">

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
                    <Input placeholder="Descricao" />
                    <Input placeholder="Preco" />
                    <div className="flex gap-2 items-center justify-between w-full">
                        <Button />
                        <Button />
                    </div>
                    <Button className="mt-8" />
                </form>
            </Container>
        </Modal>
    )
};
export default NewTransactionModal;
