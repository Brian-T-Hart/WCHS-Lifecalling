import React, { Component } from 'react';

class MyIntelligences extends Component {

    componentDidMount() {
        console.log('MyLoveLanguages from Dashboard ', this.props.myIntelligences);
    }

    componentDidUpdate() {
        console.log('MyLoveLanguages updated!');
        console.log('MyLoveLanguages componentDidMount ', this.props.myIntelligences);
    }

    constructor(props) {
        super(props);
        this.state = {
            intelligences: this.props.intelligences,
            myIntelligences: this.props.myIntelligences
        }
    }

    render() {

        const listOfMyIntelligences = this.props.myIntelligences.map((intelligence) =>
            <li key={this.props.myIntelligences.indexOf(intelligence) + 1} className="list-group-item d-flex align-items-center"><span className="badge badge-default badge-pill">{this.props.myIntelligences.indexOf(intelligence) + 1}</span>{intelligence}</li>
        );

        return (

            <div className="infoContainer col-md-12">
                {/* title row */}
                <div className="infoTitle row">
                    <div className="col-md-12">
                        <h3>Intelligences
                            {/* Trigger modal with edit icon */}
                            <span data-toggle="modal" data-target="#intelligencesModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span></h3>
                    </div>
                </div>

                {/* display container */}
                <div className="infoInfoBox row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                            {listOfMyIntelligences}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyIntelligences;