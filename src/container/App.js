import React from 'react'
import AgregarCita from '../components/AgregarCita'
import ListarCitas from '../components/ListarCitas'
import Store from '../store/Store'
import { Provider } from 'react-redux'

const App = () => {
    return (
      <Provider store={Store}>
        <div className = "contenedor text-center">
              <header> <h1> EPS Sura </h1> </header>
              <div className = "fila mt-3">
                <div className = "col-md-6">
                  < AgregarCita />
                </div>
                <div className = "col-md-6">
                  <ListarCitas />
                </div>
              </div>
        </div>
    </Provider>
    )
}

export default App;
