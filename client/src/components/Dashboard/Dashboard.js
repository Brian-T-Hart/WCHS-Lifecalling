import React, { Component } from 'react';
import API from "../../utils/API";
import MyStrengths from "../MyStrengths/MyStrengths.js";
import ModalWrapper from '../ModalWrapper/ModalWrapper.js';
import MBTI from "../MyMBTI/MyMBTI.js";
import listOfStrengths from "./listOfStrengths.js";
import listOfMBTI from "./listOfMBTI.js";
import "./Dashboard.css";
import listOfSpiritualGifts from './listOfSpiritualGifts';
import MyGifts from "../MyGifts/MyGifts.js";

class Dashboard extends Component {

    handleLogOut() {
        localStorage.clear("lifeCallingId");
        localStorage.clear("lifeCallingUsername");
    }

    updateMyStrengths = (updatedStrengths) => {
        console.log('updatedStrengths from ModalWrapper', updatedStrengths);
        this.setState({ myStrengths: updatedStrengths });
    }

    updateMyMBTI = (updatedMBTI) => {
        console.log('updatedMBTI from ModalWrapper', updatedMBTI);
        this.setState({ myMbti: updatedMBTI });
    }

    updateMyGifts = (updatedGifts) => {
        console.log('updatedGifts from ModalWrapper', updatedGifts);
        this.setState({ myGifts: updatedGifts });
    }

    componentWillMount() {
        console.log('Dashboard will mount!');
        API.getStudentInfo({
            id: localStorage.getItem("lifeCallingId"),
            username: localStorage.getItem("lifeCallingUsername")
        })
        .then(res => {
            console.log("data from dashboard mounting and getStudentInfo ", res.data);
            if (res.data.strengths) {
                this.setState({ myStrengths: res.data.strengths });
            }
            if (res.data.mbti) {
                this.setState({ myMbti: res.data.mbti});
            }
            if (res.data.gifts) {
                this.setState({ myGifts: res.data.gifts});
            }
        })
        .catch(err => {
            console.log(err);
        });
        this.setState({ username: localStorage.getItem('lifeCallingUsername') });
    }


    componentDidMount() {
        console.log('Dashboard mounted!');
        console.log('MBTI ', this.state.mbti);
    }

    componentDidUpdate() {
        console.log('Dashboard updated!');
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
        }
    }


    render() {
        return (
            <div id="dashboardContainer" className="col-md-12">
                <div className="row">
                    <header className="jumbotron col-md-12">
                        <a href="/login" onClick={this.handleLogOut}>logout</a>
                        <h1 className="App-title">WCHS LIFE CALLING
                        <span><h5>{this.state.username} </h5></span>
                        </h1>
                    </header>
                </div>

                <div className="row">
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
                                {/* <MyStrengths /> */}
                            </div>
                            <div className="infoDiv col-md-4">
                                {/* <MyStrengths /> */}
                            </div>
                            <div className="infoDiv col-md-4">
                                {/* <MyStrengths /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <ModalWrapper strengths={this.state.strengths} myStrengths={this.state.myStrengths} strengthsCallbackFromModalWrapper={this.updateMyStrengths} mbti={this.state.mbti} myMbti={this.state.myMbti} mbtiCallbackFromModalWrapper={this.updateMyMBTI} gifts={this.state.gifts} myGifts={this.state.myGifts} giftsCallbackFromModalWrapper={this.updateMyGifts}/>
            </div>
        );
    }
}

export default Dashboard;