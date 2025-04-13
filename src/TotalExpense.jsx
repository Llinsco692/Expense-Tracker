import React from "react";

const TotalExpense = ({ total }) => (
  <div className="expense-tracker-overview">
    <div className="expense-tracker-total">
      <h2>Total Expenses</h2>
      <p className="expense-amount">Ksh{total.toFixed(2)}</p>
    </div>
  </div>
);

export default TotalExpense;
