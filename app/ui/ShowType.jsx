"use client";

import { useEffect, useState } from "react";

const ShowType = ({ 
  title, 
  category, 
  editExp, 
  seteditExp 
}) => {
  const [showType, setShowType] = useState("");
  useEffect(() => {
    if (category === "income") {
      setShowType("salary");
    } else {
      setShowType("food");
    }
  }, [category]);
  if (
    category == "expense"
    // title=='Add' editExp.category == '' || editExp.category == 'expense'
  ) {
    return (
      <>
        <input 
        type="text" 
        id="typeofexp" 
        name="typeofexp" 
        defaultValue={showType} 
        // className="hidden" 
        />
        <div>
          <input
            type="radio"
            id="food"
            name="typeOfExp"
            value="food"
            checked={showType == "food"}
            // onChange={(e) => { seteditExp({ ...editExp, typeOfExp: e.target.value }) }}
            onChange={(e) => setShowType(e.target.value)}
          />
          <label htmlFor="food">Food</label>
        </div>
        <div>
          <input
            type="radio"
            id="transportation"
            name="typeOfExp"
            value="transportation"
            checked={showType == "transportation"}
            // onChange={(e) => { seteditExp({ ...editExp, typeOfExp: e.target.value }) }}
            onChange={(e) => setShowType(e.target.value)}
          />
          <label htmlFor="transportation">Transportation</label>
        </div>
        <div>
          <input
            type="radio"
            id="others"
            name="typeOfExp"
            value="others"
            checked={showType == "others"}
            // onChange={(e) => { seteditExp({ ...editExp, typeOfExp: e.target.value }) }}
            onChange={(e) => setShowType(e.target.value)}
          />
          <label htmlFor="others">Others</label>
        </div>
      </>
    );
  } else {
    return (
      <>
        <input 
        type="text" 
        id="typeofexp" 
        name="typeofexp" 
        defaultValue={showType}
        className="hidden"
        />
        <div>
          <input
            type="radio"
            id="salary"
            name="typeOfExp"
            value="salary"
            checked={showType === "salary"}
            // onChange={(e) => {
            //   seteditExp({ ...editExp, typeOfExp: e.target.value });
            onChange={(e) => setShowType(e.target.value)}
            // }}
          />
          <label htmlFor="salary">Salary</label>
        </div>
        <div>
          <input
            type="radio"
            id="bonus"
            name="typeOfExp"
            value="bonus"
            checked={showType === "bonus"}
            // onChange={(e) => {
            //   seteditExp({ ...editExp, typeOfExp: e.target.value });
            onChange={(e) => setShowType(e.target.value)}
            // }}
          />
          <label htmlFor="bonus">Bonus</label>
        </div>
        <div>
          <input
            type="radio"
            id="allowance"
            name="typeOfExp"
            value="allowance"
            checked={showType === "allowance"}
            // onChange={(e) => {
            //   seteditExp({ ...editExp, typeOfExp: e.target.value });
            onChange={(e) => setShowType(e.target.value)}
            // }}
          />
          <label htmlFor="allowance">Allowance</label>
        </div>
      </>
    );
  }
};

export default ShowType;
