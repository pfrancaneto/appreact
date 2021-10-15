import React from 'react';

const Aleatorio = (props) => {
  const { min, max } = props;
  const escolhido = parseInt(Math.random() * (max - min)) + min; 
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo: </strong>{min}</p>
      <p><strong>Valor Máximo: </strong>{max}</p>
      <p><strong>Valor Escolhido: </strong>{escolhido}</p>
    </div>
  )  
}

export default Aleatorio; 