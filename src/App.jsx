import Squarebox from "./components/Squarebox"
import { useState } from "react";

function App() {
  const[Xfirst,setXfirst] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));


  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
   const nextSquares = squares.slice();
   if(Xfirst){
   nextSquares[i]="x";
   } else{
    nextSquares[i]="0";
   }
   setSquares(nextSquares);
   setXfirst(!Xfirst);
  }
   const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (Xfirst ? 'X' : 'O');
  }



  return (
    <>
<div className="status">{status}</div>
    <div className="container">
    <Squarebox         value={squares[0]} onSquareClick={() => handleClick(0)}/>
    <Squarebox     value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Squarebox    value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>


      <div className="container">
    <Squarebox   value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Squarebox   value={squares[4]} onSquareClick={() => handleClick(4)}/>
    <Squarebox   value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="container">
    <Squarebox   value={squares[6]} onSquareClick={() => handleClick(6)} /> 
    <Squarebox   value={squares[7]} onSquareClick={() => handleClick(7)}/>
    <Squarebox   value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

    
    

     </>
  )
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
  ];
  for(let i = 0; i < lines.length; i++)
{
  const[a,b,c] = lines[i];

  if (squares[a]&&
    squares[a]===squares[b]&&
    squares[a]===squares[c])
  {
    return squares[a];
  }
  
  }
  return null;
}

export default App;

