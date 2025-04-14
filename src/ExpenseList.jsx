import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="expense-list-container">
      <h2>Expense History</h2>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount (Ksh)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>{expense.amount.toFixed(2)}</td>
                <td>
                <button
            className="delete-btn"
            onClick={() => {
            const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
         if (confirmDelete) {
        onDelete(expense.id);
          }
      }}
     >
         ✖️
      </button>

           </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
