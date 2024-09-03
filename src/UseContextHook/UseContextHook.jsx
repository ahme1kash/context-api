import React, { useState, createContext } from "react";
import "./UseContextHook.css";
import FirstChild from "../ChildComponents/FirstChild/FirstChild";

//Create Context, Provider, Consumer

// Global -- Out of the Component
export const prop_data = createContext();

const UseContextHook = () => {
  const [data, setData] = useState(1);
  const [salary, setSalary] = useState();
  const getSalary = (data) => {
    console.log("Salary", data);
    setSalary(data);
  };
  return (
    <prop_data.Provider value={{ hookData: data, getSalary: getSalary }}>
      <div className="contexthook">
        <h1>Context Api with React JS Context hook.</h1>

        <div className="btn">
          <button
            onClick={() => {
              setData(data + 1);
            }}
          >
            Update Data
          </button>
        </div>
      </div>

      <div>
        <h2>Salary from Super Child:{salary}</h2>
      </div>
      <FirstChild />
    </prop_data.Provider>
  );
};

export default UseContextHook;
