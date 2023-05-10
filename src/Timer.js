import { Component } from "react";
import './Timer.css';


class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 10
        }
        this.timer = null
    };

    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState(prevState => {
                return {
                    time: prevState.time - 1
                };
            });
        }, 1000)

    };
    stopTimer = () => {
        clearInterval(this.timer)
        this.timer = null
    };
    resetTimer = () => {
        clearInterval(this.timer);
        this.timer = null;
        this.setState({ time: 10 });
    };


    render() {
        return (
            <div>
                <p className="numbers">{this.state.time}</p>
                <span>
                    <button className="btn start-btn" onClick={this.startTimer}>Start</button>
                    <button className="btn stop-btn" onClick={this.stopTimer}>Stop</button>
                    <button className="btn reset-btn" onClick={this.resetTimer}>Reset</button>
                </span>
            </div>
        )
    }
}


export default Timer;