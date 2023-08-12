import React, { Component } from 'react';
import API from "../../utils/API";

class StrengthsModal extends Component {

	constructor(props) {
		super(props);
		this.strength1 = React.createRef();
		this.strength2 = React.createRef();
		this.strength3 = React.createRef();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault();
		this.myStrengths = [...this.props.myStrengths];
		this.myStrengths[0] = this.strength1.current.value;
		this.myStrengths[1] = this.strength2.current.value;
		this.myStrengths[2] = this.strength3.current.value;
		this.props.callbackFromStrengthsModal(this.myStrengths);
		API.updateStrengths(
			{
				id: localStorage.getItem("lifeCallingId"),
				strengths: this.myStrengths
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
		const strengthsList = this.props.strengths.map((strength) =>
			<option key={strength.id} value={strength.name}>{strength.name}</option>
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

								<select className="form-control" id="strength1" ref={this.strength1}>
									<option selected disabled hidden>{this.props.myStrengths[0]}</option>
									{strengthsList}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength2">Second Highest Strength</label>

								<select className="form-control" id="strength2" ref={this.strength2}>
									<option selected disabled hidden>{this.props.myStrengths[1]}</option>
									{strengthsList}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="strength3">Third Highest Strength</label>

								<select className="form-control" id="strength3" ref={this.strength3}>
									<option selected disabled hidden>{this.props.myStrengths[2]}</option>
									{strengthsList}
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