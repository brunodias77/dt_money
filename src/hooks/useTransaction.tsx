import React, { createContext, useState, useEffect, useContext, ReactNode, useCallback } from "react";
import { v4 as uuid } from 'uuid';

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionInput {
    title: string;
    value: number;
    category: string;
    type: string;
}

interface TransactionProps {
    id: number;
    title: string;
    type: 'deposit' | 'withdraw';
    category: string;
    value: number;
    createdAt: string;
}

interface TransactionContextType {
    transactions: TransactionProps[]
    createTransaction: (data: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/transactions');
                const data = await response.json();
                setTransactions(data.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    const createTransaction = useCallback(async (transactionInput: TransactionInput) => {
        try {
            const id = uuid();
            const createdAt = new Date().toISOString();
            const response = await fetch("http://localhost:3000/api/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    ...transactionInput,
                    createdAt,
                }),
            });
            const data = await response.json();
            setTransactions(prevTransactions => [...prevTransactions, data]);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <TransactionsContext.Provider value={{ createTransaction, transactions }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export const useTransactions = () => {
    const context = useContext(TransactionsContext);
    if (!context) {
        throw new Error('useTransactions must be used within a TransactionsProvider');
    }
    return context;
};



// import React, { createContext, useState, useEffect, useContext, PropsWithChildren, ReactNode } from "react";
// import { api } from "@/lib/api";
// import { v4 as uuid } from 'uuid';


// interface TransactionsProviderProps {
//     children: ReactNode;
// }

// interface TransactionInput {
//     title: string;
//     value: number;
//     category: string;
//     type: string;
// }

// interface TransactionProps {
//     id: number;
//     title: string;
//     type: 'deposit' | 'withdraw';
//     category: string;
//     value: number;
//     createdAt: string;
// }

// interface TransactionContextType {
//     transactions: TransactionProps[]
//     createTransaction: (data: TransactionInput) => Promise<void>
// }


// const TransactionsContext = createContext({} as TransactionContextType);

// export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
//     const [transactions, setTransactions] = useState<TransactionProps[]>([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/api/transactions')
//             .then(response => response.json())
//             .then(data => {
//                 setTransactions(data.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching transactions:', error);
//             });
//     }, []);

//     async function createTransaction(transactionInput: TransactionInput) {
//         const id = uuid();
//         const createdAt = new Date().toISOString();
//         const response = await fetch("http://localhost:3000/api/transactions", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 id,
//                 ...transactionInput,
//                 createdAt,
//             }),
//         }).then(response => response.json()).then(data => {
//             setTransactions(prevTransactions => [...prevTransactions, data]);
//         }).catch(error => console.error(error));
//     }

//     return (
//         <TransactionsContext.Provider value={{ createTransaction, transactions }}>
//             {children}
//         </TransactionsContext.Provider>
//     );
// }

// export const useTransactions = () => {
//     const context = useContext(TransactionsContext);
//     return context;
// };












// // import React, { createContext, useState, useEffect, useContext, ReactNode, useMemo } from "react";
// // import { api } from "@/lib/api";

// // interface TransactionsProviderProps {
// //     children: ReactNode;
// // }

// // interface TransactionProps {
// //     id: number;
// //     title: string;
// //     type: 'deposit' | 'withdraw';
// //     category: string;
// //     value: number;
// //     createdAt: string;
// // }

// // interface TransactionsContextData extends Array<TransactionProps> {
// //     loading: boolean;
// //     error: string | null;
// //     addTransaction: (transaction: TransactionProps) => void;
// // }

// // const TransactionsContext = createContext<TransactionsContextData | undefined>(undefined);

// // export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
// //     const [transactions, setTransactions] = useState<TransactionProps[]>([]);
// //     const [loading, setLoading] = useState<boolean>(false);
// //     const [error, setError] = useState<string | null>(null);

// //     useEffect(() => {
// //         setLoading(true);
// //         fetch('/api/transactions')
// //             .then(response => response.json())
// //             .then(data => {
// //                 setTransactions(data.data);
// //             })
// //             .catch(error => {
// //                 setError('Error fetching transactions');
// //                 console.error('Error fetching transactions:', error);
// //             })
// //             .finally(() => {
// //                 setLoading(false);
// //             });
// //     }, []);

// //     const addTransaction = (transaction: TransactionProps) => {
// //         setTransactions(prevTransactions => [...prevTransactions, transaction]);
// //     };

// //     const value = useMemo(() => ({ transactions, loading, error, addTransaction }), [transactions, loading, error]);

// //     return (
// //         <TransactionsContext.Provider value={value}>
// //             {children}
// //         </TransactionsContext.Provider>
// //     );
// // }

// // export const useTransactions = () => {
// //     const context = useContext(TransactionsContext);
// //     if (!context) {
// //         throw new Error('useTransactions must be used within a TransactionsProvider');
// //     }
// //     return context;
// // };