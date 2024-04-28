import React from 'react';
import '../stylesheets/Button.css';

class Button extends React.Component
{
  render()
  {
    return (
      <button 
        className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} 
        onClick={this.props.manejarClic}>
        {this.props.texto}
      </button>
    );
  }
}

export default Button;