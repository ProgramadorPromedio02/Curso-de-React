import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Button from './components/Button.jsx';
import Screen from './components/Screen.jsx';
import ButtonClear from './components/ButtonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value =>
  {
    setInput(input + value);
  };

  const calculateResult = () =>
  {
    if(input) 
    {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.');
    };
  };

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
        <div className='contenedor-calculadora'>
          <Screen input={input}/>
          <div className='fila'>
            <Button manejarClic={addInput}>1</Button>
            <Button manejarClic={addInput}>2</Button>
            <Button manejarClic={addInput}>3</Button>
            <Button manejarClic={addInput}>+</Button>
          </div>
          <div className='fila'>
            <Button manejarClic={addInput}>4</Button>
            <Button manejarClic={addInput}>5</Button>
            <Button manejarClic={addInput}>6</Button>
            <Button manejarClic={addInput}>-</Button>
          </div>
          <div className='fila'>
            <Button manejarClic={addInput}>7</Button>
            <Button manejarClic={addInput}>8</Button>
            <Button manejarClic={addInput}>9</Button>
            <Button manejarClic={addInput}>*</Button>
          </div>
          <div className='fila'>
            <Button manejarClic={calculateResult}>=</Button>
            <Button manejarClic={addInput}>0</Button>
            <Button manejarClic={addInput}>.</Button>
            <Button manejarClic={addInput}>/</Button>
          </div>
          <div className='fila'>
            <ButtonClear manejarClear={() => setInput('')}>
              Clear
            </ButtonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
