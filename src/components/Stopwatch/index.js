// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerStart: false, time: 0}

  componentWillUnmount() {
    clearTimeout(this.timeInterval)
  }

  resetTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStart: false, time: 0})
  }

  stopTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStart: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  startTime = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerStart: true})
  }

  timerSec = () => {
    const {time} = this.state
    const sec = Math.floor(time % 60)

    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  timerMin = () => {
    const {time} = this.state
    const min = Math.floor(time / 60)

    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  render() {
    const {isTimerStart} = this.state

    const timer = `${this.timerMin()}:${this.timerSec()}`

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <p className="p1">Timer</p>
          </div>
          <h1>{timer}</h1>

          <div>
            <button type="button" className="btn1" onClick={this.startTime}>
              Start
            </button>
            <button type="button" className="btn2" onClick={this.stopTime}>
              Stop
            </button>
            <button type="button" className="btn3" onClick={this.resetTime}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
