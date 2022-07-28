import styled from "styled-components";

export const Pai=styled.div`
  display:grid;
  grid-template-columns: "1fr 1fr 1fr";
  text-align: center;
  img{
    width: 50px;
    height: 50px;
  }
  h1{
    display:inline;
  }
`;

export const AreaLaranja=styled.aside`
    background-color: orange;
`;

export const Cabecalho=styled.header`
  grid-column-start: 1;
  grid-column-end: 4;
  height: 10vh;
`;

export const AreaMensagem=styled.main`
  height: 90vh;
  display: flex;
  align-items: end;
  box-shadow: 3px 3px 3px 4px darkgray;
background-color: gray;
  label{
    
    margin: 10px;
  }
  button{
    grid-column-end: 2;
    margin-left: 10px;
  }
  #mensagem{
    width: 400px;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
  }
`;

export const Rodape=styled.footer`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: darkgray;
`;
