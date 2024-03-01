"use client";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { useState } from "react";


const App = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen,] = useState(false);
    const openModal = () => {
        setIsNewTransactionModalOpen(true);
    }
    return (
        <>
            <Header openModal={openModal} />
            <Dashboard />
        </>


    )
}
export default App;