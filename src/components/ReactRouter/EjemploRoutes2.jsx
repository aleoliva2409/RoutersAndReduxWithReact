import React, { Component }from 'react'

class EjemploRoutes2 extends Component {

  state = {
    id: this.props.match.params.id,
  }

  render() {
    return (
      <div>
        <h1>Params 2: {this.state.id} 2 </h1>
        <p>Mira el codigo para ver la diferencia</p>
      </div>
    )
  }
}

export default EjemploRoutes2;
