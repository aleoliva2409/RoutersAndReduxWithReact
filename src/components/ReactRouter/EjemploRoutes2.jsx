import React, { Component }from 'react'

class EjemploRoutes2 extends Component {

  state = {
    id: this.props.match.params.id,
  }

  render() {
    return (
      <div>
        <h1>Params 2: {this.state.id} 2 </h1>
        <a href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/ReactRouter/EjemploRoutes2.jsx" target="_blank" rel="noreferrer">Ver codigo</a>
      </div>
    )
  }
}

export default EjemploRoutes2;
