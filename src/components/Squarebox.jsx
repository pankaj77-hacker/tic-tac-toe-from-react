import React, { useState } from "react";
import "./Squarebox.css";


function Squarebox({value,onSquareClick}){
    return <>
   
        <button className="box" onClick={onSquareClick}> {value} </button>
   
    </>
}

export default Squarebox;