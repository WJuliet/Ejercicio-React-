import { useState } from "react";
import { SelectList } from "./SelectList";
import { useFetch } from "../hooks/useFetch";


export const Selects =()=>{

  const [departamentos, setDepartamentos] =useState ("");
  const [municipios, setMunicipios] = useState ("");
  

  console.log('Departamento, ID', departamentos);
  console.log('Municipios, ID', municipios);
  const urlCiudad=`https://api-colombia.com/api/v1/City/${municipios}`

  const {data}=useFetch(urlCiudad)
  console.log (data);

  
    return (
    <div className="container">
        <h2>Selecciona Opciones</h2>
        <SelectList
          title="Departamentos"
          url="https://api-colombia.com/api/v1/Department"
          manejadorCambio={(event) => {
            setDepartamentos(event.target.value);
          }}
        />

        <SelectList
          title="Municipios"
          url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
          manejadorCambio={(event) => {
            setMunicipios(event.target.value);
          }}
        />
        {/* // Imprimir info del municipio */}

         <h2>Información General</h2>
           <div className="info-container">
             <div className="info-paragraph">
               <p><strong>ID:</strong> {data?.id || "No disponible"}</p>
               <p><strong>Descripción:</strong> {data?.description || "No disponible"}</p>
               <p><strong>Superficie:</strong> {data?.surface || "No disponible"}</p>
               <p><strong>Población:</strong> {data?.population || "No disponible"}</p>
             </div>
           </div>
      </div>
    );
};