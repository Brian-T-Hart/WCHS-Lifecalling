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
		this.myMbti[4]=document.getElementById('introvert-extrovert').value;
		this.myMbti[5]=document.getElementById('sensing-intuition').value;
		this.myMbti[6]=document.getElementById('thinking-feeling').value;
		this.myMbti[7]=document.getElementById('perceiving-judging').value;

		this.props.callbackFromMBTIModal(this.myMbti);
		API.updateMBTI(
			{
				id: localStorage.getItem("lifeCallingId"),
				myMbti: this.myMbti
			}
		)
		.then(
			res => {
				console.log(res.statusText);
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
		let selectedOption5 = '0';
		let selectedOption6 = '0';
		let selectedOption7 = '0';
		let selectedOption8 = '0';
		
		if (Array.isArray(this.props.myMbti)) {
			selectedOption1 = this.props.myMbti[0];
			selectedOption2 = this.props.myMbti[1];
			selectedOption3 = this.props.myMbti[2];
			selectedOption4 = this.props.myMbti[3];
			selectedOption5 = this.props.myMbti[4];
			selectedOption6 = this.props.myMbti[5];
			selectedOption7 = this.props.myMbti[6];
			selectedOption8 = this.props.myMbti[7];
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

							<Slider
								sliderId="introvert-extrovert"
								sliderLabel1="Introvert"
								sliderLabel2="Extrovert"
								sliderValue={selectedOption5}
								myMbti={this.props.myMbti}
							/>

							<div className="form-group">
								<label htmlFor="mbti2">Choose Type</label>

								<select className="form-control" id="mbti2" ref={this.mbti2}>
									<option selected disabled hidden>{selectedOption2}</option>

									<option>Sensing</option>

									<option>Intuition</option>
								</select>
							</div>

							<Slider
								sliderId="sensing-intuition"
								sliderLabel1="Sensing"
								sliderLabel2="Intuition"
								sliderValue={selectedOption6}
								myMbti={this.props.myMbti}
							/>

							<div className="form-group">
								<label htmlFor="mbti3">Choose Type</label>

								<select className="form-control" id="mbti3" ref={this.mbti3}>
									<option selected disabled hidden>{selectedOption3}</option>

									<option>Thinking</option>

									<option>Feeling</option>
								</select>
							</div>

							<Slider
								sliderId="thinking-feeling"
								sliderLabel1="Thinking"
								sliderLabel2="Feeling"
								sliderValue={selectedOption7}
								myMbti={this.props.myMbti}
							/>

							<div className="form-group">
								<label htmlFor="mbti4">Choose Type</label>

								<select className="form-control" id="mbti4" ref={this.mbti4}>
									<option selected disabled hidden>{selectedOption4}</option>

									<option>Perceiving</option>

									<option>Judging</option>
								</select>
							</div>

							<Slider
									sliderId="perceiving-judging"
									sliderLabel1="Perceiving"
									sliderLabel2="Judging"
									sliderValue={selectedOption8}
									myMbti={this.props.myMbti}
							/>
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