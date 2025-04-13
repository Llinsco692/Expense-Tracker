import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";
import Filter from "./Filter";

const SimpleExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [idCounter, setIdCounter] = useState(1); // Start the counter from 1

  const categories = [
    "food",
    "transportation",
    "housing",
    "utilities",
    "entertainment",
    "other",
  ];

  // simple incrementing counter as the unique ID
  const addExpense = ({ title, amount, date, category }) => {
    const newExpense = {
      id: idCounter,  //incrementing counter for the ID
      title,
      amount: parseFloat(amount),
      date,
      category,
    };
    setExpenses((prev) => [newExpense, ...prev]); // Add the new expense at the beginning
    setIdCounter(idCounter + 1); // Increment the counter for the next expense
  };

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id)); // Delete the expense by ID
  };

  const filteredExpenses =
    filter === "all"
      ? expenses
      : expenses.filter((exp) => exp.category === filter); // Filter based on category

  const totalExpense = filteredExpenses.reduce(
    (total, exp) => total + exp.amount,
    0
  );

  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>

      {/* Total Expense */}
      <TotalExpense total={totalExpense} />

      {/* Form to add expense */}
      <ExpenseForm addExpense={addExpense} categories={categories} />

      {/* Category Filter */}
      <Filter categories={categories} filter={filter} setFilter={setFilter} />

      {/* List of Expenses */}
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default SimpleExpenseTracker;
