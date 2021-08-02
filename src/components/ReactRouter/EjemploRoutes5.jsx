import React from "react";
import { useParams } from 'react-router-dom';

const EjemploRoutes5 = () => {

  // con Hooks y desfragmentación y sin props
  const { id } = useParams();

  return (
    <div>
      <h1>Params 5: {id} 5 </h1>
      <a href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/ReactRouter/EjemploRoutes5.jsx" target="_blank" rel="noreferrer">Ver codigo</a>
    </div>
  );
};

export default EjemploRoutes5;
