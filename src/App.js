import React from 'react';
import logo from './logo.svg';
import './App.css';

// Create and Update the Square
function Square(props){
  return(
    <button className="singleBox" onClick={props.onClick}>{props.value}
    </button>
  )
}


// Create the tic-tac-toe game Board
 class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
   // Handles the click event and update the values
   handleClick(i){
    let squares = this.state.squares.slice();
    if(winnerDeclaration(squares) || squares[i]){
      return
    }
    squares[i] = this.state.xIsNext? 'X': 'O';
    this.setState({
      squares: squares,
      xIsNext:!this.state.xIsNext
    });
   }
   // Getting the square box
    getSquare(i){
      return(
        <Square  value={this.state.squares[i]} onClick = {()=> this.handleClick(i) }/>
      )
    }

    // Rendering the board component
    render(){
      let winner = winnerDeclaration(this.state.squares);
      let status;
      if(winner){
        status = 'Winner is '+ winner;
      }else {
        status = 'Next Player '+(this.state.xIsNext? 'X': 'O');
      }
      return(
        <div>
        <div className='status'>{ status }</div>
        <div className='row1'>
          {this.getSquare(0)}
          {this.getSquare(1)}
          {this.getSquare(2)}
        </div>
        <div className='row2'>
          {this.getSquare(3)}
          {this.getSquare(4)}
          {this.getSquare(5)}
        </div>
        <div className='row3'>
          {this.getSquare(6)}
          {this.getSquare(7)}
          {this.getSquare(8)}
        </div>
        </div>
      )
    }  
 }

 class Game extends React.Component {
   render(){
     return(
       <div className='game'>
         <div className='gameBoard'>
          <Board />
         </div>
         <div className='gameInfo'>
          <div> </div>
          <ol> </ol>
         </div>
      </div>
     )
   }
 }

export default Game;


// This Help Function to find the winner
function winnerDeclaration(squares){
  const lines =[
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
  ];
  for(let i=0; i<lines.length; i++){
   const[a, b, c] = lines[i];
   if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
     return squares[a];
   }
  }
  return null;
}