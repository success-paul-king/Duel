import { ArrowLeft, UserCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Leaderboard() {
  const navigate = useNavigate()

  const leaderboardData = [
    { rank: 49, name: "Calum", xp: 9870 },
    { rank: 50, name: "Jessica", xp: 9800 },
    { rank: 51, name: "Masha", xp: 8431 },
    { rank: 52, name: "Xavier", xp: 1467 },
    { rank: 53, name: "John (You)", xp: 1445, isCurrentUser: true },
    { rank: 54, name: "Calum", xp: 9870 },
    { rank: 55, name: "Calum", xp: 9870 },
    { rank: 56, name: "Calum", xp: 9870 },
    { rank: 57, name: "Calum", xp: 9870 },
  ]

  return (
    <main className="leaderboard-page">

      <header className="leaderboard-header">
        <button
          className="back-button"
          onClick={() => navigate("/results")}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1>Leaderboard</h1>
      </header>

      <section className="leaderboard-list">

        {leaderboardData.map((player) => (
          <div
            key={`${player.rank}-${player.name}`}
            className={`leaderboard-row ${
              player.isCurrentUser ? "current-player" : ""
            }`}
          >
            <span className="leaderboard-rank">
              {player.rank}.
            </span>

            <div className="leaderboard-avatar">
              <UserCircle size={23} />
            </div>

            <span className="leaderboard-name">
              {player.name}
            </span>

            <span className="leaderboard-xp">
              {player.xp}XP
            </span>
          </div>
        ))}

      </section>

    </main>
  )
}

export default Leaderboard