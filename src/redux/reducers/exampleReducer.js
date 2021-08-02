import { GET_EXAMPLES } from "../actions/exampleActions"

//reducers

const initialState = {
  example: {},
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_EXAMPLES:
      return {
        ...state,
        example: action.payload
      }

    default:
      return state
  }
}

export default reducers
