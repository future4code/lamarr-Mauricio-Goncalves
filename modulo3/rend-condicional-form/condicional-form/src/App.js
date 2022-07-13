import React, {useState} from "react";
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Final } from './components/Final';



function App() {
    const [etapa, setEtapa] =useState(1);
    const incremento = () => {
      setEtapa(etapa +1)
    }

function RederinzarEtapa(){
    switch(etapa){
      case 1:
        return <Etapa1/>
        break;
      case 2:
        return <Etapa2/>
        break;
      case 3:
        return <Etapa3/>
        break;
       case 4:
        return <Final/>
        default:
          return <Etapa1/>
    }
  }
  return (
    <div>
    <RederinzarEtapa/>
     
      <button onClick={incremento}>Próxima etapa</button>. 
    </div>
  );
}

export default App;
