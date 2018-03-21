import React, { Component } from 'react';
import MyStrengths from "../MyStrengths/MyStrengths.js";
import ModalWrapper from '../ModalWrapper/ModalWrapper.js';

class Dashboard extends Component {

    updateMyStrengths = (updatedStrengths) => {
        console.log('updatedStrengths from ModalWrapper', updatedStrengths);
        this.setState({ myStrengths: updatedStrengths });
    }

    componentDidMount() {
        console.log('Dashboard mounted!');
    }

    componentDidUpdate() {
        console.log('Dashboard updated!');
        console.log("new myStrengths after closing modal ");
    }

    constructor(props) {
        super(props);
        this.state = {
            strengths: [
                {
                    id: 1,
                    name: "achiever",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 2,
                    name: "activator",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 3,
                    name: "adaptability",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 4,
                    name: "analytical",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 5,
                    name: "arranger",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 6,
                    name: "belief",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 7,
                    name: "command",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 8,
                    name: "communication",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 9,
                    name: "competition",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 10,
                    name: "connectedness",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 11,
                    name: "consistency",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 12,
                    name: "context",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 13,
                    name: "deliberative",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 14,
                    name: "developer",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 15,
                    name: "discipline",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 16,
                    name: "empathy",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 17,
                    name: "focus",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 18,
                    name: "futuristic",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 19,
                    name: "harmony",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 20,
                    name: "ideation",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 21,
                    name: "includer",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 22,
                    name: "Individualization",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 23,
                    name: "input",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 24,
                    name: "intellection",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 25,
                    name: "learner",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 26,
                    name: "maximizer",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 27,
                    name: "positivity",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 28,
                    name: "realtor",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 29,
                    name: "responsibility",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 30,
                    name: "restorative",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 31,
                    name: "self assurance",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 32,
                    name: "significance",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 33,
                    name: "strategic",
                    description: "",
                    strengthOfMine: false
                },
                {
                    id: 34,
                    name: "woo",
                    description: "",
                    strengthOfMine: false
                }
            ],
            myStrengths: [],
        }
    }

   

    render() {
        return (
            <div className="App col-md-12">
                <div className="row">
                    <header className="jumbotron col-md-12">
                        <h1 className="App-title">WCHS Worldviews App</h1>
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
                                {/* <MyStrengths /> */}
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