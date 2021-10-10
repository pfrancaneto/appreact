import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Primeiro from './components/basico/Primeiro';
import ComPropriedade from './components/basico/ComPropriedade';


ReactDOM.render(
  <div>
    <Primeiro />
    <ComPropriedade
      titulo="Situação do Aluno"
      aluno="Pedro França"
      nota={6.5}
    />
  </div>,  
  document.getElementById('root')
);
