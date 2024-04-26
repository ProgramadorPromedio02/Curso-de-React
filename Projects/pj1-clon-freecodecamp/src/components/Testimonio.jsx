// Testimonio.jsx

import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio(props) {
  const { nombre, pais, cargo, empresa, testimonio } = props;

  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className='cargo-testimonio'>{cargo} en <strong>{empresa}</strong></p>
        <p className='texto-testimonio'>
          "{testimonio.map((parte, index) => (
            <span key={index} style={{ fontWeight: parte.negrita ? 'bold' : 'normal' }}>
              {parte.texto}
            </span>
          ))}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
