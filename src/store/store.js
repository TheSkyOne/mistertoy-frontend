import { toyReducer } from "./toy.reducer.js"
import { createStore, compose } from `redux`


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(toyReducer, composeEnhancers())