import styled from "styled-components";

export const ContainerPrincipal = styled.div `
    width: 400px;
    height: 670px;
    position: fixed;
    border: 1px solid #0000;
    background-color: #836fff;
    top: 5%;
    left: 35%;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    align-items: center;
    `
export const ContaionerBio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
`
export const ContainerMatch = styled.div`
    display: flex;
    justify-content: space-evenly;
    
`





 export const Butao = styled.button`
  width: 50px;
    border: none;
    background-color: #836fff;
    margin-left: 1rem;
 
 img {
    width: 30px;
 }
 `
export const Imagem = styled.img `
    width: 300px;
    height: 300px;
    padding: 10px;
    `


export const Buttons = styled.button `
    width: 50px;
    border: none;
    background-color: #836fff;
    margin-right: 2rem;

    img{
    max-width: 50px;
    }
`

export const ContainerButtons = styled.div `
    display :flex ;
    justify-content: space-between;
    margin-top: 3rem ;
    margin-left: 2rem;
   
`