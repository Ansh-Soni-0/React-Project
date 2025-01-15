import styled from "styled-components";

export const Button = styled.button`
    color: white;
    background-color: black;
    padding: 10px 18px;
    border-radius: 5px;
    min-width: 220px;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;

    /* display: flex; */
    


    /* use hover property in styled sheet */
    &:hover{
        font-size: 20px;
        background-color: #fff;
        color: black;
        border: 1px solid black;
        transition: 0.3s ease;
    }
`;

