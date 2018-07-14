import React, { Component } from 'react';

class MyOthers extends Component {

	ComponentDidMount() {
		console.log('MyOthers Mounted');
	}

	constructor(props) {
		super(props);
		this.state = {
			jahari: "Jahari Window",
			learningStyles: "Learning Styles",
			myPDF: "PDF Document"
		}
	}

	render() {

		// const listOfMyStrengths = this.props.myStrengths.map((strength) =>
		//     <li key={this.props.myStrengths.indexOf(strength) + 1} className="list-group-item d-flex align-items-center"><span className="badge badge-default badge-pill">{this.props.myStrengths.indexOf(strength) + 1}</span>{strength}</li>
		// );

		return (
			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						<a href="#" id="upload_widget_opener">Upload multiple images</a>
						<h3>Others
							{/* Trigger modal with edit icon */}
							{/* <span data-toggle="modal" data-target="#othersModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span> */}
							</h3>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<li key={this.state.jahari} className="list-group-item d-flex align-items-center">{this.state.jahari}</li>
							<li key={this.state.learningStyles} className="list-group-item d-flex align-items-center">{this.state.learningStyles}</li>
							<li key={this.state.myPDF} className="list-group-item d-flex align-items-center">{this.state.myPDF}</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MyOthers;