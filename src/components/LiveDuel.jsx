import { useState } from "react"
import { CheckCircle, Circle } from "lucide-react"
import { useNavigate } from "react-router-dom"

function LiveDuel() {
  const navigate = useNavigate()
  const [selectedAnswer, setSelectedAnswer] = useState("Stack")

  const answers = [
    "Queue",
    "Stack",
    "Heap",
    "Binary Tree"
  ]

  return (
    <main className="live-duel-page">

      <header className="live-duel-header">
        <span className="question-progress">40%</span>

        <span className="xp-gain">+5XP</span>
      </header>

      <section className="live-duel-content">

        <div className="duel-progress">
          <div className="duel-progress-fill"></div>
        </div>

        <div className="timer-card">
          <span>TIME LEFT</span>
          <strong>⏱ 14s</strong>
        </div>

        <section className="question-card">

          <p className="question-text">
            Which of the following data structures operates
            explicitly on a Last-In, First-Out (LIFO)
            operational mechanism
          </p>

          <div className="answer-options">
            {answers.map((answer) => {
              const isSelected = selectedAnswer === answer

              return (
                <button
                  key={answer}
                  className={`answer-option ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => setSelectedAnswer(answer)}
                >
                  <span>{answer}</span>

                  {isSelected ? (
                    <CheckCircle size={17} />
                  ) : (
                    <Circle size={16} />
                  )}
                </button>
              )
            })}
          </div>

          <button
            className="submit-answer-button"
            onClick={() => navigate("/results")}
          >
            SUBMIT ANSWER
          </button>

        </section>

      </section>

    </main>
  )
}

export default LiveDuel