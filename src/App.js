import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import EjemploRoutes from './components/ReactRouter/EjemploRoutes';
import Ejemplo from './components/Redux/Ejemplo';

const App = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Menu />
      <Route exact path="/" component={Home} />
      <EjemploRoutes />
      <Ejemplo />
    </div>
  );
}

export default App;
