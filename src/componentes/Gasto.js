import React, {Component} from 'react';

class Gasto extends Component {
    render() {
        const {cantidadGastoRef, nombreGastoRef} = this.props.gasto; 
        return(
            <li className="gastos">
                <p>
                    {nombreGastoRef}
                    <span className="gasto">
                        $ {cantidadGastoRef}
                    </span>
                </p>
            </li>
        )
    }
}

export default Gasto; 