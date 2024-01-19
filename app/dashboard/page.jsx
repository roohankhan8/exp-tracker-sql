import React from "react";
import Link from "next/link";
import { fetchExpenses } from "../lib/data";
import { Table, ExpensesTable, TextCarousel, Popup } from "../ui";
import AddButton from "@/app/ui/AddButton";

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
      <AddButton />
      <div className="m-2 p-2 flex justify-around items-center">
        <Link href="/dashboard/reports" id="option_buttons">
          Reports
        </Link>
        <Link href="/dashboard/charts" id="option_buttons">
          Charts
        </Link>
      </div>
      <ExpensesTable />
      {/* <Popup /> */}
    </div>
  );
};

export default page;
