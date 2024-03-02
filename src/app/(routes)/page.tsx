"use client";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { Server } from 'miragejs';
import { useState } from "react";
import { TransactionsProvider } from "@/hooks/useTransaction";
import NewTransactionModal from "@/components/NewTransactionModal";


const App = () => {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen,] = useState(false);
    const openModal = () => {
        setIsNewTransactionModalOpen(true);
    }
    const closeModal = () => {
        setIsNewTransactionModalOpen(false);
    }
    return (
        <TransactionsProvider>
            <Header openModal={openModal} />
            <Dashboard />
            <NewTransactionModal isNewTransactionModalOpen={isNewTransactionModalOpen} handleCloseNewTransactionModal={closeModal} />
        </TransactionsProvider>


    )
}
export default App;