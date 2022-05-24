import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
    const {isOpen, onRequestClose} = props
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}

        >
            <h1>cadastrar transação</h1>
        </Modal>
    );
}