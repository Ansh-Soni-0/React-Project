import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"


function App() {
  const [isgamePlay , setIsGamePlay] = useState(false);

  const gamePlay = () => {
    setIsGamePlay((prev) => !prev);
  }

  return (
    <>
    {
      isgamePlay ? <GamePlay /> : <StartGame
      
        toggle = {gamePlay}

      />
    }
    </>
  )
}

export default App
