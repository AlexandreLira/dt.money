import { Summary } from "../../components/Summary/Summary";
import { TransactionTable } from "../../components/TransactionTable/TransactionTable";
import { Container } from "./dashboardStyle";


export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    )
}