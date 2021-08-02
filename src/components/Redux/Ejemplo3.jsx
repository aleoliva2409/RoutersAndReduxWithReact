import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getCharacter } from '../../redux/actions/characterActions'

function Ejemplo3(props) {

  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value)
  }

  const handleSubmit = (e) => {
    props.getChar(character)
    e.preventDefault();
  }

  return (
    <div>
      <div >
        <h1>Personaje</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={character}/>
          <button>Buscar</button>
        </form>
        <div>
          <p>Nombre: {props.data?.name}</p>
          <p>Altura: {props.data?.height}</p>
          <p>Nacimiento: {props.data?.birth_year}</p>
          <p>Genero: {props.data?.gender}</p>
        </div>
        <a href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/Redux/Ejemplo3.jsx" target="_blank" rel="noreferrer">Ver codigo</a>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    data: state.characters.character,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getChar: id => dispatch(getCharacter(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ejemplo3)
