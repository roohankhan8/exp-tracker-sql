import React from "react";
import { Table, Overview } from "../ui";
import { fetchExpenses } from "../lib/data";

const Dashboard = async () => {
  const expenses = await fetchExpenses("roohan@nextmail.com");
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

export default Dashboard;
