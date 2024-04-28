import '../stylesheets/ButtonClear.css';

const ButtonClear = (props) => (
  <button className='button-clear' onClick={props.manejarClear}> 
    {props.children}
  </button>
);

export default ButtonClear;