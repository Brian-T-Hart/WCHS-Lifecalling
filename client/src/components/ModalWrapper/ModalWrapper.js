import React, { Component } from 'react';
import StrengthsModal from "../StrengthsModal/StrengthsModal.js";

class ModalWrapper extends Component {
    
    updateMyStrengths = (updatedStrengths) => {
        console.log('updatedStrengths from MyStrengths', updatedStrengths);
        this.props.callbackFromModalWrapper(updatedStrengths);
    }

    componentDidMount() {
        console.log('ModalWrapper mounted!');
        console.log('strengths from Dashboard ', this.props.strengths);
        console.log('MyStrengths from Dashboard ', this.props.myStrengths);
    }

    componentDidUpdate() {
        console.log('ModalWrapper updated!');
        console.log('MyStrengths from ModalWrapper componentDidUpdate ', this.props.myStrengths);
    }

    constructor(props) {
        super(props);
        this.state = {
            strengths: this.props.strengths,
            myStrengths: this.props.myStrengths
        }
    }
    

    render() {

        return (
            <div>
                <div className="modal fade" id="strengthsModal" role="dialog">
                    <div className="modal-dialog">

                        <StrengthsModal strengths={this.props.strengths} myStrengths={this.props.myStrengths} callbackFromStrengthsModal={this.updateMyStrengths}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWrapper;