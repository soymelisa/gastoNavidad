import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'; 
import Formulario from './Formulario'; 
import Listado from './Listado'; 
import ControlPresupuesto from './ControlPresupuesto'; 
import {validarPresupuesto} from '../helper';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('¿Cuál es el presupuesto? >:o'); 
    let resultado = validarPresupuesto(presupuesto); 

    if(resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante : presupuesto
      })

    } else {
      this.obtenerPresupuesto(); 
    }
  }

// Agregar un nuevo gasto al state //#endregion
agregarGasto = gasto => {
  // tomar una copia del state actual
  const gastos = {...this.state.gastos};
  
  // agregar al gasto, el objeto del state
  gastos[`gasto${Date.now() }`] = gasto; 

  // restar al presupuesto
  this.restarPresupuesto(gasto.cantidadGasto);  

  // ponerlo en el state 
  this.setState({
    gastos
  })

}

// Restamos de presupuesto cuando se agrega un gasto a la lista
restarPresupuesto = cantidad => {
  // leer el gasto y convertirla porque viene como string 
  let restar = Number(cantidad); 
  // luego tomamos una copia del state actual //#endregion
  let restante = this.state.restante; 
  // lo restamos
  restante -= restar; 
  
  restante = String(restante);

  // agregamos el nuevo state 
  this.setState({
    restante
  })
   

}



  render() {
    return (
      <div className="App container">
        <Header
          titulo = 'Gasto Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto = {this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={this.state.gastos}
              />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
