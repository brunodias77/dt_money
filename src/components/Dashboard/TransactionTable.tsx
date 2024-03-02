import Container from "../Ui/Container"
import { useTransactions } from "@/hooks/useTransaction";

const TransactionTable = () => {
    const { transactions } = useTransactions();
    return (
        <div>
            <table className="w-full border-separate  border-spacing-y-2">
                <thead>
                    <tr>
                        <th className="text-text_title font-normal 2 py-4 px-8 font-normal	text-left leading-6">Título</th>
                        <th className="text-text_title font-normal 2 py-4 px-8 font-normal	text-left leading-6">Valor</th>
                        <th className="text-text_title font-normal 2 py-4 px-8 font-normal	text-left leading-6">Categoria</th>
                        <th className="text-text_title font-normal 2 py-4 px-8 font-normal	text-left leading-6">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions && transactions.map((element) => {
                        console.log(element.type);
                        return (
                            <tr key={element.id}>
                                <td className="px-6 py-4 border-0 bg-shape text-text_body rounded-tl-lg rounded-bl-lg">{element.title}</td>
                                <td className={`${element.type === 'deposit' ? 'text-green' : 'text-red'} px-6 py-4 border-0 bg-shape  `}>
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(element.value)}
                                </td>
                                <td className="px-6 py-4 border-0 bg-shape text-text_body ">{element.category}</td>
                                <td className="px-6 py-4 border-0 bg-shape text-text_body rounded-tr-lg rounded-br-lg">
                                    {new Intl.DateTimeFormat("pt-BR").format(
                                        new Date(element.createdAt)
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TransactionTable;
