import React, { Component } from 'react';
// import API from "../../utils/API";

class GiftsModal extends Component {
    componentDidMount() {
        console.log('MBTIModal mounted!');
        console.log('myMBTI from MBTIModal componentDidMount ', this.props.myGifts);
    }

    componentDidUpdate() {
        console.log('StrengthsModal updated!');
        console.log('myStrengths from StrengthsModal componentDidUpdate ', this.props.myGifts);
    }

    constructor(props) {
        super(props);
        this.state = {
            gifts: this.props.gifts,
            myGifts: this.props.myGifts
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this);
        // this.myMbti = [];
        // this.myMbti.push(this.refs.mbti1.value);
        // this.myMbti.push(this.refs.mbti2.value);
        // this.myMbti.push(this.refs.mbti3.value);
        // this.myMbti.push(this.refs.mbti4.value);
        // this.props.callbackFromMBTIModal(this.myMbti);
        // API.updateMBTI({
        //     id: localStorage.getItem("lifeCallingId"),
        //     myMbti: this.myMbti
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

        const listOfGifts = this.state.gifts.map((gift) =>
            <option key={gift.id}>{gift.name}</option>
        );

        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select Your Spiritual Gifts</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="gift1">Choose Type</label>
                                <select className="form-control" id="gift1" ref="gift1">
                                    {listOfGifts}
                                </select>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="mbti2">Choose Type</label>
                                <select className="form-control" id="mbti2" ref="mbti2">
                                    <option>Sensing</option>
                                    <option>Intuition</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mbti3">Choose Type</label>
                                <select className="form-control" id="mbti3" ref="mbti3">
                                    <option>Thinking</option>
                                    <option>Feeling</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mbti4">Choose Type</label>
                                <select className="form-control" id="mbti4" ref="mbti4">
                                    <option>Perceiving</option>
                                    <option>Judging</option>
                                </select>
                            </div> */}
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

export default GiftsModal;