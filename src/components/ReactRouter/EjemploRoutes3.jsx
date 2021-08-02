import React from "react";

const EjemploRoutes3 = (props) => {

  const id = props.match.params.id;

  return (
    <div>
      <h1>Params 3: {id} 3 </h1>
      <a href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/ReactRouter/EjemploRoutes3.jsx" target="_blank" rel="noreferrer">Ver codigo</a>
    </div>
  );
};

export default EjemploRoutes3;
