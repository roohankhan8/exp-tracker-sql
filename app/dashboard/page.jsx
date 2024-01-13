import React from "react";
import Link from "next/link";
import { fetchExpenses } from "../lib/data";
import { Table, Dashboard, TextCarousel } from "../ui";

const page = () => {
  // const exp = fetchExpenses('roohan@nextmail.com')
  return (
    <div>
      <div className="m-2">
        <div className=" bg-slate-900 w-full text-lg rounded-lg">
          {/* <TextCarousel
            setSelectedYear={setSelectedYear}
            setSelectedMonth={setSelectedMonth}
            className=""
          /> */}
        </div>
      </div>
      <div className="m-2">
        <Link href="/dashboard/add" className="">
          <button className="w-full bg-sky-700 text-lg p-2 rounded-lg shadow-md hover:shadow-black">
            <span>Add Expense </span>+
          </button>
        </Link>
      </div>
      <div className="m-2 p-2 flex justify-around items-center">
        <Link href="/dashboard/reports" id="option_buttons">
          Reports
        </Link>
        <Link href="/dashboard/charts" id="option_buttons">
          Charts
        </Link>
      </div>
      <Dashboard />
    </div>
  );
};

export default page;
