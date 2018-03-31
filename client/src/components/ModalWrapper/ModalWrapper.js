import React, { Component } from 'react';
import StrengthsModal from "../StrengthsModal/StrengthsModal.js";
import MBTIModal from "../MBTIModal/MBTIModal.js";
import GiftsModal from "../GiftsModal/GiftsModal.js";
import LoveLanguagesModal from "../LoveLanguagesModal/LoveLanguagesModal.js";
import IntelligencesModal from "../IntelligencesModal/IntelligencesModal.js";

class ModalWrapper extends Component {
    
    updateMyStrengths = (updatedStrengths) => {
        this.props.strengthsCallbackFromModalWrapper(updatedStrengths);
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

    constructor(props) {
        super(props);
        this.state = {
            strengths: this.props.strengths,
            myStrengths: this.props.myStrengths,
            mbti: this.props.mbti,
            myMbti: this.props.myMbti,
            gifts: this.props.gifts,
            myGifts: this.props.myGifts,
            loveLanguages: this.props.loveLanguages,
            myLoveLanguages: this.props.myLoveLanguages,
            intelligences: this.props.intelligences,
            myIntelligences: this.props.myIntelligences
        }
    }
    

    render() {

        return (
            <div>

                {/* Modal wrapper for strengthsModal */}
                <div className="modal fade" id="strengthsModalWrapper" role="dialog">
                    <div className="modal-dialog">
                        <StrengthsModal strengths={this.props.strengths} myStrengths={this.props.myStrengths} callbackFromStrengthsModal={this.updateMyStrengths}/>
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

                <div className="modal fade" id="loveLanguagesModalWrapper" role="dialog">
                    <div className="modal-dialog">
                        <LoveLanguagesModal loveLanguages={this.props.loveLanguages} myLoveLanguages={this.props.myLoveLanguages} callbackFromLoveLanguagesModal={this.updateMyLoveLanguages} />
                    </div>
                </div>

                <div className="modal fade" id="intelligencesModalWrapper" role="dialog">
                    <div className="modal-dialog">
                        <IntelligencesModal intelligences={this.props.intelligences} myIntelligences={this.props.myIntelligences} callbackFromIntelligencesModal={this.updateMyIntelligences} />
                    </div>
                </div>

            </div>
        )
    }
}

export default ModalWrapper;