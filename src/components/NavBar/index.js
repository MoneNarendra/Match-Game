import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <ul className="nav-bar-con">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="log-img"
        />
      </li>
      <li className="nav-text-con">
        <p className="score-text">Score: </p>
        <p className="high-lighted-text">{score}</p>
        <div className="timer-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="time-img"
          />
          <p className="high-lighted-text">{timer} Sec</p>
        </div>
      </li>
    </ul>
  )
}

export default NavBar
