import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import charactersReducer from './reducers/charactersReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  characters: charactersReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store
