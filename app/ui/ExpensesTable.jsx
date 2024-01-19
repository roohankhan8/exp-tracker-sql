import React from "react";
import { Table, Overview } from ".";
import { fetchExpenses } from "../lib/data";

const ExpensesTable = async () => {
  const expenses = await fetchExpenses("user@nextmail.com");
  //   console.log(expenses)
  return (
    <div>
      {expenses ? (
        <>
          <Overview expenses={expenses} />
          <Table title="Expense" expenses={expenses} />
          <Table title="Income" expenses={expenses} />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ExpensesTable;
