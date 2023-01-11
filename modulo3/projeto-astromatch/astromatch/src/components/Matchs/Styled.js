import styled from "styled-components";

export const ContainerPrincipal = styled.div `
    width: 400px;
    height: 970px;
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
export const Astrodiv = styled.div `
    display: flex;
    margin-top: 10px;

    img{
        width: 40px;
        height: 30px;
        background-color:  #836fff;
    };
    button {
     background-color:   #836fff;
     border: none;
     margin-right: 5px;
     &:hover{
        transform: scale(1.15);
    };}
    `




export const Imagem = styled.img `
    width: 50px;
    border-radius: 50%;
    height: 70%;
    margin-right: 3px;
`    


export const Matches = styled.div`
    display: block;

   p{
    margin-left: 1rem;
    font-style: bold;
   }
`

export const Li = styled.li`
    display: flex;
    margin-top: 10px;
    height: 70px;
    cursor: pointer;
    margin-left: -180px;
    &:hover{
        transform: scale(1.15);
    }
`