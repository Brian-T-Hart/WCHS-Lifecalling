import React, { Component } from 'react';

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
        console.log("this ", this);
        console.log("superStrength ", this.props.strengths);
        this.myStrengths = [];
        for (let i = 1; i < 35; i++) {
            if (this.refs[i].checked) {
            console.log(this.refs[i].name);
            this.myStrengths.push(this.refs[i].name);
            }
        }
        console.log("myStrengths: ", this.myStrengths);
        this.props.callbackFromStrengthsModal(this.myStrengths);
        // this.setState({myStrengths: this.myStrengths});
    }

    render() {

        const strengths = this.state.strengths.map((strength) => 
            <div className="form-group" key={strength.id}>
                <input type="checkbox" name={strength.name} ref={strength.id} className="form-check-input" id={strength.id} />
                <label key={strength.id} className="form-check-label" htmlFor={strength.id}>{strength.name}</label>
            </div>
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
                        
                                {strengths}
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