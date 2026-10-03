import { useNavigate } from "react-router-dom"

import RankingRow from "./RankingRow"
import AnswerReview from "./AnswerReview"

function Results() {
  const navigate = useNavigate()

  const resultsData = {
    players: [
      {
        rank: 1,
        name: "Calum",
        xp: 50,
        points: 760
      },
      {
        rank: 2,
        name: "John",
        xp: 45,
        points: 700,
        isCurrentUser: true
      },
      {
        rank: 3,
        name: "Xavier",
        xp: 40,
        points: 680
      },
      {
        rank: 4,
        name: "Masha",
        xp: 20,
        points: 670
      }
    ],

    score: {
      correct: 12,
      total: 15
    },

    answers: [
      {
        question:
          "Which of these is not a data Structure",
        answer: "Hierarchical Structure",
        correct: true
      },

      {
        question:
          "Which of the following data structures operates explicitly on a Last-In, First-Out (LIFO) operational mechanism",
        answer: "Stack",
        correct: true
      },

      {
        question:
          "Which of the following data structures operates explicitly on a First-In, First-Out (FIFO) operational mechanism",
        answer: "Queue",
        correct: false
      },

      {
        question:
          "Which is an advantage of data structure",
        answer: "Efficiency",
        correct: true
      },

      {
        question:
          "All except one is not an advantage of data structure in computing",
        answer: "Data Auditing",
        correct: true
      },

      {
        question:
          "Which of these is not a data Structure",
        answer: "Hierarchical Structure",
        correct: true
      },

      {
        question:
          "Which of the following data structures operates explicitly on a Last-In, First-Out (LIFO) operational mechanism",
        answer: "Stack",
        correct: true
      }
    ]
  }

  return (
    <main className="results-page">

      <header className="results-header">
        

        <h1>Results</h1>
      </header>

      <section className="results-content">

        {/* Rankings */}
        <section className="rankings">
          {resultsData.players.map((player) => (
            <RankingRow
              key={player.rank}
              {...player}
            />
          ))}
        </section>

        {/* Actions */}
        <div className="results-actions">

          <button
            className="results-button rematch"
            onClick={() => navigate("/match-room")}
          >
            ↻ Rematch
          </button>

          <div className="secondary-results-actions">

            <button
              className="results-button secondary"
              onClick={() => navigate("/leaderboard")}
            >
              Leaderboard
            </button>

            <button
              className="results-button secondary"
              onClick={() => navigate("/")}
            >
              Dashboard
            </button>

          </div>

        </div>

        {/* Answers */}
        <section className="answers-section">

          <div className="answers-title">
            <h2>Answers</h2>

            <span className="answers-score">
              {resultsData.score.correct}/
              {resultsData.score.total} Correct
            </span>
          </div>

          {resultsData.answers.map((answer, index) => (
            <AnswerReview
              key={index}
              {...answer}
            />
          ))}

        </section>

      </section>

    </main>
  )
}

export default Results