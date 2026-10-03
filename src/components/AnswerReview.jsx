import { CheckCircle, XCircle } from "lucide-react"

function AnswerReview({
  question,
  answer,
  correct
}) {
  return (
    <div
      className={`answer-review ${
        correct ? "correct" : "wrong"
      }`}
    >
      <div className="review-question">
        <strong>Question</strong>

        <span>{question}</span>
      </div>

      <div className="review-answer">
        {correct ? (
          <CheckCircle size={13} />
        ) : (
          <XCircle size={13} />
        )}

        <strong>Ans</strong>

        <span>{answer}</span>
      </div>
    </div>
  )
}

export default AnswerReview