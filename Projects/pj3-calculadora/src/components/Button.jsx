import '../stylesheets/Button.css';

function Button(props) 
{
  const esOperador = valor =>
  {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  // if(esOperador(props.children))
  // {
  //   return (
  //     <div
  //       className='boton-contenedor operador'
  //       onClick={() => props.manejarClic(props.children)}>
  //         {props.children}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div
  //       className='boton-contenedor'
  //       onClick={() => props.manejarClic(props.children)}>
  //         {props.children}
  //     </div>
  //   );
  // };

  return (
    <button 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)} >
        {props.children}
    </button>
  );
}

export default Button;
