import React, { Component } from 'react';
import API from "../../utils/API";

class MBTIModal extends Component {
    componentDidMount() {
        console.log('MBTIModal mounted!');
        console.log('myMBTI from MBTIModal componentDidMount ', this.props.myMbti);
    }

    componentDidUpdate() {
        console.log('StrengthsModal updated!');
        console.log('myStrengths from StrengthsModal componentDidUpdate ', this.props.myMbti);
    }

    constructor(props) {
        super(props);
        this.state = {
            mbti: this.props.mbti,
            myMbti: this.props.myMbti
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this);
        // this.myMBTI = [];
        // this.myMBTI.push(this.refs.myMBTI1.value);
        // this.myMBTI.push(this.refs.myMBTI1.value);
        // this.myMBTI.push(this.refs.myMBTI1.value);
        // this.myMBTI.push(this.refs.myMBTI1.value);
        // this.props.callbackFromMBTIModal(this.myMBTI);
        // API.updateMBTI({
        //     id: localStorage.getItem("lifeCallingId"),
        //     strengths: this.myMBTI
        // })
        //     .then(res => {
        //         console.log(res);
        //     }
        //     )
        //     .catch(err => {
        //         alert('something went wrong');
        //         console.log(err);
        //     });
    }

    render() {

        const types = this.state.mbti.map((type) =>
            <option key={type.id}>{type.name}</option>
        );

        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select Your Types</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div class="form-group">
                                <label for="strength1">Highest Strength</label>
                                <select class="form-control" id="strength1" ref="strength1">
                                    {types}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="strength2">Second Highest Strength</label>
                                <select class="form-control" id="strength2" ref="strength2">
                                    {types}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="strength3">Third Highest Strength</label>
                                <select class="form-control" id="strength3" ref="strength3">
                                    {types}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="strength4">Fourth Highest Strength</label>
                                <select class="form-control" id="strength4" ref="strength4">
                                    {types}
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.handleClick}>Submit</button>
                            <button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MBTIModal;