import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

  state = {
    id: "pruebaParams"
  }

  render() {
    return (
      <div>
        <nav>
          <ul style={{display: 'flex', justifyContent: "space-around"}}>
            <Link to="/">Home</Link>
            <Link to={`/EjemploRoutes1/${this.state.id}`} >EjemploRoutes1</Link>
            <Link to={`/EjemploRoutes2/${this.state.id}`} >EjemploRoutes2</Link>
            <Link to={`/EjemploRoutes3/${this.state.id}`} >EjemploRoutes3</Link>
            <Link to={`/EjemploRoutes4/${this.state.id}`} >EjemploRoutes4</Link>
            <Link to={`/EjemploRoutes5/${this.state.id}`} >EjemploRoutes5</Link>
            <Link to="/Ejemplo1">EjemploRedux1</Link>
            <Link to="/Ejemplo2">EjemploRedux2</Link>
            <Link to="/Ejemplo3">EjemploRedux3</Link>
            <Link to="/Ejemplo4">EjemploRedux4</Link>
            <Link to="/Ejemplo5">EjemploRedux5</Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu;
