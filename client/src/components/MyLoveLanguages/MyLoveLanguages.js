import React, { Component } from 'react';

class MyLoveLanguages extends Component {

    componentDidMount() {
        console.log('MyLoveLanguages from Dashboard ', this.props.MyLoveLanguages);
    }

    componentDidUpdate() {
        console.log('MyLoveLanguages updated!');
        console.log('MyLoveLanguages componentDidMount ', this.props.MyLoveLanguages);
    }

    constructor(props) {
        super(props);
        this.state = {
            loveLanguages: this.props.loveLanguages,
            myLoveLanguages: this.props.myLoveLanguages
        }
    }

    render() {

        const listOfMyLoveLanguages = this.props.myLoveLanguages.map((loveLanguage) =>
            <li key={this.props.myLoveLanguages.indexOf(loveLanguage) + 1} className="list-group-item d-flex align-items-center"><span className="badge badge-default badge-pill">{this.props.myLoveLanguages.indexOf(loveLanguage) + 1}</span>{loveLanguage}</li>
        );

        return (

            <div className="infoContainer col-md-12">
                {/* title row */}
                <div className="infoTitle row">
                    <div className="col-md-12">
                        <h3>Love Language
                            {/* Trigger modal with edit icon */}
                            <span data-toggle="modal" data-target="#loveLanguagesModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span></h3>
                    </div>
                </div>

                {/* display container */}
                <div className="infoInfoBox row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                            {listOfMyLoveLanguages}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyLoveLanguages;