import { toyReducer } from './toy.reducer.js'
import { createStore, compose } from 'redux'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(toyReducer, composeEnhancers())

export default store