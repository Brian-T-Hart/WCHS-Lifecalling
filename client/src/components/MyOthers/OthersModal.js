import React, { Component } from 'react';
import API from "../../utils/API";

class OthersModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			documentUrl: this.props.documentUrl,
			jahari: this.props.jahari
		}
		this.uploadDoc = this.uploadDoc.bind(this);
	}

	// handleClick(e) {
	// 	e.preventDefault();
	// 	API.updateOthers(
	// 		{
	// 			id: localStorage.getItem("lifeCallingId"),
	// 		}
	// 	)
	// 	.then(
	// 		res => {
	// 			console.log(res);
	// 		}
	// 	)
	// 	.catch(
	// 		err => {
	// 			alert('something went wrong');
	// 			console.log(err);
	// 		}
	// 	);
	// }

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
						console.log("response from saveDocument...OthersModal.js ", res);
					}
				)
				.catch(err =>
					{
						alert('something went wrong');
						console.log(err);
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
							{/* <div className="form-group">
								<label htmlFor="Jahari">Choose Type</label>
								<select className="form-control" id="Jahari" ref="Jahari">
									<option selected disabled hidden>Jahari</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="learning-styles">Choose Type</label>
								<select className="form-control" id="learning-styles" ref="learning-styles">
									<option selected disabled hidden>Learning Styles</option>
								</select>
							</div> */}

							<button onClick={this.uploadDoc}>Add Document</button>
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

export default OthersModal;