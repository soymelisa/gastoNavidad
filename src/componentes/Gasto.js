import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    render() {
        const {cantidadGastoRef, nombreGastoRef} = this.props.gasto; 
        return(
            <li className="gastos">
                <p>
                    {nombreGastoRef}
                    <span className="gasto">
                        ${cantidadGastoRef}
                    </span>
                </p>
            </li>
        )
    }
}

Gasto.PropTypes = {
    gasto:PropTypes.object.isRequired
}
export default Gasto; 