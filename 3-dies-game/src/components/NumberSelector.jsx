import { useState } from "react";
import styled from "styled-components";

function NumberSelector(
  {selectedNumber , setSelectedNumber , error , setError}
) {

  const removeError = (value) => {
    setSelectedNumber(value);
    setError("");
  }


    const BoxArr = [1,2,3,4,5,6];
    
//  console.log(selectedNumber)
  return (
    <NumberContainer>

        <p className="error-msg">
          {error}
        </p>

        <div>
            {
                BoxArr.map((value , i) => (
                <Box
                isSelected={value === selectedNumber}
                onClick={() => removeError(value)}
                key={i}
                >{value}</Box>))
            }
        </div>

        <p>Select number</p>


      {/* <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul> */}

      {/* <p>Select Number</p> */}
    </NumberContainer>
  )
}

export default NumberSelector


const NumberContainer = styled.div`

  .error-msg{
    color: crimson;
    font-weight: 500;
  }

    display: flex;
    flex-direction: column;
    /* justify-content: end; */
    align-items: end;
    margin-top: 100px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }

    p{

        font-size: 1.5rem;
        font-weight: 600;
    }

`;

const Box = styled.div`

    width: 80px;
    height: 80px;
    border: 5px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    transition: 0.4s ease;
    cursor: pointer;

    background-color: ${(props) => (props.isSelected) ? "black" : "white"};

    color: ${(props) => (!props.isSelected) ? "black" : "white"};

    /* upper line mean is  written bellow */

    /* color: ${(props) => (props.isSelected) ? "white" : "black"}; */
`;

// const NumberContainer = styled.ul`
//     max-width: 500px;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     ul{
//         display: flex;
//         gap: 20px;
//         justify-content: center;
//         align-items: center;
//         list-style: none;
//         font-size: 2rem;
//     }
//     ul li{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: 80px;
//         height: 80px;
//         border: 5px solid black;
//         cursor: pointer;
//         transition: 0.2s ease;

//         &:hover{
//             background-color: black;
//             color: white;
//             border: 5px solid transparent;
//             transition: 0.2s ease;
//         }

//     }
//     p{
//         font-size: 1.5rem;
//         font-weight: 600;
//         position: absolute;
//         right: -90px;
//         margin-top: 200px;
//     }

// `;


