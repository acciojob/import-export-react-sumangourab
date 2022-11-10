import React, { Component, useState } from "react";
import '../styles/App.css';
import './Heading';
import Heading from "./Heading";
import './InputQuery';
import InputQuery from "./InputQuery";
import './SubHeading';
import SubHeading from "./SubHeading";
import './SubmitButton'
import SubmitButton from "./SubmitButton";

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}
export default App;


