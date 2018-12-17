import React, {Component} from 'react'; 

class Presupuesto extends Component {
    render() {
        return(
            <div className="alert alert-primary">
            <h6>Presupuesto: $</h6>{this.props.presupuesto}
            </div>
        )
    }

}
export default Presupuesto;