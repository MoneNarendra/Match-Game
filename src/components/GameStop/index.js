import './index.css'

const GameStop = props => {
  const {playAgain, score} = props
  return (
    <div className="inner-container">
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p className="score-dis">YOUR SCORE</p>
        <h1 className="score">{score}</h1>
        <button type="button" className="play-again-btn" onClick={playAgain}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="reset-text">Play Again</p>
        </button>
      </div>
    </div>
  )
}

export default GameStop
