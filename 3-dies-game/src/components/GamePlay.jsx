import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDies from './RoleDies'
import { useState } from 'react'
import { Button } from './styled/styled'
import ShowRules from './ShowRules'


function GamePlay() {
  const [selectedNumber , setSelectedNumber] = useState();

  const [currentDice , setCurrentDice] = useState(1);

  const [score , setScore] = useState(0)

  const [error , setError] = useState("")

  const [rules , setRules] = useState(false);

  function getRandomInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  const resetScore = () => {
    setScore(0);
  }
 

  const roleDice = () => {
    //if number is not selected then simple do not run any process further and return
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    

    const randomNumber = getRandomInteger(1 , 6);

    setCurrentDice((prev) => randomNumber);


    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber();

  }


  return (
    <>
    

    <Main>
     
      <TotalScore
        score={score}
      />
      <NumberSelector 
        setError={setError}
        error={error}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      
    </Main>

      <RoleDies
        currentDice={currentDice}
        roleDice={roleDice}
      />
      <ButtonContainer>
        <Button 
        onClick={resetScore}
        className='firstbtn'>Reset Score</Button>
        <Button
        onClick={() => setRules((prev) => !prev)}
        >{rules ? "Hide" : "show"} Rules</Button>
      </ButtonContainer>

      {rules && <ShowRules />}
   
    </>

  )
}

export default GamePlay


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px; 

  .firstbtn{
    background-color: white;
    color: black;
    font-size: 1.2rem;
    border: 2px solid black;

    &:hover{
      background: #000;
      border: transparent;
      color: white;
      font-size: 1.3rem;
    }
  }
`;


const Main = styled.div`
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 300px;
`;



// selectedNumber={selectedNumber}
//       setSelectedNumber={setSelectedNumber}