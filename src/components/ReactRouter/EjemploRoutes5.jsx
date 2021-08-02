import React from "react";
import { useParams } from 'react-router-dom';

const EjemploRoutes5 = () => {

  // con Hooks y desfragmentación y sin props
  const { id } = useParams();

  return (
    <div>
      <h1>Params 5: {id} 5 </h1>
      <p>Mira el codigo para ver la diferencia</p>
    </div>
  );
};

export default EjemploRoutes5;
