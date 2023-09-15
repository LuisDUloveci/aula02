import OlaMundo from './componentes/olaMundo';
import Frases from './componentes/frases';
import DigaMeuNome from './componentes/digaMeuNome';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1> Olá Mundo </h1>
      <OlaMundo/>
      <Frases/>
      <DigaMeuNome nome="Luis" profissao="progamador" idade="16 anos" sonho="ter a minha empresa"/>
      
    </div>
  );
}

export default App;
