import React, { Component } from 'react';

class MyOthers extends Component {

	componentDidMount() {
		console.log('MyOthers Mounted');
	}

	componentDidUpdate() {
		console.log('MyOthers updated');
		console.log(this.props.jahariUrl);
		console.log(this.props.learningStylesUrl);
		console.log(this.props.documentUrl);
	}

	constructor(props) {
		super(props);
		this.state = {
		}
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
							<li key={"jahari"} className="list-group-item d-flex align-items-center">
								<a href={this.props.jahariUrl} target="_blank">Jahari Window</a>
							</li>

							<li key={"learningStyles"} className="list-group-item d-flex align-items-center">
								<a href={this.props.learningStylesUrl} target="_blank">LearningStyles</a>
							</li>

							<li key={"document"} className="list-group-item d-flex align-items-center">
								<a href={this.props.documentUrl} target="_blank">Document</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MyOthers;