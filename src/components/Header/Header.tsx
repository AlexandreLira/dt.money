import { logo } from "../../@share/images/shareImages";
import { Container, Content } from "./headerStyles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Allmoney" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}