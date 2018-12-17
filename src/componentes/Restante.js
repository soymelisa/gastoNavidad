import React, {Component} from 'react'; 

class Restante extends Component {
    render() {
        return(
            <div className="alert alert-success">
            <h6>Restante: $</h6>{this.props.restante}
            </div>
        )
    }

}
export default Restante;