import { useState } from "react";
import './App.css'
function SUB_ADD() {
  let [curr,add_sub]=useState(0);
  function add(){
    if(curr<=19)
    add_sub(curr+1);
  }
  function sub(){
    if(curr>=1)
    add_sub(curr-1);
  }
  return (
    <div className="main">
    <div className="head">
    <h1>Current Value : {curr}</h1>
    <button onClick={add}>ADD</button>
    <button onClick={sub}>SUB</button>
    </div>
    </div>
  );
}

export default SUB_ADD;
