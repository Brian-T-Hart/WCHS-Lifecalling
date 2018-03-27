import React, { Component } from 'react';
import API from "../../utils/API";

class LoveLanguagesModal extends Component {
    componentDidMount() {
        console.log('LoveLanguagesModal mounted!');
        console.log('myLoveLanguages from LoveLanguagesModal componentDidMount ', this.props.myLoveLanguages);
    }

    componentDidUpdate() {
        console.log('LoveLanguagesModal updated!');
        console.log('myLoveLanguages from LoveLanguagesModal componentDidUpdate ', this.props.myLoveLanguages);
    }

    constructor(props) {
        super(props);
        this.state = {
            loveLanguages: this.props.loveLanguages,
            myLoveLanguages: this.props.myLoveLanguages
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this);
        this.myLoveLanguages = [];
        this.myLoveLanguages.push(this.refs.loveLanguage1.value);
        this.myLoveLanguages.push(this.refs.loveLanguage2.value);
        console.log("this.myLoveLanguages", this.myLoveLanguages);
        this.props.callbackFromLoveLanguagesModal(this.myLoveLanguages);
        API.updateLoveLanguages({
            id: localStorage.getItem("lifeCallingId"),
            myLoveLanguages: this.myLoveLanguages
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

        const listOfLoveLanguages = this.state.loveLanguages.map((loveLanguage) =>
            <option key={loveLanguage.id}>{loveLanguage.name}</option>
        );

        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select Your Love Languages</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="loveLanguage1">Choose Type</label>
                                <select className="form-control" id="loveLanguage1" ref="loveLanguage1">
                                    {listOfLoveLanguages}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="loveLanguage2">Choose Type</label>
                                <select className="form-control" id="loveLanguage2" ref="loveLanguage2">
                                    {listOfLoveLanguages}
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

export default LoveLanguagesModal;