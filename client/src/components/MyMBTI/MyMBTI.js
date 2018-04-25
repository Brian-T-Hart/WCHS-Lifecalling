import React, { Component } from 'react';
import listOfMBTI from "../Dashboard/listOfMBTI.js";

class MyMBTI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mbti: this.props.mbti,
            myMbti: this.props.myMbti,
            mbtiName: "",
            mbtiDescription: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    mbtiIndex(name) {
        for (let i = 0; i < listOfMBTI.length; i++) {
            if (listOfMBTI[i].name === name) {
                console.log("index of mbti ", i);
                console.log(listOfMBTI[i].name);
                this.setState({ mbtiName: listOfMBTI[i].name });
                this.setState({ mbtiDescription: listOfMBTI[i].description })
                console.log(listOfMBTI[i].description);
            }
        }
    }

    handleClick(e) {
        e.preventDefault();
        var mbtiName = e.target.dataset.txt;
        console.log(mbtiName);
        this.mbtiIndex(mbtiName);
    }

    render() {

        const listOfMyMbti = this.props.myMbti.map((mbti) =>
            <li key={this.props.myMbti.indexOf(mbti) + 1} className="list-group-item d-flex align-items-center" data-txt={mbti} onClick={this.handleClick}><span className="badge badge-default badge-pill">{this.props.myMbti.indexOf(mbti) + 1}</span>{mbti}</li>
        );

        return (

            <div className="infoContainer col-md-12">
                {/* title row */}
                <div className="infoTitle row">
                    <div className="col-md-12">
                        <h3>Myers-Briggs
                            {/* Trigger modal with edit icon */}
                            <span data-toggle="modal" data-target="#mbtiModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span></h3>
                    </div>
                </div>

                {/* display container */}
                <div className="infoInfoBox row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                            <span data-toggle="modal" data-target="#mbtiModal">
                                {listOfMyMbti}
                            </span>
                        </ul>
                    </div>
                </div>

                {/* Modal for displaying individual Spiritual Gift Info */}
                <div className="modal fade" id="mbtiModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="col-4 text-center modal-title">{this.state.mbtiName}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h5>{this.state.mbtiDescription}</h5>
                            </div>
                            <div className="modal-footer">
                                <button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------end of Modal------------- */}

            </div>
        )
    }
}

export default MyMBTI;