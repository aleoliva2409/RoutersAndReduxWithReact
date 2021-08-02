import { GET_CHARACTER } from "../actions/characterActions"

//reducers

const initialState = {
  character: {},
  favorites: [],
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload
      }

    default:
      return state
  }
}

export default reducers
