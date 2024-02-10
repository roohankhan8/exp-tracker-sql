"use client";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ShowType } from ".";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShowType } from ".";
import { addExpense } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import Link from 'next/link'

const AddExpense = ({}) => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addExpense, initialState);
  const [category, setcategory] = useState('expense')
  // const router = useRouter();
  // const [editExp, seteditExp] = useState({
  //   email: "roohan@nextmail.com",
  //   category: "expense",
  //   typeOfExp: "food",
  //   amount: 0.0,
  //   note: "",
  // });
  // const handleClick = async (editExp) => {
  //   try {
  //       const res = addExpense(editExp)
  //       console.log(res)
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }
  return (
    <form action={dispatch} onSubmit={setPopUp}>
      <input type="email" name="email" value='roohank8@gmail.com' />
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex bg-slate-900 flex-col items-center justify-center p-2"
          id="addExpContainer"
        >
          <h1 className="text-2xl font-bold my-2">Add Expense</h1>
          <select
            name="category"
            id="category"
            className=" p-2 w-full"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="expense" className="rounded-lg p-2">
              Expense
            </option>
            <option value="income" className="rounded-lg p-2">
              Income
            </option>
          </select>
          <div
            id="radioTypes"
            className="flex items-center justify-around p-2 w-full"
          >
            <ShowType category={category} />
          </div>
          <input
            required
            // onChange={(e) => {
            //   seteditExp({ ...editExp, amount: parseFloat(e.target.value) });
            // }}
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount"
            className=" p-2 w-full"
          />
          <textarea
            // onChange={(e) => {
            //   seteditExp({ ...editExp, note: e.target.value });
            // }}
            name="note"
            placeholder="Note"
            id=""
            cols="30"
            rows="3"
            className=" p-2"
          ></textarea>
          <div className="flex justify-between w-full my-2" id="options">
            <Link href="/dashboard">
              <button
                className=" bg-red-700"
                // onClick={() => {
                //   router.push("/dashboard");
                // }}
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className=" bg-blue-700"
              // onClick={handleClick}
            >
              Add
            </button>
          </div>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
