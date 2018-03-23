import React, { Component } from 'react';
import MyStrengths from "../MyStrengths/MyStrengths.js";
import ModalWrapper from '../ModalWrapper/ModalWrapper.js';
import MBTI from "../MBTI/MBTI.js";
import listOfStrengths from "./listOfStrengths.js";
import listOfMBTI from "./listOfMBTI.js";
import "./Dashboard.css";

class Dashboard extends Component {

    updateMyStrengths = (updatedStrengths) => {
        console.log('updatedStrengths from ModalWrapper', updatedStrengths);
        this.setState({ myStrengths: updatedStrengths });
    }

    componentWillMount() {
        console.log('Dashboard will mount!');
        this.setState({ username: localStorage.getItem('lifeCallingUsername') });
    }

    componentDidMount() {
        console.log('Dashboard mounted!');
        console.log('MBTI ', this.state.MBTI);
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
            MBTI: listOfMBTI,
            myMBTI: []
        }
    }

   

    render() {
        return (
            <div id="dashboardContainer" className="col-md-12">
                <div className="row">
                    <header className="jumbotron col-md-12">
                        <h1 className="App-title">WCHS LIFE CALLING<span><h5>{this.state.username} </h5></span></h1>
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
                                <MBTI MBTI={this.state.MBTI} myMBTI={this.state.myMBTI}/>
                            </div>
                            <div className="infoDiv col-md-4">
                                {/* <MyStrengths /> */}
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
                <ModalWrapper strengths={this.state.strengths} myStrengths={this.state.myStrengths} callbackFromModalWrapper={this.updateMyStrengths} />
            </div>
        );
    }
}

export default Dashboard;