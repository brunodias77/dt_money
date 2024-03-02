"use client";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { Server } from 'miragejs';
import { useState } from "react";
import { TransactionsProvider } from "@/hooks/useTransaction";


const App = () => {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen,] = useState(false);
    const openModal = () => {
        setIsNewTransactionModalOpen(true);
    }
    return (
        <TransactionsProvider>
            <Header openModal={openModal} />
            <Dashboard />
        </TransactionsProvider>


    )
}
export default App;