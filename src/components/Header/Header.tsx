import { useState } from "react";
import Modal from "react-modal";
import { logo } from "../../@share/images/shareImages";
import { Container, Content } from "./headerStyles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logo} alt="Allmoney" />
        <button 
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>

      </Content>
    </Container>
  )
}