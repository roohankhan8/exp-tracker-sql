import React from "react";

const Overview = (expenses) => {
  let expTotal = 0;
  let incTotal = 0;
  for (let i in expenses) {
    if (expenses[i].category == "expense") {
      expTotal += parseInt(expenses[i].amount);
    } else if (expenses[i].category == "income") {
      incTotal += parseInt(expenses[i].amount);
    }
  }
  let total = incTotal - expTotal;
  console.log(expenses,total);
  return (
    <div id="boxes" className=" p-2 my-4 shadow-md shadow-black rounded-lg m-2">
      <h1 className="text-center text-xl p-2 font-bold">Overview</h1>
      <table className="w-full text-center">
        <thead>
          <tr className="border-2">
            <th>Income</th>
            <th>Expenses</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{incTotal}</td>
            <td>{expTotal}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
