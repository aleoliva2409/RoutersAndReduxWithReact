import React from 'react'
import Form from './Form';
import { Switch, Route } from 'react-router-dom'

const Formulario = () => {
  return (
    <Switch>
      <Route path="/form" component={Form} />
    </Switch>
  )
}

export default Formulario;
