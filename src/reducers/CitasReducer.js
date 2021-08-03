import {types} from '../type/types'
const initialState = {
    citas: []
}

export default function CitasReducer(state = initialState, action) {
switch (action.types) {
    case types.agregar:
        return {
            ...state,
            citas: [...state.citas, action.payload]
        }
    case types.borrar:
        return {
            ...state
        }

    default:
        return state;
}
  
}
