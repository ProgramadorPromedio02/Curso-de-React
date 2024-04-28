import React from 'react';
import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Button from './components/Button';
import Count from './components/Count';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numClics: 0,
    };
    //El objeto this de la función vinculada está asociado con el objeto especificado y tiene los parámetros iniciales especificados.
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({ numClics }) => ({numClics: numClics + 1}));
  }

  reiniciarContador(){
    this.setState({numClics: 0});
  }

  render()
  {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo' 
            src={freeCodeCampLogo} 
            alt='Logo de freeCodeCamp' />
        </div>
        <div className='contenedor-principal'>
          <Count numClics={this.state.numClics} />
          <Button 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Button 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
} 

export default App;
