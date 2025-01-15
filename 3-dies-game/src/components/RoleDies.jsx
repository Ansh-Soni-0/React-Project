import styled from 'styled-components'

function RoleDies(

    {currentDice , roleDice}

) {
    
  return (
   
    <RoleDiesContainer>
        
        <div 
        onClick={roleDice}
        className='dice'>
            <img src={`/images/dice_${currentDice}.png`} alt="dice-image" />
        </div>

        <p>Click on Dice to roll</p>

    </RoleDiesContainer>
    
  )
}

export default RoleDies


const RoleDiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;

    p{
        font-size: 24px;
        font-weight: 600;
    }

`;