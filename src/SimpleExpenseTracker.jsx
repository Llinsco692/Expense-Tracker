import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";
import Filter from "./Filter";

const SimpleExpenseTracker = () => {
  // Initial expense data
  const initialExpenses = [
    { id: 1, title: "Groceries", amount: 2500.50, date: "2025-04-10", category: "food" },
    { id: 2, title: "Electricity Bill", amount: 1500.75, date: "2025-04-12", category: "utilities" },
    { id: 3, title: "Rent", amount: 30000.00, date: "2025-04-01", category: "housing" },
    { id: 4, title: "Uber ride", amount: 800.00, date: "2025-04-05", category: "transportation" },
  ];

  const [expenses, setExpenses] = useState(initialExpenses); // Set initial data i
  const [filter, setFilter] = useState("all");
  const [idCounter, setIdCounter] = useState(initialExpenses.length + 1); // Start ID counter from the next available ID

  const categories = [
    "food",
    "transportation",
    "housing",
    "utilities",
    "entertainment",
    "other",
  ];

  // Add a new expense
  const addExpense = ({ title, amount, date, category }) => {
    const newExpense = {
      id: idCounter, // Incrementing counter for the unique ID
      title,
      amount: parseFloat(amount),
      date,
      category,
    };
    setExpenses((prev) => [newExpense, ...prev]); // Add the new expense at the beginning
    setIdCounter(idCounter + 1); // Increment the counter for the next expense
  };

  // Handle delete of an expense
  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id)); // Remove the expense by ID
  };

  // Filter the expenses by category
  const filteredExpenses =
    filter === "all"
      ? expenses
      : expenses.filter((exp) => exp.category === filter);

  // Calculate the total expense
  const totalExpense = filteredExpenses.reduce(
    (total, exp) => total + exp.amount,
    0
  );

  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>

      {/* Display total expense */}
      <TotalExpense total={totalExpense} />
      
      {/* Category Filter */}
      <Filter categories={categories} filter={filter} setFilter={setFilter} />
      
      {/* Expense List */}
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />

      {/* Expense Form */}
      <ExpenseForm addExpense={addExpense} categories={categories} />
    </div>
  );
};

export default SimpleExpenseTracker;
