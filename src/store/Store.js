import { createStore, combineReducers } from 'redux'
import CitasReducer from '../reducers/CitasReducer'


const reducer= combineReducers({
    citas: CitasReducer
})

  const store = createStore(
   reducer, /* preloadedState, */
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 export default store;
