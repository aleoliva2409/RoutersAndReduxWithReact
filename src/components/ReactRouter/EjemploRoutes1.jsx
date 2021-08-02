import React, { Component }from 'react'

class EjemploRoutes1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id
    }
  }

  render() {
    return (
      <div>
        <h1>Params 1: {this.state.id} 1</h1>
        <p>Mira el codigo para ver la diferencia</p>
      </div>
    )
  }
}

export default EjemploRoutes1;



