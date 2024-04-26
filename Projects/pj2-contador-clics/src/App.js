import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo} 
          alt='Logo de freeCodeCamp' />
      </div>
    </div>
  );
}

export default App;
