import React, { Component } from 'react';
import CommonValuesModal from '../MyCommonValues/CommonValuesModal.js';
import StrengthsModal from "../MyStrengths/StrengthsModal.js";
import EnneagramModal from "../MyEnneagram/EnneagramModal.js";
import MBTIModal from "../MyMBTI/MBTIModal.js";
import GiftsModal from "../MyGifts/GiftsModal.js";
import LoveLanguagesModal from "../MyLoveLanguages/LoveLanguagesModal.js";
import IntelligencesModal from "../MyIntelligences/IntelligencesModal.js";
import OthersModal from "../MyOthers/OthersModal.js";

class ModalWrapper extends Component {

	updateMyCommonValues = (updatedCommonValues) => {
		this.props.commonValuesCallbackFromModalWrapper(updatedCommonValues);
	}

	updateMyStrengths = (updatedStrengths) => {
		this.props.strengthsCallbackFromModalWrapper(updatedStrengths);
	}

	updateMyEnneagram = (updatedEnneagram) => {
		this.props.enneagramCallbackFromModalWrapper(updatedEnneagram);
	}

	updateMyMBTI = (updatedMBTI) => {
		this.props.mbtiCallbackFromModalWrapper(updatedMBTI);
	}

	updateMyGifts = (updatedGifts) => {
		this.props.giftsCallbackFromModalWrapper(updatedGifts);
	}

	updateMyLoveLanguages = (updatedLoveLanguages) => {
		this.props.loveLanguagesCallbackFromModalWrapper(updatedLoveLanguages);
	}

	updateMyIntelligences = (updatedIntelligences) => {
		this.props.intelligencesCallbackFromModalWrapper(updatedIntelligences);
	}

	updateMyOthers = (updatedOthers) => {
		this.props.othersCallbackFromModalWrapper(updatedOthers);
	}


	render() {

		return (
			<div>
				{/* Modal wrapper for commonValuesModal */}
				<div className="modal fade" id="commonValuesModalWrapper" role="dialog">
					<div className="modal-dialog">
						<CommonValuesModal commonValues={this.props.commonValues} myCommonValues={this.props.myCommonValues} callbackFromCommonValuesModal={this.updateMyCommonValues}/>
					</div>
				</div>

				{/* Modal wrapper for strengthsModal */}
				<div className="modal fade" id="strengthsModalWrapper" role="dialog">
					<div className="modal-dialog">
						<StrengthsModal strengths={this.props.strengths} myStrengths={this.props.myStrengths} callbackFromStrengthsModal={this.updateMyStrengths}/>
					</div>
				</div>

				{/* Modal wrapper for enneagramModal */}
				<div className="modal fade" id="enneagramModalWrapper" role="dialog">
					<div className="modal-dialog">
						<EnneagramModal enneagram={this.props.enneagram} myEnneagram={this.props.myEnneagram} callbackFromEnneagramModal={this.updateMyEnneagram}/>
					</div>
				</div>

				{/* Modal wrapper for MBTIModal */}
				<div className="modal fade" id="mbtiModalWrapper" role="dialog">
					<div className="modal-dialog">
						<MBTIModal mbti={this.props.mbti} myMbti={this.props.myMbti} callbackFromMBTIModal={this.updateMyMBTI} />
					</div>
				</div>

				{/* Modal wrapper for giftsModal */}
				<div className="modal fade" id="giftsModalWrapper" role="dialog">
					<div className="modal-dialog">
						<GiftsModal gifts={this.props.gifts} myGifts={this.props.myGifts} callbackFromGiftsModal={this.updateMyGifts} />
					</div>
				</div>

				{/* Modal wrapper for loveLanguagesModal */}
				<div className="modal fade" id="loveLanguagesModalWrapper" role="dialog">
					<div className="modal-dialog">
						<LoveLanguagesModal loveLanguages={this.props.loveLanguages} myLoveLanguages={this.props.myLoveLanguages} callbackFromLoveLanguagesModal={this.updateMyLoveLanguages} />
					</div>
				</div>

				{/* Modal wrapper for intelligencesModal */}
				<div className="modal fade" id="intelligencesModalWrapper" role="dialog">
					<div className="modal-dialog">
						<IntelligencesModal intelligences={this.props.intelligences} myIntelligences={this.props.myIntelligences} callbackFromIntelligencesModal={this.updateMyIntelligences} />
					</div>
				</div>

				{/* Modal wrapper for othersModal */}
				<div className="modal fade" id="othersModalWrapper" role="dialog">
					<div className="modal-dialog">
						<OthersModal others={this.props.others} myOthers={this.props.myOthers} callbackFromOthersModal={this.updateMyOthers} />
					</div>
				</div>
			</div>
		)
	}
}

export default ModalWrapper;