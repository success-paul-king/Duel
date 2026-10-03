function RankingRow({
  rank,
  name,
  xp,
  points,
  isCurrentUser = false
}) {
  return (
    <div
      className={`ranking-row ${
        isCurrentUser ? "current-player" : ""
      }`}
    >
      <span className="rank">
        {rank}.
      </span>

      <span className="rank-name">
        {name}
      </span>

      <span className="rank-xp">
        +{xp}XP
      </span>

      <span className="rank-points">
        {points} pts
      </span>
    </div>
  )
}

export default RankingRow