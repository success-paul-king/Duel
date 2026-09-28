import {
  ArrowLeft,
  Copy,
  UserCircle
} from "lucide-react"
import { useNavigate } from "react-router-dom"

function Lobby() {
  const navigate = useNavigate()

  return (
    <main className="lobby-page">

      <header className="lobby-header">
        <button
          className="back-button"
          onClick={() => navigate("/new-game")}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1>Lobby</h1>
      </header>


      <section className="lobby-content">

        <div className="room-code">
          <span># CS-8842-X</span>

          <button
            className="copy-button"
            aria-label="Copy room code"
          >
            <Copy size={23} />
          </button>
        </div>


        <section className="members-section">
          <h2>Members</h2>

          <div className="member">
            <div className="member-info">
              <UserCircle size={28} />
              <span>John (You)</span>
            </div>

            <span className="member-xp">1420 XP</span>
          </div>

          <div className="member">
            <div className="member-info">
              <UserCircle size={28} />
              <span>Xavier</span>
            </div>

            <span className="member-xp">1400 XP</span>
          </div>

          <div className="member">
            <div className="member-info">
              <UserCircle size={28} />
              <span>Masha</span>
            </div>

            <span className="member-xp">8400 XP</span>
          </div>
        </section>


        <section className="lobby-settings">

          <div className="setting-row">
            <span>No. of Questions</span>

            <select defaultValue="10">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="setting-row">
            <span>Time</span>

            <select defaultValue="120">
              <option value="120">120 secs</option>
              <option value="180">180 secs</option>
              <option value="300">300 secs</option>
            </select>
          </div>

          <div className="setting-row">
            <span>Difficulty Level</span>

            <select defaultValue="Intermediate">
              <option value="Easy">Easy</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

        </section>


        <button className="lobby-start-button">
          Start
        </button>

        <p className="host-note">
          Only host can start a game
        </p>

      </section>

    </main>
  )
}

export default Lobby