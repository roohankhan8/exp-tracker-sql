"use client";
import { ShowType } from ".";
import { useFormState } from "react-dom";
import { addExpense } from "../lib/actions";
import Link from "next/link";
import { useState } from "react";
const Popup = ({
  title,
  isPopupOpen,
  setIsPopupOpen,
  // editExp, switchType, updateNoteHandler, seteditExp
}) => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addExpense, initialState);
  const [switchType, setswitchType] = useState("expense");
  // console.log(switchType);
  if (!isPopupOpen) return null;
  return (
    <form
      action={dispatch}
      // onSubmit={setIsPopupOpen(false)}
    >
      <div className="popup-overlay">
        <div className="popup">
          <p className="text-center text-xl">{title} Expense</p>
          <div className="flex flex-col m-2 rounded-lg overflow-hidden ">
            <select
              value={switchType}
              name="category"
              id="category"
              className=" p-2 w-full"
              // defaultValue={"expense"}
              onChange={(e) => setswitchType(e.target.value)}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <div
              id="radioTypes"
              className="flex items-center justify-around p-2 w-full"
            >
              {title === "Add" ? (
                <>
                  <ShowType
                    title="Add"
                    category={switchType}
                    // editExp={editExp}
                    // seteditExp={seteditExp}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
            <input
              className=" p-2 text-white"
              type="number"
              // value={editExp.amount}
              // onChange={(e) => seteditExp && seteditExp({ ...editExp, amount: e.target.value })}
            />
            <textarea
              className=" p-2 text-white"
              // defaultValue={editExp.note}
              placeholder="Your Note here..."
              // onChange={(e) =>
              //   seteditExp && seteditExp({ ...editExp, note: e.target.value })
              // }
              name="note"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex justify-between text-white p-2" id="options">
            <button
              className=" bg-red-700"
              onClick={() => {
                setIsPopupOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" bg-blue-700"
              onClick={() => setIsPopupOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Popup;
