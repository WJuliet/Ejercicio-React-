
import { useState } from "react";
import { Selects } from './components/selects'

const App= () =>{
  return (
    <div className="container-app">
     <h1>UBICACIÓN GEOGRAFICA</h1>
     <p>"Usa los menús desplegables para elegir un departamento, ciudad y municipio, y ver la información filtrada."</p>
     <hr />
     <Selects/>
    </div>
  );
};
export default App;
