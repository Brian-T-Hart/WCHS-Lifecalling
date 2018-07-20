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
				cloud_name: 'dfonttj4w',
				upload_preset: 'bfkrw8gu',
				folder: 'wchs-life-calling'
			},
			function(error, result) {
				if (error) {
					console.log(error);
				}
				console.log(result);
			}
		)
	}

	render() {

		return (
			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						<h3>Others
							{/* Trigger modal with edit icon */}
							<span data-toggle="modal" data-target="#othersModalWrapper"><img id="editIcon" src="./../images/editIcon.png" alt="" /></span>
							</h3>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<li key={this.state.jahari} className="list-group-item d-flex align-items-center" onClick={this.handleClick}>{this.state.jahari}</li>
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