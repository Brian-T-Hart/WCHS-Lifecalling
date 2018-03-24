import React, { Component } from 'react';

class MyGifts extends Component {

    componentDidMount() {
        console.log('myStrengths from Dashboard ', this.props.myGifts);
    }

    componentDidUpdate() {
        console.log('MyStrengths updated!');
        console.log('myStrengths componentDidMount ', this.props.myGifts);
    }

    constructor(props) {
        super(props);
        this.state = {
            gifts: this.props.gifts,
            myGifts: this.props.myGifts
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     console.log("Strengths title was clicked.");
    //     this.setState({strengths: ['achiever']});
    // }

    render() {

        const listOfMyGifts = this.props.myGifts.map((gift) =>
            <li key={this.props.myGifts.indexOf(gift) + 1} className="list-group-item d-flex align-items-center"><span className="badge badge-default badge-pill">{this.props.myGifts.indexOf(gift) + 1}</span>{gift}</li>
        );

        return (

            <div className="infoContainer col-md-12">
                {/* title row */}
                <div className="infoTitle row">
                    <div className="col-md-12">
                        <h3>Spiritual Gifts
                            {/* Trigger modal with edit icon */}
                            <span data-toggle="modal" data-target="#giftsModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span></h3>
                    </div>
                </div>

                {/* display container */}
                <div className="infoInfoBox row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                            {listOfMyGifts}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyGifts;