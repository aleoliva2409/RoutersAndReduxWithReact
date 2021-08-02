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
        <a href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/ReactRouter/EjemploRoutes1.jsx" target="_blank" rel="noreferrer">Ver codigo</a>
      </div>
    )
  }
}

export default EjemploRoutes1;



