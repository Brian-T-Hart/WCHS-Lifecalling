import React, { Component } from 'react';
import API from "../../utils/API";
import Navbar from "../Navbar/Navbar.js";

class AllStudents extends Component {

	constructor(props) {
		super(props);
		this.state = {
			allStudents: []
	}
}

	componentWillMount() {

		API.getAllStudents({
			id: localStorage.getItem("lifeCallingId"),
			username: localStorage.getItem("lifeCallingUsername")
		})
		.then(res => {
			console.log("response to getAllStudents ", res.data);
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {

		// const students = this.state.allStudents.map((student) =>
		// 	<div key={student.id}>
		// 		<div>{student.id}</div>
		// 		<div>{student.username}</div>
		// 		<div>{student.username}</div>
		// 	</div>
		// );

		return (

			<div>
				<Navbar />
				<div>
					<h1 class="text-center">This is a Test</h1>
				</div>
			</div>
		)
	}
}

export default AllStudents;