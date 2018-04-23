import React, { Component } from 'react';

class MyOthers extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         strengths: this.props.strengths,
    //         myStrengths: this.props.myStrengths
    //     }
    // }


    render() {

        // const listOfMyStrengths = this.props.myStrengths.map((strength) =>
        //     <li key={this.props.myStrengths.indexOf(strength) + 1} className="list-group-item d-flex align-items-center"><span className="badge badge-default badge-pill">{this.props.myStrengths.indexOf(strength) + 1}</span>{strength}</li>
        // );

        return (

            <div className="infoContainer col-md-12">
                {/* title row */}
                <div className="infoTitle row">
                    <div className="col-md-12">
                        <h3>Others
                            {/* Trigger modal with edit icon */}
                            {/* <span data-toggle="modal" data-target="#othersModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span> */}
                            </h3>
                    </div>
                </div>

                {/* display container */}
                <div className="infoInfoBox row">
                    <div className="col-md-12">
                        {/* <ul className="list-group list-group-flush">
                            {listOfMyStrengths}
                        </ul> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyOthers;