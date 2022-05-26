import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { close, income, outcome } from '../../@share/images/shareImages';
import { api } from '../../services/api';
import { Container,RadioBox,TransactionTypeContainer } from './NewTransactionModalStyles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = 'deposit' | 'withdraw'

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { isOpen, onRequestClose } = props


  const [ title, setTitle ] = useState('')
  const [ value, setValue ] = useState(0)
  const [ categorie, setCategorie ] = useState('')
  const [ type, setType ] = useState<TransactionType>('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      type,
      categorie
    }

    api.post('transactions', data)
  }

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
      <Container
        onSubmit={handleCreateNewTransaction}
      >
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={({target}) => setTitle(target.value)}
        />
        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={({target}) => setValue(Number(target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria"
          value={categorie}
          onChange={({target}) => setCategorie(target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}