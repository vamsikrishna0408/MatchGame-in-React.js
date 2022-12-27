import './index.css'

const ScoreCard = props => {
  const {onReloadGame, score} = props
  const onClicking = () => {
    onReloadGame()
  }
  return (
    <div className="score-card">
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="heading">YOUR SCORE</p>
        <h1 className="score">{score}</h1>
        <button type="button" className="button" onClick={onClicking}>
          <div className="reset-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-icon"
            />
            <p> PLAY AGAIN</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
