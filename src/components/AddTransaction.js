import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);

    const [text,setText] = useState("");
    const [amount,setAmount] = useState(0);

    const onSubmit = (e) =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount:+amount
      }
      addTransaction(newTransaction);
    }


  return (
    <div  className="trans">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label><br/>
          <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (Negative - Expense, Positive - Income)
          </label><br/>
          <input type="number" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..."/>
        </div>
        <button className="transaction" type="submit">Add Transaction</button>
      </form>
      
    </div>
  );
};

export default AddTransaction;
