import React, { Component } from 'react';
import { Slider } from './Slider';
import API from "../../utils/API";

class MBTIModal extends Component {

	constructor(props) {
		super(props);
		this.mbti1 = React.createRef();
		this.mbti2 = React.createRef();
		this.mbti3 = React.createRef();
		this.mbti4 = React.createRef();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.myMbti = [this.props.myMbti[0], this.props.myMbti[1], this.props.myMbti[2], this.props.myMbti[3], this.props.myMbti[4]];
		this.myMbti[0]=this.mbti1.current.value;
		this.myMbti[1]=this.mbti2.current.value;
		this.myMbti[2]=this.mbti3.current.value;
		this.myMbti[3]=this.mbti4.current.value;
		this.myMbti[4]=document.getElementById('mbti-slider').value;
		console.log(this.myMbti);

		this.props.callbackFromMBTIModal(this.myMbti);
		API.updateMBTI(
			{
				id: localStorage.getItem("lifeCallingId"),
				myMbti: this.myMbti
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
		let selectedOption1 = '--Select--';
		let selectedOption2 = '--Select--';
		let selectedOption3 = '--Select--';
		let selectedOption4 = '--Select--';
		
		if (Array.isArray(this.props.myMbti)) {
			selectedOption1 = this.props.myMbti[0];
			selectedOption2 = this.props.myMbti[1];
			selectedOption3 = this.props.myMbti[2];
			selectedOption4 = this.props.myMbti[3];
		}
		
		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Select Your Types</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="mbti1">Choose Type</label>

								<select className="form-control" id="mbti1" ref={this.mbti1}>
									<option selected disabled hidden>{selectedOption1}</option>

									<option>Extrovert</option>

									<option>Introvert</option>
								</select>
							</div>

							<Slider myMbti={this.props.myMbti} />

							<div className="form-group">
								<label htmlFor="mbti2">Choose Type</label>

								<select className="form-control" id="mbti2" ref={this.mbti2}>
									<option selected disabled hidden>{selectedOption2}</option>

									<option>Sensing</option>

									<option>Intuition</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="mbti3">Choose Type</label>

								<select className="form-control" id="mbti3" ref={this.mbti3}>
									<option selected disabled hidden>{selectedOption3}</option>

									<option>Thinking</option>

									<option>Feeling</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="mbti4">Choose Type</label>

								<select className="form-control" id="mbti4" ref={this.mbti4}>
									<option selected disabled hidden>{selectedOption4}</option>

									<option>Perceiving</option>

									<option>Judging</option>
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

export default MBTIModal;