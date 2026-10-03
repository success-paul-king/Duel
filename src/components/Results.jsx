import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  return (
    <main className="results-page">
      <header className="results-header">
        <button
          className="back-button"
          onClick={() => navigate("/live-duel")}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1>Results</h1>
      </header>

      <section className="results-content">
        {/* Rankings */}
        <section className="rankings">
          <div className="ranking-row">
            <span className="rank">1.</span>
            <span className="rank-name">Calum</span>
            <span className="rank-xp">+50XP</span>
            <span className="rank-points">760 pts</span>
          </div>

          <div className="ranking-row current-player">
            <span className="rank">2.</span>
            <span className="rank-name">John</span>
            <span className="rank-xp">+45XP</span>
            <span className="rank-points">700 pts</span>
          </div>

          <div className="ranking-row">
            <span className="rank">3.</span>
            <span className="rank-name">Xavier</span>
            <span className="rank-xp">+40XP</span>
            <span className="rank-points">680 pts</span>
          </div>

          <div className="ranking-row">
            <span className="rank">4.</span>
            <span className="rank-name">Masha</span>
            <span className="rank-xp">+20XP</span>
            <span className="rank-points">670 pts</span>
          </div>
        </section>

        {/* Action Buttons */}
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
            <span className="answers-score">12/15 Correct</span>
          </div>

          <div className="answer-review correct">
            <div className="review-question">
              <strong>Question</strong>
              <span>Which of these is not a Data Structure</span>
            </div>

            <div className="review-answer">
              <CheckCircle size={13} />
              <strong>Ans</strong>
              <span>Hierarchical Structure</span>
            </div>
          </div>

          <div className="answer-review correct">
            <div className="review-question">
              <strong>Question</strong>
              <span>
                Which of the following data structures operates explicitly on a
                Last-In, First-Out (LIFO) operational mechanism
              </span>
            </div>

            <div className="review-answer">
              <CheckCircle size={13} />
              <strong>Ans</strong>
              <span>Stack</span>
            </div>
          </div>

          <div className="answer-review wrong">
            <div className="review-question">
              <strong>Question</strong>
              <span>
                Which of the following data structures operates explicitly on a
                First-In, First-Out (FIFO) operational mechanism
              </span>
            </div>

            <div className="review-answer">
              <XCircle size={13} />
              <strong>Ans</strong>
              <span>Queue</span>
            </div>
          </div>
          <div className="answer-review correct">
            <div className="review-question">
              <strong>Question</strong>
              <span>Which is an advantage of data structure</span>
            </div>

            <div className="review-answer">
              <CheckCircle size={13} />
              <strong>Ans</strong>
              <span>Efficiency</span>
            </div>
          </div>

          <div className="answer-review correct">
            <div className="review-question">
              <strong>Question</strong>
              <span>
                All except one is not an advantage of data structure in
                computing
              </span>
            </div>

            <div className="review-answer">
              <CheckCircle size={13} />
              <strong>Ans</strong>
              <span>Data Auditing</span>
            </div>
          </div>

          <div className="answer-review correct">
            <div className="review-question">
              <strong>Question</strong>
              <span>Which of these is not a data Structure</span>
            </div>

            <div className="review-answer">
              <CheckCircle size={13} />
              <strong>Ans</strong>
              <span>Hierarchical Structure</span>
            </div>
          </div>

          <div className="answer-review correct">
            <div className="review-question">
              <strong>Question</strong>
              <span>
                Which of the following data structures operates explicitly on a
                Last-In, First-Out (LIFO) operational mechanism
              </span>
            </div>

            <div className="review-answer">
              <CheckCircle size={13} />
              <strong>Ans</strong>
              <span>Stack</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Results;
