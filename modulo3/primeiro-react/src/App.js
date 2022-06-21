import './App.css';
import foto from "./img/mauricio.jpeg"

function App() {
     const clique =() =>{
      alert("Boa noite!")
     }


  return (
    <div className="container">
      <h1>Olá! Eu me chamo Mauricio</h1>
      <img className="foto" src={foto}  />
      <p>Esse é o meu primeiro site React</p>
      <button onClick={clique}>Aperte este botão</button>
    </div>
  );
}

export default App;
