import React, { Component } from 'react';
import API from "../../utils/API";

class IntelligencesModal extends Component {

	constructor(props) {
		super(props);
		this.intelligence1 = React.createRef();
		this.intelligence2 = React.createRef();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myIntelligences = [this.props.myIntelligences[0], this.props.myIntelligences[1]];
		this.myIntelligences[0]=this.intelligence1.current.value;
		this.myIntelligences[1]=this.intelligence2.current.value;
		this.props.callbackFromIntelligencesModal(this.myIntelligences);
		API.updateIntelligences(
			{
				id: localStorage.getItem("lifeCallingId"),
				myIntelligences: this.myIntelligences
			}
		)
		.then(
			res => {
				console.log(res);
			}
		)
		.catch(
			err => {
				alert('A problem occurred. Please try again.');
			}
		)
	}

	render() {
		const listOfIntelligences = this.props.intelligences.map((intelligence) =>
			<option key={intelligence.id}>{intelligence.name}</option>
		);

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Intelligences</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="intelligence1">Choose Type</label>

								<select className="form-control" id="intelligence1" ref={this.intelligence1}>
									<option selected disabled hidden>{this.props.myIntelligences[0]}</option>
									{listOfIntelligences}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="intelligence2">Choose Type</label>

								<select className="form-control" id="intelligence2" ref={this.intelligence2}>
									<option selected disabled hidden>{this.props.myIntelligences[1]}</option>
									{listOfIntelligences}
								</select>
							</div>
						</div>

						<div className="modal-footer">
							<button type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.handleClick}>Submit</button>
							
							<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default IntelligencesModal;