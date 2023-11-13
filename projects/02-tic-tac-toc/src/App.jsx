import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx";
import { TURNS } from "./constant.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";


function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null)//null sera que no hay ganador y false es que hay un empate

  

  /**
   * si la casilla esta nula, cambia el 
   * tablero haciendo una copia
   * de el y lo actualiza y luego cambia
   * el turn para el siguiente actuaizando
   * el siguiente
   */
  const updateBoard = (index) => {

    if(board[index] || winner) return;
    const newboard = [...board];
    newboard[index] = turn;
    setBoard(newboard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newboard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newboard)){
      setWinner(false)
    }
  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic Tac toc</h1>
      <button onClick={resetGame}>Reseteo del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}/* esto es para el indice cuando iteramos */
                index={index}/* prop que utilizaremos en el componente */
                updateBoard={updateBoard}/* aqui le pasamos la funcion no la ejecucion(Noo seria updateBoard()) */
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
        
      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>

  )
}

export default App
