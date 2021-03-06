import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCharacter } from '../../redux/actions/characterActions'

class Ejemplo1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      character: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange (e) {
    this.setState({
      character: e.target.value
    })
  }

  handleSubmit (e) {
    this.props.getChar(this.state.character)
    e.preventDefault()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Personaje</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.character}/>
          <button>Buscar</button>
        </form>
        <div>
          {
            this.props.data.gender ?
            <>
              <p>Nombre: {this.props.data.name}</p>
              <p>Altura: {this.props.data.height}</p>
              <p>Nacimiento: {this.props.data.birth_year}</p>
              <p>Genero: {this.props.data.gender}</p>
            </>
            :
            <h3>No hay personajes</h3>
          }

        </div>
        <a href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/Redux/Ejemplo1.jsx" target="_blank" rel="noreferrer">Ver codigo</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.characters.character, // {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getChar: id => dispatch(getCharacter(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ejemplo1);
