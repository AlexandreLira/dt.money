import { Container } from "./summaryStyles";
import { income, outcome, total } from "../../@share/images/shareImages";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas"/>
                </header>
                <strong>R$500,00</strong>
            </div>

            <div>
                <header>
                    <p>Saindas</p>
                    <img src={outcome} alt="Saindas"/>
                </header>
                <strong>R$-100,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>
                <strong>R$400,00</strong>
            </div>
        </Container>
    )
}