import { useContext, useEffect, useState } from "react";
import { Transaction, TransactionsContext } from "../../TransactionContext";
import { formatDate, formatNumberToCurrency } from "../../utils/functions";
import { Container } from "./TransactionTableStyles";

export function TransactionTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' && '- '}
                {formatNumberToCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {formatDate(transaction.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}