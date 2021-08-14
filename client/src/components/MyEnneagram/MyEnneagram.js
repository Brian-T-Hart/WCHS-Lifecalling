import React, { Component } from 'react';
import listOfEnneagramTypes from "../Dashboard/listOfEnneagramTypes.js";

class MyEnneagram extends Component {

	constructor(props) {
		super(props);
		this.state = {
			enneagramType: "",
			enneagramDescription: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	enneagramIndex(name) {
		for (let i = 0; i < listOfEnneagramTypes.length; i++) {
			if (listOfEnneagramTypes[i].name === name) {
				this.setState({ enneagramType: listOfEnneagramTypes[i].name });
				this.setState({ enneagramDescription: listOfEnneagramTypes[i].description })
			}
		}
	}

	handleClick(e) {
		e.preventDefault();
		console.log(e.target.dataset.txt);
		var enneagramType = e.target.dataset.txt;
		this.enneagramIndex(enneagramType);
	}

	render() {

		const allEnneagramTypes = listOfEnneagramTypes.map((type) =>
			<div key={type.id}>
				<div className="row">
					<h5 className="allNames">{type.name}</h5>
				</div>

				<div className="row">
					<h6>{type.description}</h6>
				</div>
			</div>
		);


		var growth,stress;

		// const enneagramIndex = listOfEnneagramTypes.indexOf(this.props.myEnneagram[0]);
		listOfEnneagramTypes.forEach(type => {
			if (type.name === this.props.myEnneagram[0]) {
				growth = type.growth;
				stress = type.stress;
			}
		});

		return (
			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						{/* Trigger modal with title span */}
						<span className="clickable" data-toggle="modal" data-target="#enneagramTypesModal">
							<h3>Enneagram</h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#enneagramModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#enneagramModal">
								<li key="enneagram-type" className="list-group-item d-flex align-items-center" data-txt={this.props.myEnneagram[0]} onClick={this.handleClick}><b>Type |</b>&nbsp; {this.props.myEnneagram[0]}</li>
								<li key="enneagram-wing" className="list-group-item d-flex align-items-center" data-txt={this.props.myEnneagram[1]} onClick={this.handleClick}><b>Wing |</b>&nbsp;{this.props.myEnneagram[1]}</li>
								<li key="enneagram-growth" className="list-group-item d-flex align-items-center" data-txt={growth} onClick={this.handleClick}><b>Growth |</b>&nbsp;{growth}</li>
								<li key="enneagram-stress" className="list-group-item d-flex align-items-center" data-txt={stress} onClick={this.handleClick}><b>Stress |</b>&nbsp;{stress}</li>
							</span>
						</ul>
					</div>
				</div>

				{/* Modal for displaying single enneagram type */}
				<div className="modal fade" id="enneagramModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.enneagramType}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.enneagramDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Enneagram types */}
				<div className="modal fade" id="enneagramTypesModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Enneagram Types</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allEnneagramTypes}
							</div>
							
							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

			</div>
		)
	}
}

export default MyEnneagram;