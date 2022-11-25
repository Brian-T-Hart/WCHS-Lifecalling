import React, { Component } from 'react';
import API from "../../utils/API";

class CommonValuesModal extends Component {

	constructor(props) {
		super(props);
		this.cvalue1 = React.createRef();
		this.cvalue2 = React.createRef();
		this.cvalue3 = React.createRef();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myCommonValues = [...this.props.myCommonValues];
		this.myCommonValues[0]=this.cvalue1.current.value;
		this.myCommonValues[1]=this.cvalue2.current.value;
		this.myCommonValues[2]=this.cvalue3.current.value;
		this.props.callbackFromCommonValuesModal(this.myCommonValues);
		API.updateCommonValues(
			{
				id: localStorage.getItem("lifeCallingId"),
				commonValues: this.myCommonValues
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
		const listOfCommonValues = this.props.commonValues.map((commonValue) =>
			<option key={commonValue.id}>{commonValue.name}</option>
		);

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Common Values</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="cvalue1">Choose Type</label>

								<select className="form-control" id="cvalue1" ref={this.cvalue1}>
									<option selected disabled hidden>{this.props.myCommonValues[0]}</option>
									{listOfCommonValues}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="cvalue2">Choose Value</label>

								<select className="form-control" id="cvalue2" ref={this.cvalue2}>
									<option selected disabled hidden>{this.props.myCommonValues[1]}</option>
									{listOfCommonValues}
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="cvalue3">Choose Type</label>

								<select className="form-control" id="cvalue3" ref={this.cvalue3}>
									<option selected disabled hidden>{this.props.myCommonValues[2]}</option>
									{listOfCommonValues}
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

export default CommonValuesModal;