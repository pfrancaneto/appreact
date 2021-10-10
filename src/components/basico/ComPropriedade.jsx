import React from 'react';

export default function ComPropriedade(props) {
  const status = props.Nota >= 7 ? 'Aprovado' : 'Reprovado';

  return (
    <div>
      <h2>{ props.titulo }</h2>
      <p>O Aluno <strong>{ props.aluno },</strong></p>
      <p>recebeu a nota: { props.nota }</p>
      <p>Esse aluno está <strong>{status}</strong></p>
    </div>
  );
}