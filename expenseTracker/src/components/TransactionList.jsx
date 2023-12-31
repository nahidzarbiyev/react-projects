import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransAction from "./TransAction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransAction transaction={transaction}/>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
