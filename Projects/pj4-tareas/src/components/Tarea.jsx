// Tarea.jsx

import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
      >
        <AiOutlineCloseCircle 
          className='tarea-icono'
          onClick={() => eliminarTarea(id)} // Manejar la eliminación de la tarea
        />
      </div>
    </div>
  );
}

export default Tarea;
