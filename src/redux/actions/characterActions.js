import axios from 'axios'

// constants
export const GET_CHARACTER = 'GET_CHARACTER'

//actions

export const getCharacter = (id) => async(dispath) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    dispath({
      type: GET_CHARACTER,
      payload: res.data
    })
  } catch (error) {
    console.log(error);
  }
}
