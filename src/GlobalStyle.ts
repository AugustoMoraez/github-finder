import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
body{
    font-family: "Inter",sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform:translate(-50%,-40%) ;
};


`;