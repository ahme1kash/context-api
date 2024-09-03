import React, { useContext } from "react";
import "./SecondChild.css";
import { prop_data } from "../../UseContextHook/UseContextHook";
const SecondChild = () => {
  //  Here we can't change the name of object
  // ? The property name will be same in consumer as in provider
  const { hookData, getSalary } = useContext(prop_data);
  const salary = hookData;
  return (
    <>
      <div className="second-child">
        <h1>I am from second child Component.</h1>
      </div>
      <div className="data">
        <h2> Hook Data =&gt;</h2>
        <h1>`${hookData} `</h1>
        <button onClick={() => getSalary(salary)}>Salary</button>
      </div>
    </>
  );
};

export default SecondChild;
