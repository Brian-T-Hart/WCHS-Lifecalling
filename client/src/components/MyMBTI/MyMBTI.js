import React, { Component } from 'react';
import listOfMBTI from "../Dashboard/listOfMBTI.js";
import SliderBar from './SliderBar.js';

class MyMBTI extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mbtiName: "",
			mbtiDescription: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	mbtiIndex(name) {
		for (let i = 0; i < listOfMBTI.length; i++) {
			if (listOfMBTI[i].name === name) {
				this.setState({ mbtiName: listOfMBTI[i].name });
				this.setState({ mbtiDescription: listOfMBTI[i].description })
			}
		}
	}

	handleClick(e) {
		e.preventDefault();
		var mbtiName = e.target.dataset.txt;
		this.mbtiIndex(mbtiName);
	}

	render() {
		let listOfMyMbti = "";
		let listOfSliders = "";
		let barWidth1, barWidth2, barWidth3, barWidth4;

		if (Array.isArray(this.props.myMbti)) {

			barWidth1 = this.props.myMbti[4] ? this.props.myMbti[4] : undefined;
			barWidth2 = this.props.myMbti[5] ? this.props.myMbti[5] : undefined;
			barWidth3 = this.props.myMbti[6] ? this.props.myMbti[6] : undefined;
			barWidth4 = this.props.myMbti[7] ? this.props.myMbti[7] : undefined;
		
			const myMbtiArray = [...this.props.myMbti];
		
			while (myMbtiArray.length > 4) {
				myMbtiArray.pop();
			}

			listOfMyMbti = myMbtiArray.map((mbti) =>
				<li key={this.props.myMbti.indexOf(mbti) + 1} className="list-group-item d-flex" data-txt={mbti} onClick={this.handleClick}>{mbti}</li>
			);

			listOfSliders = (
				<div>
					<SliderBar barWidth={barWidth1} slideBarLabel1="Introvert" slideBarLabel2="Extrovert" />
					<SliderBar barWidth={barWidth2} slideBarLabel1="Sensing" slideBarLabel2="Intuition" />
					<SliderBar barWidth={barWidth3} slideBarLabel1="Thinking" slideBarLabel2="Feeling" />
					<SliderBar barWidth={barWidth4} slideBarLabel1="Perceiving" slideBarLabel2="Judging" />
				</div>
			);


		}

		const allMBTI = listOfMBTI.map((allMBTI) =>
			<div key={allMBTI.id}>
				<div className="row">
					<h5 className="allNames">{allMBTI.name}</h5>
				</div>

				<div className="row">
					<h6>{allMBTI.description}</h6>
				</div>
			</div>
		);

		return (

			<div className="infoContainer col-md-12">
				{/* title row */}
				<div className="infoTitle row">
					<div className="col-md-12">
					{/* Trigger modal with title span */}
						<span className="clickable" data-toggle="modal" data-target="#allMBTIModal">
							<h3>Personality</h3>
						</span>

						{/* Trigger modal with edit icon */}
						<span data-toggle="modal" data-target="#mbtiModalWrapper">
							<img id="editIcon" src="./../images/editIcon.png" alt="" />
						</span>
					</div>
				</div>

				{/* display container */}
				<div className="infoInfoBox row">
					<div className="col-md-12">
						{/* <ul className="list-group list-group-flush">
							<span data-toggle="modal" data-target="#mbtiModal">
								{listOfMyMbti}
							</span>	
						</ul> */}

						{listOfSliders}
					</div>
				</div>

				{/* Modal for displaying individual Spiritual Gift Info */}
				<div className="modal fade" id="mbtiModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{this.state.mbtiName}</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								<h5>{this.state.mbtiDescription}</h5>
							</div>

							<div className="modal-footer">
								<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/* -------------end of Modal------------- */}

				{/* Modal for displaying all Myers-Briggs Info */}
				<div className="modal fade" id="allMBTIModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Personality</h4>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<div className="modal-body">
								{allMBTI}
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

export default MyMBTI;