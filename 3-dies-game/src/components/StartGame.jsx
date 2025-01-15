import styled from "styled-components"
import { Button } from "./styled/styled"


function StartGame({toggle}) {
  return (
    <Container>
        <div>
            <img src="/images/dies.png" alt="dies-image" />
        </div>

        <div className="content">
            <h1>
                Dice Game
            </h1>
            <Button
                onClick={toggle}
            >
                Play Now
            </Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    height: 100vh;
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    gap: 50px;
    /* position: absolute; */

    /* .content h1{
        font-size: 100px;
    } */

        /* or  */

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
        
    }


`



// const Button = styled.button`
//     color: white;
//     background-color: black;
//     padding: 10px 18px;
//     border-radius: 5px;
//     min-width: 220px;
//     font-size: 15px;
//     font-weight:600;
//     border: none;
//     cursor: pointer;
//     transition: all 0.5s ease;

//     /* display: flex; */
    


//     /* use hover property in styled sheet */
//     &:hover{
//         font-size: 20px;
//         background-color: #fff;
//         color: black;
//         border: 1px solid black;
//         transition: 0.3s ease;
//     }
// `;

//in styled component the name of all component start with uppercase letter