import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    margin-top: 1em;
    padding: 20px ;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.3);
    background-color: #fff;
    border-radius: 5px;
    
    

    h1{
        font-size: 36px;
        color: #333;
        margin-bottom: 10px;
        text-align: center;
    }
  
    div{
        width: 100%;
        height: 50px;
        max-width: 320px;
        display: flex;
        justify-content: center;
        align-items: center;
        *{
            outline: none;
            border: 0;
            cursor: pointer;
        }
        input{
            width: 100%;
            max-width: 300px;
            height: 30px;
            padding: 10px;
            box-shadow: 0px 2px 5px rgba(0,0,0,0.3);
            border-top-left-radius: 5px ;
            border-bottom-left-radius: 5px ;
        }
        button{
            width: 100%;
            max-width: 20px;
            height: 30px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
            border-top-right-radius: 5px ;
            border-bottom-right-radius: 5px ;
            background-color: white;
            
        }
    }
`;