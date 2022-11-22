import React, { Component } from 'react';
import listOfCommonValues from '../Dashboard/listOfCommonValues.js';

class MyCommonValues extends Component {

	constructor(props) {
		super(props);
		this.state = {
			commonValueName: "",
			commonValueDescription: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	commonValueIndex(name) {
		for (let i = 0; i < listOfCommonValues.length; i++) {
			if (listOfCommonValues[i].name.toLowerCase() === name.toLowerCase()) {
				this.setState({ commonValueName: listOfCommonValues[i].name });
				this.setState({ commonValueDescription: listOfCommonValues[i].description })
			}
		}
	}

	handleClick(e) {
		e.preventDefault();
		var commonValueName = e.target.dataset.txt;
		console.log(commonValueName);
		this.commonValueIndex(commonValueName);
	}

	render() {

		const listOfMyCommonValues = this.props.myCommonValues.map((commonValue) =>
			<li
                key={this.props.myCommonValues.indexOf(commonValue) + 1}
                className="list-group-item d-flex align-items-center"
                data-txt={commonValue}
                onClick={this.handleClick}
			>
				{commonValue}
            </li>
		);

		const allCommonValues = listOfCommonValues.map((commonValue) =>
			<div key={commonValue.id}>
				<div className="row">
					<h5 className="allNames">{commonValue.name}</h5>
				</div>

				<div className="row">
					<h6>{commonValue.description}</h6>
				</div>
			</div>
		);

		return (

			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
						<span className="clickable" data-toggle="modal" data-target="#allCommonValuesModal">
							<h3>Common Values</h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#commonValuesModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#commonValueModal">
								{listOfMyCommonValues}
							</span>
						</ul>
					</div>
				</div>

				{/* Modal for displaying individual common value Info */}
				<div className="modal fade" id="commonValueModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.commonValueName}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.commonValueDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Common Values Info */}
				<div className="modal fade" id="allCommonValuesModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Common Values</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allCommonValues}
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

export default MyCommonValues;