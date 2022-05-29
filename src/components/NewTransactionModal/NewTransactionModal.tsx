import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { close, income, outcome } from '../../@share/images/shareImages';
import { TransactionType, useTransactions } from '../../hooks/useTransactions';
import { Container,RadioBox,TransactionTypeContainer } from './NewTransactionModalStyles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { isOpen, onRequestClose } = props

  const { createTransaction } = useTransactions()

  const [ title, setTitle ] = useState('')
  const [ value, setValue ] = useState(0)
  const [ category, setCategory ] = useState('')
  const [ type, setType ] = useState<TransactionType>('deposit')

  const [ isLoadingNewTransaction, setIsLoadingNewTransaction] = useState<boolean>(true)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    setIsLoadingNewTransaction(true)

    const data = {
      title,
      amount: value,
      type,
      category
    }

    await createTransaction(data)
    
    setCategory('')
    setTitle('')
    setType('deposit')
    setValue(0)
    
    setIsLoadingNewTransaction(false)
    onRequestClose()
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
          value={category}
          onChange={({target}) => setCategory(target.value)}
        />
        <button 
          type="submit"
          disabled={isLoadingNewTransaction}
        >
          {!isLoadingNewTransaction ? 'Cadastrar' : 'cadastrando...'}
        </button>
      </Container>
    </Modal>
  );
}