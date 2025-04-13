import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="expense-list-container">
      <h2>Expense History</h2>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <div className="expense-info">
                <div className="expense-title">{expense.title}</div>
                <div className="expense-details">
                  <span className="expense-category">{expense.category}</span>
                  <span className="expense-date">{expense.date}</span>
                </div>
              </div>
              <div className="expense-amount-container">
                <span className="expense-amount">Ksh{expense.amount.toFixed(2)}</span>
                <button className="delete-btn" onClick={() => onDelete(expense.id)}>
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
