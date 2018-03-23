import React, { Component } from 'react';
import StrengthsModal from "../StrengthsModal/StrengthsModal.js";
import MBTIModal from "../MBTIModal/MBTIModal.js";

class ModalWrapper extends Component {
    
    updateMyStrengths = (updatedStrengths) => {
        console.log('updatedStrengths from MyStrengths', updatedStrengths);
        this.props.strengthsCallbackFromModalWrapper(updatedStrengths);
    }

    updateMyMBTI = (updatedMBTI) => {
        console.log('updatedMBTI from MyMBTI', updatedMBTI);
        this.props.mbtiCallbackFromModalWrapper(updatedMBTI);
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
            myStrengths: this.props.myStrengths,
            mbti: this.props.mbti,
            myMbti: this.props.myMbti
        }
    }
    

    render() {

        return (
            <div>
                <div className="modal fade" id="modalWrapper" role="dialog">
                    <div className="modal-dialog">

                        {/* <StrengthsModal strengths={this.props.strengths} myStrengths={this.props.myStrengths} callbackFromStrengthsModal={this.updateMyStrengths}/> */}

                        <MBTIModal mbti={this.props.mbti} myMbti={this.props.myMbti} callbackFromMBTIModal={this.updateMyMBTI} />

                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWrapper;