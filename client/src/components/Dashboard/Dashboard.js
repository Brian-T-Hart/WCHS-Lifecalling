import React, { Component } from 'react';
import API from "../../utils/API";
import MyStrengths from "../MyStrengths/MyStrengths.js";
import ModalWrapper from '../ModalWrapper/ModalWrapper.js';
import MBTI from "../MyMBTI/MyMBTI.js";
import listOfStrengths from "./listOfStrengths.js";
import listOfMBTI from "./listOfMBTI.js";
import listOfSpiritualGifts from './listOfSpiritualGifts';
import MyGifts from "../MyGifts/MyGifts.js";
import listOfLoveLanguages from './listOfLoveLanguages';
import MyLoveLanguages from "../MyLoveLanguages/MyLoveLanguages.js";
import listOfIntelligences from './listOfIntelligences';
import MyIntelligences from "../MyIntelligences/MyIntelligences.js";
import MyOthers from "../MyOthers/MyOthers.js";
import Navbar from "../Navbar/Navbar.js";

class Dashboard extends Component {

	handleLogOut() {
		localStorage.clear("lifeCallingId");
		localStorage.clear("lifeCallingUsername");
	}

	updateMyStrengths = (updatedStrengths) => {
		this.setState({ myStrengths: updatedStrengths });
	}

	updateMyMBTI = (updatedMBTI) => {
		this.setState({ myMbti: updatedMBTI });
	}

	updateMyGifts = (updatedGifts) => {
		this.setState({ myGifts: updatedGifts });
	}

	updateMyLoveLanguages = (updatedLoveLanguages) => {
		this.setState({ myLoveLanguages: updatedLoveLanguages });
	}

	updateMyIntelligences = (updatedIntelligences) => {
		this.setState({ myIntelligences: updatedIntelligences });
	}

	componentWillMount() {
		API.getStudentInfo({
			id: localStorage.getItem("lifeCallingId"),
			username: localStorage.getItem("lifeCallingUsername")
		})
		.then(res => {
			if (res.data.strengths) {
				this.setState({ myStrengths: res.data.strengths });
			}
			if (res.data.mbti) {
				this.setState({ myMbti: res.data.mbti});
			}
			if (res.data.gifts) {
				this.setState({ myGifts: res.data.gifts});
			}
			if (res.data.loveLanguages) {
				this.setState({ myLoveLanguages: res.data.loveLanguages });
			}
			if (res.data.intelligences) {
				this.setState({ myIntelligences: res.data.intelligences });
			}
		})
		.catch(err => {
			console.log(err);
		});
		this.setState({ username: localStorage.getItem('lifeCallingUsername') });
	}


	constructor(props) {
		super(props);
		this.state = {
			username: "",
			myStrengths: [],
			strengths: listOfStrengths,
			myMbti: [],
			mbti: listOfMBTI,
			myGifts: [],
			gifts: listOfSpiritualGifts,
			myLoveLanguages: [],
			loveLanguages: listOfLoveLanguages,
			intelligences: listOfIntelligences,
			myIntelligences: []
		}
	}


	render() {
		return (
			<div id="dashboardContainer">
				<Navbar username={this.state.username}/>

				<div className="row container-fluid dashboardContentRow">
					<div className="col-md-1">
					</div>

					<div className="col-md-10">
						<div className="row">
							<div className="infoDiv col-md-4">
								<MyStrengths strengths={this.state.strengths} myStrengths={this.state.myStrengths}/>
							</div>

							<div className="infoDiv col-md-4">
								<MBTI mbti={this.state.mbti} myMbti={this.state.myMbti}/>
							</div>

							<div className="infoDiv col-md-4">
								<MyGifts gifts={this.state.gifts} myGifts={this.state.myGifts}/>
							</div>
						</div>

						<div className="row">
							<div className="infoDiv col-md-4">
								<MyLoveLanguages loveLanguages={this.state.loveLanguages} myLoveLanguages={this.state.myLoveLanguages} />
							</div>

							<div className="infoDiv col-md-4">
								<MyIntelligences intelligences={this.state.intelligences} myIntelligences={this.state.myIntelligences} />
							</div>

							<div className="infoDiv col-md-4">
								<MyOthers />
							</div>

						</div>
					</div>
				</div>

				<ModalWrapper strengths={this.state.strengths} myStrengths={this.state.myStrengths} strengthsCallbackFromModalWrapper={this.updateMyStrengths} mbti={this.state.mbti} myMbti={this.state.myMbti} mbtiCallbackFromModalWrapper={this.updateMyMBTI} gifts={this.state.gifts} myGifts={this.state.myGifts} giftsCallbackFromModalWrapper={this.updateMyGifts} loveLanguages={this.state.loveLanguages} myLoveLanguages={this.state.myLoveLanguages} loveLanguagesCallbackFromModalWrapper={this.updateMyLoveLanguages} intelligences={this.state.intelligences} myIntelligences={this.state.myIntelligences} intelligencesCallbackFromModalWrapper={this.updateMyIntelligences}/>
			</div>
		);
	}
}

export default Dashboard;