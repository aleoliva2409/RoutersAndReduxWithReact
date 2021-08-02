import React from 'react';

const EjemploRoutes4 = (props) => {

  // Desfragmentación
  const { id } = props.match.params;

  return (
    <div>
        <h1>Params 4: {id} 4 </h1>
        <p>Mira el codigo para ver la diferencia</p>
    </div>
  )
}

export default EjemploRoutes4;
