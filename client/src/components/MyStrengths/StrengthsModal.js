import React, { Component } from 'react';
import API from "../../utils/API";

class StrengthsModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			myStrengths: [],
		}
	}

	handleChange = () => {
		let changedStrengths = []; 
		let strength1 = document.getElementById('strength1').value;
		let strength2 = document.getElementById('strength2').value;
		let strength3 = document.getElementById('strength3').value;
		changedStrengths.push(strength1, strength2, strength3);

		this.setState({
			myStrengths: changedStrengths
		})
	}

	handleClick = (e) => {
		e.preventDefault();
		let myStrengths = this.state.myStrengths;
		this.props.callbackFromStrengthsModal(myStrengths);
		API.updateStrengths(
			{
				id: localStorage.getItem("lifeCallingId"),
				strengths: myStrengths
			}
		)
			.then(
				res => {
					console.log(res);
				}
			)
			.catch(
				err => {
					console.log(err);
					alert('A problem occurred. Please try again.');
				}
			)
	}

	render() {
		const myStrengths = this.props.myStrengths;

		const strengths1 = this.props.strengths.map((strength) =>
			(myStrengths[0] !== strength.name) ?
			<option key={strength.id}>{strength.name}</option> :
			<option selected key={strength.id}>{strength.name}</option>
		);

		const strengths2 = this.props.strengths.map((strength) =>
			(myStrengths[1] !== strength.name) ?
			<option key={strength.id}>{strength.name}</option> :
			<option selected key={strength.id}>{strength.name}</option>
		);

		const strengths3 = this.props.strengths.map((strength) =>
			(myStrengths[2] !== strength.name) ?
			<option key={strength.id}>{strength.name}</option> :
			<option selected key={strength.id}>{strength.name}</option>
		);

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Strengths</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="strength1">Highest Strength</label>

								<select className="form-control" id="strength1" onChange={this.handleChange}>
									<option value="">--Select--</option>
									{strengths1}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength2">Second Highest Strength</label>

								<select className="form-control" id="strength2" onChange={this.handleChange}>
									<option value="">--Select--</option>
									{strengths2}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength3">Third Highest Strength</label>

								<select className="form-control" id="strength3" onChange={this.handleChange}>
									<option value="">--Select--</option>
									{strengths3}
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

export default StrengthsModal;