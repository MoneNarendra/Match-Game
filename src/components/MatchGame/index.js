import {Component} from 'react'
import NavBar from '../NavBar'
import GameRun from '../GameRun'
import GameStop from '../GameStop'
import './index.css'

class MatchGame extends Component {
  state = {gameRunnig: true, score: 0, timer: 60}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {timer, gameRunnig} = this.state

    if (timer === 0 || gameRunnig === false) {
      clearInterval(this.timerId)
      this.stopGame()
      this.setState({timer: 0})
    } else if (timer !== 0 || gameRunnig) {
      this.setState(prevVal => ({timer: prevVal.timer - 1}))
    }
  }

  increaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  stopGame = () => {
    this.setState({gameRunnig: false})
  }

  playAgain = () => {
    this.setState({gameRunnig: true, score: 0, timer: 60})
    this.componentDidMount()
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {gameRunnig, score, timer} = this.state

    return (
      <div className="inner-con">
        <NavBar score={score} timer={timer} />
        {gameRunnig ? (
          <GameRun
            tabsList={tabsList}
            imagesList={imagesList}
            increaseScore={this.increaseScore}
            stopGame={this.stopGame}
          />
        ) : (
          <GameStop playAgain={this.playAgain} score={score} />
        )}
      </div>
    )
  }
}

export default MatchGame
