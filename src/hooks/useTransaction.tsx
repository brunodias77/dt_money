// import React from "react";

// const TransactionsContext = React.createContext([]);

// export const TransactionsProvider = ({ children }: any) => {
//     const [transactions, setTransaction] = React.useState([]);

//     React.useEffect(() => {
//         api
//             .get("transactions")
//             .then((response) => setTransaction(response.data.transactions));
//     }, []);

//     async function createTransaction(trasactionInput) {
//         const response = await api.post("/transactions", {
//             ...trasactionInput,
//             createdAt: new Date(),
//         });
//         const { transaction } = response.data;
//         setTransaction([...transactions, transaction]);
//     }

//     return (
//         <TransactionsContext.Provider value={{ transactions, createTransaction }}>
//             {children}
//         </TransactionsContext.Provider>
//     );
// }

// export const useTransactions = () => {
//     const context = React.useContext(TransactionsContext);

//     return context;
// };
