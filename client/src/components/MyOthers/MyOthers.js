import React, { Component } from 'react';

class MyOthers extends Component {

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
							<li key={"learningStyles"} className="list-group-item d-flex align-items-center">
								<a href={this.props.learningStylesUrl} target="_blank">Learning Styles</a>
							</li>

							<li key={"jahari"} className="list-group-item d-flex align-items-center">
								<a href={this.props.jahariUrl} target="_blank">Jahari Window</a>
							</li>

							<li key={"document"} className="list-group-item d-flex align-items-center">
								<a href={this.props.documentUrl} target="_blank">CV</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MyOthers;