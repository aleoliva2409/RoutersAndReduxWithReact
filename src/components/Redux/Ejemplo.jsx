import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Ejemplo1 from './Ejemplo1';
import Ejemplo2 from './Ejemplo2';
import Ejemplo3 from './Ejemplo3';
import Ejemplo4 from './Ejemplo4';
import Ejemplo5 from './Ejemplo5';

const Ejemplo = () => {
  return (
    <Switch>
        <Route path="/Ejemplo1" component={Ejemplo1} />
        <Route path="/Ejemplo2" component={Ejemplo2} />
        <Route path="/Ejemplo3" component={Ejemplo3} />
        <Route path="/Ejemplo4" component={Ejemplo4} />
        <Route path="/Ejemplo5" component={Ejemplo5} />
      </Switch>
  )
}

export default Ejemplo;
