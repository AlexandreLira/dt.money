import { formatNumberToCurrency } from "../../utils/functions";
import { useTransactions } from "../../hooks/useTransactions";

import { income, outcome, total } from "../../@share/images/shareImages";

import { Container } from "./summaryStyles";

export function Summary(){
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw -= transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas"/>
                </header>
                <strong>{formatNumberToCurrency(summary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcome} alt="Saidas"/>
                </header>
                <strong>{formatNumberToCurrency(summary.withdraw)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>
                <strong>{formatNumberToCurrency(summary.total)}</strong>
            </div>
        </Container>
    )
}