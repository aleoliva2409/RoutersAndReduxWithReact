import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCharacter } from "../../redux/actions/characterActions";

const Ejemplo5 = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.characters.character)

  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value)
  }

  const handleSubmit = (e) => {
    dispatch(getCharacter(character))
    e.preventDefault()
  }

  return (
    <div>
      <div>
        <div>
          <h1>Personaje</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={character} />
            <button>Buscar</button>
          </form>
          <div>
            <p>Nombre: {data.name}</p>
            <p>Altura: {data.height}</p>
            <p>Nacimiento: {data.birth_year}</p>
            <p>Genero: {data.gender}</p>
          </div>
          <a
            href="https://github.com/aleoliva2409/RoutersAndReduxWithReact/blob/master/src/components/Redux/Ejemplo5.jsx"
            target="_blank"
            rel="noreferrer"
          >
            Ver codigo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ejemplo5;
