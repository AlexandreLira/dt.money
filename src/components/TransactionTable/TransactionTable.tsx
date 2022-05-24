import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./TransactionTableStyles";

export function TransactionTable(){

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])

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
                    <tr>
                        <td>Sanduiche</td>
                        <td className="withdraw">- R$50,00</td>
                        <td>Comida</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Dividedos</td>
                        <td className="deposit">R$50,00</td>
                        <td>Eletronico</td>
                        <td>21/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}