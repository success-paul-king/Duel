import { ArrowLeft, UserCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

function MatchRoomError() {
  const navigate = useNavigate()

  return (
    <main className="match-room-error-page">

      <header className="match-room-error-header">
        <button
          className="back-button"
          onClick={() => navigate("/match-room")}
          aria-label="Go back"
        >
          <ArrowLeft size={22} />
        </button>

        <div>
          <h1>Lobby Match Room</h1>
          <p>Get ready to duel!</p>
        </div>
      </header>

      <section className="match-room-error-content">

        {/* Your player */}
        <div className="error-player-card">
          <div className="error-player-avatar">
            <UserCircle size={42} />
          </div>

          <span className="error-online-dot"></span>

          <h2>John (You)</h2>

          <span className="error-player-xp">
            🏆 1,420 XP
          </span>
        </div>

        {/* VS */}
        <div className="error-vs-section">
          <div></div>
          <span>VS</span>
          <div></div>
        </div>

        {/* Opponent error */}
        <div className="opponent-error-card">
          <p>No Opponent Found :(</p>
        </div>

        {/* Settings */}
        <section className="error-match-settings">

          <div className="error-setting-row">
            <span>No. of Questions</span>

            <select defaultValue="10">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="error-setting-row">
            <span>Time</span>

            <select defaultValue="120">
              <option value="120">120 secs</option>
              <option value="180">180 secs</option>
              <option value="300">300 secs</option>
            </select>
          </div>

          <div className="error-setting-row">
            <span>Difficulty Level</span>

            <select defaultValue="Intermediate">
              <option value="Easy">Easy</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

        </section>

        {/* Actions */}
        <div className="error-match-actions">

          <button
            className="error-cancel-button"
            onClick={() => navigate("/lobby")}
          >
            Cancel Duel
          </button>

          <button
            className="error-retry-button"
          >
            Try Again
          </button>

        </div>

        <p className="error-match-note">
          Both players must be ready to start
        </p>

      </section>

    </main>
  )
}

export default MatchRoomError