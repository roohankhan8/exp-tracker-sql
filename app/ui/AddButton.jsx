"use client";
import React from "react";
import Link from "next/link";
import PopUp from "./PopUp";
import { useState } from "react";

const AddButton = ({}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  return (
    <div className="m-2">
      <button
        className="w-full bg-sky-700 text-lg p-2 rounded-lg shadow-md hover:shadow-black"
        onClick={() => {
          setIsPopupOpen(true);
        }}
      >
        <span>Add Expense </span>+
      </button>
      <PopUp
        title={"Add"}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </div>
  );
};

export default AddButton;
