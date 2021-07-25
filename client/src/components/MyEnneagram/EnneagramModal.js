import React, { Component } from 'react';
import API from "../../utils/API";

class EnneagramModal extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myEnneagram = [this.refs.enneagram.value, this.refs.wing.value];
		this.props.callbackFromEnneagramModal(this.myEnneagram);
		API.updateEnneagram(
			{
				id: localStorage.getItem("lifeCallingId"),
				enneagram: this.myEnneagram
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
		const listOfEnneagramTypes = this.props.enneagram.map((type) =>
			<option key={type.id}>{type.name}</option>
		);

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Enneagram Type</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="enneagram">Choose Type</label>

								<select className="form-control" id="enneagram" ref="enneagram">
									<option selected disabled hidden>{this.props.myEnneagram[0]}</option>
									{listOfEnneagramTypes}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="wing">Choose Wing</label>

								<select className="form-control" id="wing" ref="wing">
									<option selected disabled hidden>{this.props.myEnneagram[1]}</option>
									{listOfEnneagramTypes}
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

export default EnneagramModal;