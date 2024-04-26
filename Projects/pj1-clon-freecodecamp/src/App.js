// App.js

import './App.css';
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio={[
            { texto: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. ' },
            { texto: 'freeCodeCamp cambió mi vida.', negrita: true }
          ]}
        />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio={[
            { texto: 'freeCodeCamp fue la puerta de entrada a mi carrera ', negrita: true },
            { texto: 'como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'}
          ]}
        />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio={[
            { texto: 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en ' },
            { texto: 'freeCodeCamp me dio las habilidades ', negrita: true },
            { texto: 'y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' }
          ]}
        /> 
      </div>
    </div>
  );
};

export default App;
