import { ArrowLeft, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MatchRoom() {
  const navigate = useNavigate();

  return (
    <main className="match-room-page">
      <header className="match-room-header">
        <button
          className="back-button"
          onClick={() => navigate("/lobby")}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1>Lobby Match Room</h1>
      </header>

      <section className="match-room-content">
        {/* Current Player */}
        <div className="player-card">
          <div className="player-avatar">
            <UserCircle size={42} />
          </div>

          <span className="online-dot"></span>

          <h2>John (You)</h2>

          <span className="player-xp">🏆 1,420 XP</span>
        </div>

        {/* VS */}
        <div className="vs-section">
          <div className="vs-line"></div>
          <span>VS</span>
          <div className="vs-line"></div>
        </div>

        {/* Opponent */}
        <div className="player-card searching">
          <div className="searching-avatar">
            <UserCircle size={30} />
          </div>

          <h2>Searching for opponent...</h2>

          <p>Finding the perfect match</p>

          <div className="search-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Game Settings */}
        <section className="match-settings">
          <div className="match-setting-row">
            <span>No. of Questions</span>
            <select defaultValue="10">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="match-setting-row">
            <span>Time</span>
            <select defaultValue="120">
              <option value="120">120 secs</option>
              <option value="180">180 secs</option>
              <option value="300">300 secs</option>
            </select>
          </div>

          <div className="match-setting-row">
            <span>Difficulty Level</span>
            <select defaultValue="Intermediate">
              <option value="Easy">Easy</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </section>

        {/* Actions */}
        <div className="match-actions">
          <button
            className="cancel-duel-button"
            onClick={() => navigate("/lobby")}
          >
            Cancel Duel
          </button>

          <button
            className="start-duel-button"
            onClick={() => navigate("/live-duel")}
          >
            Start Duel
          </button>
        </div>

        <p className="match-note">Both players must be ready to start</p>
      </section>
    </main>
  );
}

export default MatchRoom;
