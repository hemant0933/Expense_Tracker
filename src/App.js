import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider className="app">
    <div className="main">
      <br/>
    <div className="container">
     <Header />
     </div>
      <div className="container">
        <Balance />
      </div>
      <div className="container">
        <IncomeExpense />
      </div>
      <div className="container">
        <TransactionList />
      </div>
      <div className="container">
        <AddTransaction />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
