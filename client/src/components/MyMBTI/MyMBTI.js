import React, { Component } from 'react';

class MyMBTI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mbti: this.props.mbti,
            myMbti: this.props.myMbti
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     console.log("Strengths title was clicked.");
    //     this.setState({strengths: ['achiever']});
    // }

    render() {

        const listOfMyMbti = this.props.myMbti.map((mbti) =>
            <li key={this.props.myMbti.indexOf(mbti) + 1} className="list-group-item d-flex align-items-center"><span className="badge badge-default badge-pill">{this.props.myMbti.indexOf(mbti) + 1}</span>{mbti}</li>
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
                            {listOfMyMbti}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyMBTI;