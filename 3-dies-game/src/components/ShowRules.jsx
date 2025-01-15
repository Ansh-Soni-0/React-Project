import React from 'react'
import styled from 'styled-components'

function ShowRules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  )
}

export default ShowRules


const RulesContainer = styled.div`
    margin: 20px auto;
    border-radius: 10px;
    max-width: 500px;
    background-color: #fbf1f1;
    padding: 20px;
    h2{
        font-size: 24px;
    }

    .text{
        margin-top: 24px;
    }
`;