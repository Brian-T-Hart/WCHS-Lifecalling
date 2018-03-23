import React, { Component } from 'react';
import API from "../../utils/API";

class StrengthsModal extends Component {
    componentDidMount() {
        console.log('StrengthsModal mounted!');
        console.log('myStrengths from StrengthsModal componentDidMount ', this.props.myStrengths);
    }

    componentDidUpdate() {
        console.log('StrengthsModal updated!');
        console.log('myStrengths from StrengthsModal componentDidUpdate ', this.props.myStrengths);
    }

    constructor(props) {
        super(props);
        this.state = {
            strengths: this.props.strengths,
            myStrengths: this.props.myStrengths
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.refs.strength1.value);
        this.myStrengths = [];
        this.myStrengths.push(this.refs.strength1.value);
        this.myStrengths.push(this.refs.strength2.value);
        this.myStrengths.push(this.refs.strength3.value);
        this.myStrengths.push(this.refs.strength4.value);
        this.myStrengths.push(this.refs.strength5.value);
        this.props.callbackFromStrengthsModal(this.myStrengths);
        API.updateStrengths({
            id: localStorage.getItem("lifeCallingId"),
            strengths: this.myStrengths
        })
            .then(res => {
                console.log(res);
                }
            )
            .catch(err => {
                alert('something went wrong');
                console.log(err);
            });
    }

    render() {

        const strengths = this.state.strengths.map((strength) => 
                    <option key={strength.id}>{strength.name}</option>
        );

        return (
            <div>         
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select Your Strengths</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                    <div className="modal-body">
                            <div class="form-group">
                                <label for="strength1">Highest Strength</label>
                                <select class="form-control" id="strength1" ref="strength1">
                                    {strengths}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="strength2">Second Highest Strength</label>
                                <select class="form-control" id="strength2" ref="strength2">
                                    {strengths}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="strength3">Third Highest Strength</label>
                                <select class="form-control" id="strength3" ref="strength3">
                                    {strengths}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="strength4">Fourth Highest Strength</label>
                                <select class="form-control" id="strength4" ref="strength4">
                                    {strengths}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="strength5">Fifth Highest Strength</label>
                                <select class="form-control" id="strength5" ref="strength5">
                                    {strengths}
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

export default StrengthsModal;