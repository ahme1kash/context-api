import React, { useContext } from "react";
import "./FirstChild.css";
import { prop_data } from "../../UseContextHook/UseContextHook";
import SecondChild from "../SecondChild/SecondChild";

const FirstChild = () => {
  //  Here we can't change the name of object
  // ? The property name will be same in consumer as in provider
  const { hookData } = useContext(prop_data);
  return (
    <>
      <div className="first-child">
        <h1>I am from first Child component.</h1>
      </div>
      <div className="data">
        <h2> Hook Data =&gt;</h2>
        <h1>`${hookData} `</h1>
      </div>
      <SecondChild />
    </>
  );
};

export default FirstChild;
