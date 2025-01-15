import styled from "styled-components"


function TotalScore({score}) {
  return (
    <ScoreContainer>
     
        <h1>{score}</h1>
        <p>Total Score</p>
      
    </ScoreContainer>
  )
}

export default TotalScore


const ScoreContainer = styled.div`
    text-align: center;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    
    h1{
        font-size:100px;
        font-weight: bolder;
        height: 50px;
        /* line-height: 100px; */
    }
    p{
        font-size: 24px;
        font-weight: 600;
        height: 200px;
    }
`