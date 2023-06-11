import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="trans">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <br />
          <div class="input-wrapper">
            <input
              type="text"
              id="text"
              className="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (Negative - Expense, Positive - Income)
          </label>
          <br />
          <div class="input-wrapper">
            <input
              type="number"
              id="amount"
              className="input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </div>

        <button class="button"  type="submit">
        Add Transaction
         </button>
      </form>
    </div>
  );
};

export default AddTransaction;
