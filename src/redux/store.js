import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import charactersReducer from './reducers/charactersReducer'
import exampleReducer from './reducers/exampleReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  characters: charactersReducer,
  examples: exampleReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store
