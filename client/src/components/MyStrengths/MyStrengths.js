import React, { Component } from 'react';

class MyStrengths extends Component {
    
    componentDidMount() {
        console.log('MyStrengths mounted!');
        console.log('myStrengths from Dashboard ', this.props.myStrengths);
    }

    componentDidUpdate() {
        console.log('MyStrengths updated!');
        console.log('myStrengths componentDidMount ', this.props.myStrengths);
    }
    
    constructor(props) {
        super(props);
        this.state = {
            strengths: this.props.strengths,
            myStrengths: this.props.myStrengths
    }
        // this.handleClick = this.handleClick.bind(this);
}

    // handleClick() {
    //     console.log("Strengths title was clicked.");
    //     this.setState({strengths: ['achiever']});
    // }

    render() {

        const listOfMyStrengths = this.props.myStrengths.map((strength) =>
            <li key={this.props.myStrengths.indexOf(strength)+1} className="list-group-item d-flex align-items-center"><span className="badge badge-default badge-pill">{this.props.myStrengths.indexOf(strength) + 1}</span>{strength}</li>
        );

        return (

            <div className="infoContainer col-md-12">
                {/* title row */}
                <div className="infoTitle row">
                    <div className="col-md-12">
                        <h3>Strengths
                            {/* Trigger modal with edit icon */}
                            <span data-toggle="modal" data-target="#strengthsModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span></h3>
                    </div>
                </div>

                {/* display container */}
                <div className="infoInfoBox row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                            {listOfMyStrengths}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyStrengths;