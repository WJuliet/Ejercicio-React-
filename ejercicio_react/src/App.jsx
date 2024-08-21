
import './App.css'
import { Selects } from './components/selects'

const App= () =>{
  return (
    <>
    
    <h1>SELECCIONE LA UBICACIÓN</h1>
    <p>"Usa los menús desplegables para elegir un departamento, ciudad y municipio, y ver la información filtrada."</p>
    <hr />
    {/* //SelectAnidados*/}
    <Selects/>
    </>
  );
};

export default App;
