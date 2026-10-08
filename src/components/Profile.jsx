import {
  Share2,
  SquarePen,
  TrendingUp,
  Target,
  Bookmark,
  ChevronDown,
  UserCircle,
} from "lucide-react";

function Profile() {
  const recentDuels = [
    { opponent: "Xavier", winRate: "48%" },
    { opponent: "Xavier", winRate: "48%" },
    { opponent: "Xavier", winRate: "48%" },
    { opponent: "Xavier", winRate: "48%" },
  ];

  const progressData = [25, 18, 22, 38, 58, 52, 30];

  return (
    <main className="profile-page">
      {/* Profile Header */}
      <section className="profile-hero">
        <div className="profile-brand">
          <span className="profile-logo">DI</span>
          <span>DUEL.IO</span>
        </div>

        <div className="profile-actions">
          <button aria-label="Share profile">
            <Share2 size={20} />
          </button>

          <button aria-label="Edit profile">
            <SquarePen size={20} />
          </button>
        </div>

        <div className="profile-avatar">
          <UserCircle size={72} />
        </div>
      </section>

      {/* Profile Identity */}
      <div className="profile-name">
        <h1>John Doe</h1>
      </div>

      <section className="profile-identity">
        <p>@johndoe123</p>
      </section>

      {/* Overview */}
      <section className="profile-section overview-section">
        <h2>OVERVIEW</h2>

        <div className="overview-grid">
          <div className="overview-stat">
            <TrendingUp size={21} />
            <strong>1445 XP</strong>
          </div>

          <div className="overview-stat">
            <Target size={21} />
            <strong>62% Win Rate</strong>
          </div>

          <div className="overview-stat">
            <Bookmark size={21} />
            <strong>142 Matches</strong>
          </div>
        </div>
      </section>

      {/* Recent Duel Log */}
      <section className="profile-section duel-log-section">
        <h2>RECENT DUEL LOG</h2>

        <div className="duel-log">
          {recentDuels.map((duel, index) => (
            <div className="duel-log-row" key={index}>
              <div className="duel-avatar">
                <span>OX</span>
              </div>

              <span className="duel-opponent">{duel.opponent}</span>

              <span className="duel-win-rate">{duel.winRate}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Progress */}
      <section className="profile-chart-card">
        <div className="chart-header">
          <h2>PROGRESS</h2>

          <button>
            This Year
            <ChevronDown size={13} />
          </button>
        </div>

        <div className="progress-chart">
          <div className="chart-y-axis">
            <span>60</span>
            <span>20</span>
            <span>-20</span>
            <span>-60</span>
          </div>

          <div className="chart-area">
            <div className="chart-grid">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <svg
              className="progress-line"
              viewBox="0 0 300 120"
              preserveAspectRatio="none"
            >
              <polyline
                points="0,58 50,67 100,62 150,42 200,18 250,28 300,52"
                fill="none"
                stroke="#818CF8"
                strokeWidth="2"
              />

              {progressData.map((_, index) => {
                const points = [
                  [0, 58],
                  [50, 67],
                  [100, 62],
                  [150, 42],
                  [200, 18],
                  [250, 28],
                  [300, 52],
                ];

                return (
                  <circle
                    key={index}
                    cx={points[index][0]}
                    cy={points[index][1]}
                    r="2.5"
                    fill="#818CF8"
                  />
                );
              })}
            </svg>

            <div className="chart-months">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>
      </section>

      {/* Win Rate */}
      <section className="profile-chart-card win-rate-card">
        <div className="chart-header">
          <h2>WIN RATE</h2>

          <button>
            This Week
            <ChevronDown size={13} />
          </button>
        </div>

        <div className="win-rate-content">
          <div className="donut-chart">
            <div className="donut-hole"></div>
          </div>

          <div className="win-rate-legend">
            <div>
              <span className="legend-dot win"></span>
              <span>Win</span>
            </div>

            <div>
              <span className="legend-dot lose"></span>
              <span>Lose</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
