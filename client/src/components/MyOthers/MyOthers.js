import React, { Component } from 'react';

class MyOthers extends Component {

	componentDidMount() {
		console.log('MyOthers Mounted');
	}

	componentDidUpdate() {
		console.log('MyOthers updated');
	}

	constructor(props) {
		super(props);
		this.state = {
			jahari: "Jahari Window",
			learningStyles: "Learning Styles",
			myPDF: "PDF Document"
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'demo',
				upload_preset: 'a5vxnzbp'
			},
			function(error, result) {
				console.log(error, result)
			}
		)
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
						<button id="upload_widget_opener" onClick={this.handleClick}>Upload multiple images</button>
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