import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EjemploRoutes1 from './EjemploRoutes1';
import EjemploRoutes2 from './EjemploRoutes2';
import EjemploRoutes3 from './EjemploRoutes3';
import EjemploRoutes4 from './EjemploRoutes4';
import EjemploRoutes5 from './EjemploRoutes5';

const EjemploRoutes = () => {
  return (
    <Switch>
        <Route path="/EjemploRoutes1/:id" component={EjemploRoutes1} />
        <Route path="/EjemploRoutes2/:id" component={EjemploRoutes2} />
        <Route path="/EjemploRoutes3/:id" component={EjemploRoutes3} />
        <Route path="/EjemploRoutes4/:id" component={EjemploRoutes4} />
        <Route path="/EjemploRoutes5/:id" component={EjemploRoutes5} />
      </Switch>
  )
}

export default EjemploRoutes;
