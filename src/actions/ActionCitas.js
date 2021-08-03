import {types} from '../type/types'


export const AgregarCitas = (cita)=>{
    return{
        type: types.agregarCita,
        payload : {
            cita
        }
    }
}

export const BorrarCita= (id)=> {
    return {
        type: types.borrarCita,
        payload:{
            id
        }
    }
}