import React, { Component } from 'react';
import API from "../../utils/API";
import ModalWrapper from '../ModalWrapper/ModalWrapper.js';
import listOfCommonValues from './listOfCommonValues.js';
import MyCommonValues from "../MyCommonValues/MyCommonValues.js"
import listOfStrengthsExplorer from "./listOfStrengthsExplorer.js";
import MyStrengths from "../MyStrengths/MyStrengths.js";
import listOfMBTI from "./listOfMBTI.js";
import MBTI from "../MyMBTI/MyMBTI.js";
import listOfSpiritualGifts from './listOfSpiritualGifts';
import MyGifts from "../MyGifts/MyGifts.js";
import listOfLoveLanguages from './listOfLoveLanguages';
import MyLoveLanguages from "../MyLoveLanguages/MyLoveLanguages.js";
import listOfIntelligences from './listOfIntelligences';
import MyIntelligences from "../MyIntelligences/MyIntelligences.js";
import listOfEnneagramTypes from "./listOfEnneagramTypes.js";
import MyEnneagram from "../MyEnneagram/MyEnneagram.js";
import MyOthers from "../MyOthers/MyOthers.js";

class Dashboard extends Component {

	updateMyCommonValues = (updatedCommonValues) => {
		this.setState({ myCommonValues: updatedCommonValues });
	}

	updateMyStrengths = (updatedStrengths) => {
		this.setState({ myStrengths: updatedStrengths });
	}

	updateMyEnneagram = (updatedEnneagram) => {
		this.setState({ myEnneagram: updatedEnneagram });
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

	updateMyJohariUrl = (updatedJohariUrl) => {
		this.setState({ myJohariUrl: updatedJohariUrl });
	}

	updateMyLearningStylesUrl = (updatedLearningStylesUrl) => {
		this.setState({ myLearningStylesUrl: updatedLearningStylesUrl });
	}

	updateMyDocumentUrl = (updatedDocumentUrl) => {
		this.setState({ myDocumentUrl: updatedDocumentUrl });
	}

	componentWillMount() {
		API.getStudentInfo({
			id: localStorage.getItem("lifeCallingId"),
			username: localStorage.getItem("lifeCallingUsername")
		})
			.then(res => {
				if (res.data.commonValues) {
					this.setState({ myCommonValues: res.data.commonValues });
				}
				if (res.data.strengths) {
					this.setState({ myStrengths: res.data.strengths });
				}
				if (res.data.enneagram) {
					this.setState({ myEnneagram: res.data.enneagram });
				}
				if (res.data.mbti) {
					this.setState({ myMbti: res.data.mbti });
				}
				if (res.data.gifts) {
					this.setState({ myGifts: res.data.gifts });
				}
				if (res.data.loveLanguages) {
					this.setState({ myLoveLanguages: res.data.loveLanguages });
				}
				if (res.data.intelligences) {
					this.setState({ myIntelligences: res.data.intelligences });
				}
				if (res.data.documentUrl) {
					this.setState({ myDocumentUrl: res.data.documentUrl })
				}
				if (res.data.johariUrl) {
					this.setState({ myJohariUrl: res.data.johariUrl })
				}
				if (res.data.learningStylesUrl) {
					this.setState({ myLearningStylesUrl: res.data.learningStylesUrl })
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
			myCommonValues: [],
			commonValues: listOfCommonValues,
			myStrengths: [],
			strengths: listOfStrengthsExplorer,
			myEnneagram: "",
			enneagram: listOfEnneagramTypes,
			myMbti: [],
			mbti: listOfMBTI,
			myGifts: [],
			gifts: listOfSpiritualGifts,
			myLoveLanguages: [],
			loveLanguages: listOfLoveLanguages,
			intelligences: listOfIntelligences,
			myIntelligences: [],
			myDocumentUrl: "",
			myJohariUrl: "",
			myLearningStylesUrl: ""
		}
	}


	render() {
		return (
			<div className="content-container" id="dashboardContainer">

				<div className="container-fluid dashboard-content-row pt-3 row">
					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MyCommonValues commonValues={this.state.commonValues} myCommonValues={this.state.myCommonValues} />
					</div>

					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MyStrengths strengths={this.state.strengths} myStrengths={this.state.myStrengths} />
					</div>

					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MyEnneagram enneagram={this.state.enneagram} myEnneagram={this.state.myEnneagram} />
					</div>

					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MyIntelligences intelligences={this.state.intelligences} myIntelligences={this.state.myIntelligences} />
					</div>

					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MBTI mbti={this.state.mbti} myMbti={this.state.myMbti} />
					</div>

					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MyGifts gifts={this.state.gifts} myGifts={this.state.myGifts} />
					</div>

					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MyLoveLanguages loveLanguages={this.state.loveLanguages} myLoveLanguages={this.state.myLoveLanguages} />
					</div>

					<div className="info-div col-lg-4 col-md-6 col-sm-12">
						<MyOthers documentUrl={this.state.myDocumentUrl} johariUrl={this.state.myJohariUrl} learningStylesUrl={this.state.myLearningStylesUrl} />
					</div>
				</div>

				<ModalWrapper
					documentUrl={this.state.myDocumentUrl}
					johariUrl={this.state.myJohariUrl}
					learningStylesUrl={this.state.myLearningStylesUrl}
					commonValues={this.state.commonValues}
					myCommonValues={this.state.myCommonValues}
					commonValuesCallbackFromModalWrapper={this.updateMyCommonValues}
					strengths={this.state.strengths}
					myStrengths={this.state.myStrengths}
					strengthsCallbackFromModalWrapper={this.updateMyStrengths}
					enneagram={this.state.enneagram}
					myEnneagram={this.state.myEnneagram}
					enneagramCallbackFromModalWrapper={this.updateMyEnneagram} 
					mbti={this.state.mbti} myMbti={this.state.myMbti}
					mbtiCallbackFromModalWrapper={this.updateMyMBTI}
					gifts={this.state.gifts} myGifts={this.state.myGifts}
					giftsCallbackFromModalWrapper={this.updateMyGifts}
					loveLanguages={this.state.loveLanguages}
					myLoveLanguages={this.state.myLoveLanguages}
					loveLanguagesCallbackFromModalWrapper={this.updateMyLoveLanguages}
					intelligences={this.state.intelligences}
					myIntelligences={this.state.myIntelligences}
					intelligencesCallbackFromModalWrapper={this.updateMyIntelligences}
				/>
			</div>
		);
	}
}

export default Dashboard;