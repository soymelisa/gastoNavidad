import React from 'react';
import {Component} from 'react'; 
import PropTypes from 'prop-types';

class FormularioGasto extends Component {
    // refs para los campos del formulario 
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) => {
        // Prevenir el preventDefault();
        e.preventDefault();
        
        // crear objeto con los datos //#endregion
        const gasto = {
            nombreGastoRef : this.nombreGastoRef.current.value,
            cantidadGastoRef : this.cantidadGastoRef.current.value
        } 
        // agregarlo y enviarlo por props 
        this.props.agregarGasto(gasto); 
        // resetear el formulario (opcional)
        e.currentTarget.reset(); 
    }

    render() {


        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aquí :))</h2>
                <div className="campo">
                    <label>Nombre de gasto</label>
                    <input 
                    ref={this.nombreGastoRef}
                    className="u-full-width" 
                    type="text" 
                    placeholder="Ej. Regalos de Navidad">
                    </input>
                </div>
                <div className="campo">
                    <label>Cantidad</label>
                    <input 
                    ref={this.cantidadGastoRef}
                    className="u-full-width" 
                    type="text"
                    placeholder="Ej.:300" />
                </div>
                <input 
                className="button-primary u-full-width" 
                type="submit" 
                value="Agregar" />
            </form>
            
        )
    }
}

FormularioGasto.PropTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default FormularioGasto;