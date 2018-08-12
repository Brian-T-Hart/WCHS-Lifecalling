import React, { Component } from 'react';
import API from "../../utils/API";
import Navbar from "../Navbar/Navbar.js";
import "./AllStudents.css";

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
			var students = res.data;
			var data = [];
			for (var i = 0; i < students.length; i++) {
				data[i] = students[i]
			}
			this.setState({allStudents: data});
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {

		const allTheStudents = this.state.allStudents.map((student) =>
				<div className="studentInfoContainer" key={student.id}>
					<h5>{student.id}</h5>
					<h5>{student.username}</h5>
					<h5>{student.email}</h5>
					<h5>{student.strengths}</h5>
					<h5>{student.mbti}</h5>
					<h5>{student.gifts}</h5>
					<h5>{student.loveLanguages}</h5>
					<h5>{student.intelligences}</h5>
					<h5>{student.documentUrl}</h5>
				</div>
		)

		return (

			<div>
				<Navbar />
				{ allTheStudents }
			</div>
		)
	}
}

export default AllStudents;