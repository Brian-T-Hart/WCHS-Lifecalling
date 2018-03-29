import React, { Component } from 'react';
import API from "../../utils/API";

class IntelligencesModal extends Component {
    componentDidMount() {
        console.log('IntelligencesModal mounted!');
        console.log('myIntelligences from IntelligencesModal componentDidMount ', this.props.myIntelligences);
    }

    componentDidUpdate() {
        console.log('LoveLanguagesModal updated!');
        console.log('myLoveLanguages from LoveLanguagesModal componentDidUpdate ', this.props.myIntelligences);
    }

    constructor(props) {
        super(props);
        this.state = {
            intelligences: this.props.intelligences,
            myIntelligences: this.props.myIntelligences
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this);
        this.myIntelligences = [];
        this.myIntelligences.push(this.refs.intelligence1.value);
        this.myIntelligences.push(this.refs.intelligence2.value);
        console.log("this.myIntelligences", this.myIntelligences);
        this.props.callbackFromIntelligencesModal(this.myIntelligences);
        API.updateIntelligences({
            id: localStorage.getItem("lifeCallingId"),
            myIntelligences: this.myIntelligences
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

        const listOfIntelligences = this.state.intelligences.map((intelligence) =>
            <option key={intelligence.id}>{intelligence.name}</option>
        );

        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select Your Intelligences</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="intelligence1">Choose Type</label>
                                <select className="form-control" id="intelligence1" ref="intelligence1">
                                    {listOfIntelligences}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="intelligence2">Choose Type</label>
                                <select className="form-control" id="intelligence2" ref="intelligence2">
                                    {listOfIntelligences}
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

export default IntelligencesModal;