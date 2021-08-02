import React from "react";

const EjemploRoutes3 = (props) => {

  const id = props.match.params.id;

  return (
    <div>
      <h1>Params 3: {id} 3 </h1>
      <p>Mira el codigo para ver la diferencia</p>
    </div>
  );
};

export default EjemploRoutes3;
