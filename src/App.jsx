import React from 'react';

import './App.css';
import Card from './components/layout/Card';
import Primeiro from './components/basico/Primeiro';
import ComPropriedade from './components/basico/ComPropriedade';
import Fragmentos from './components/basico/Fragmentos';
import Aleatorio from './components/basico/Aleatorio';


const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#04 - Aleatório">
          <Aleatorio
            min={1}
            max={60}
          />
        </Card>
        <Card titulo="#03 - Fragmentos">
          <Fragmentos />
        </Card>
        <Card titulo="#02 - Com Propriedades">
          <ComPropriedade
            titulo="Situação do Aluno"
            aluno="Pedro França"
            nota={6.5}
          />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
          <Primeiro />
        </Card>  
      </div>
    </div>
  );
}

export default App;