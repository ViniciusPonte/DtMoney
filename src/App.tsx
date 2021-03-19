import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { TransactionModal } from "./components/TransactionModal";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleToggleTransactionModal(){
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <TransactionsProvider>
      <Header onToggleTransactionModal={handleToggleTransactionModal}/>
      <Dashboard />
      <TransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleToggleTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}
