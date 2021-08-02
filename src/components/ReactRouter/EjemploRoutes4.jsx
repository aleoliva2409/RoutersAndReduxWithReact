import React from 'react';

const EjemploRoutes4 = (props) => {

  // Desfragmentación
  const { id } = props.match.params;

  return (
    <div>
        <h1>Params 4: {id} 4 </h1>
        <a href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/ReactRouter/EjemploRoutes4.jsx" target="_blank" rel="noreferrer">Ver codigo</a>
    </div>
  )
}

export default EjemploRoutes4;
