import React, { Component } from 'react';
import API from "../../utils/API";

class OthersModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			jahari: this.props.jahariUrl,
			learningStyles: this.props.learningStylesUrl,
			documentUrl: this.props.documentUrl
		}
		this.uploadJahari = this.uploadJahari.bind(this);
		this.uploadLearningStyles = this.uploadLearningStyles.bind(this);
		this.uploadDoc = this.uploadDoc.bind(this);
	}

	uploadDoc(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'dfonttj4w',
				upload_preset: 'bfkrw8gu',
				folder: 'wchs-life-calling'
			},

			function(error, result) {
				if (error) {
					console.log(error);
				}

				API.saveDocument(
					{
						id: localStorage.getItem("lifeCallingId"),
						documentUrl: result[0].secure_url
					}
				)
				.then(res =>
					{
						alert('Your document was saving!')
					}
				)
				.catch(err =>
					{
						alert('Something went wrong. Please try again!');
					}
				)
			}
		)
	}

	uploadJahari(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'dfonttj4w',
				upload_preset: 'bfkrw8gu',
				folder: 'wchs-life-calling'
			},

			function(error, result) {
				if (error) {
					console.log(error);
				}

				API.saveJahari(
					{
						id: localStorage.getItem("lifeCallingId"),
						jahariUrl: result[0].secure_url
					}
				)
				.then(res =>
					{
						alert('The document has been saved.')
					}
				)
				.catch(err =>
					{
						alert('Something went wrong. Please try again!');
					}
				)
			}
		)
	}

	uploadLearningStyles(e) {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'dfonttj4w',
				upload_preset: 'bfkrw8gu',
				folder: 'wchs-life-calling'
			},

			function(error, result) {
				if (error) {
					console.log(error);
				}

				API.saveLearningStyles(
					{
						id: localStorage.getItem("lifeCallingId"),
						learningStylesUrl: result[0].secure_url
					}
				)
				.then(res =>
					{
						alert('The document has been saved.')
					}
				)
				.catch(err =>
					{
						alert('Something went wrong. Please try again.');
					}
				)
			}
		)
	}

	render() {

		return (
			<div>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Add A Document</h5>

						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<form>
						<div className="modal-body">
							<button onClick={this.uploadJahari}>Upload Jahari</button>
							<button onClick={this.uploadLearningStyles}>Upload Learning Styles</button>
							<button onClick={this.uploadDoc}>Upload CV</button>
						</div>

						<div className="modal-footer">
							<button id="modalSubmitBtn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default OthersModal;