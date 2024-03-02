import Summary from "./Summary";
import Container from "@/components/Ui/Container";
import TransactionTable from "./TransactionTable";

const Dashboard = () => {
    return (
        <Container className="">
            <Summary />
            <TransactionTable />
        </Container>
    );
}

export default Dashboard;