import styled from "styled-components";

export const BoxUser = styled.div`
    max-width: 600px; 
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    padding: 20px; 
    border-radius: 10px; 
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.3);
    margin-top: 1em;

    .profile{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .profile img {
        width: 200px; 
        height: 200px;
        border-radius: 50%; 
        box-shadow: 0px 2px 10px rgba(0,0,0,0.3);
        border: 1px solid #fff;
        margin-right: 20px; 
        float: left; 

    }

    .profile p {
        font-size: 24px; 
        font-weight: bold; 
        text-align: center;
        margin: 10px 0; 
    }
    .info-1 p {
        
        margin: 10px 0px; 
        font-size: 14px; 
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .info-2 .location {
        margin-bottom: 10px; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .location p:first-child {
        font-weight: bold; 
        margin-bottom: 5px; 
    }

    
    .bio p {
        font-size: 16px; 
        text-align: center;
        margin: 0; 
    }
`;