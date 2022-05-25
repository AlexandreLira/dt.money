import Modal from 'react-modal';
import { close } from '../../@share/images/shareImages';
import { Container } from './NewTransactionModalStyles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { isOpen, onRequestClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título"/>
        <input type="number" placeholder="Valor"/>
        <input type="text" placeholder="Categoria"/>
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}