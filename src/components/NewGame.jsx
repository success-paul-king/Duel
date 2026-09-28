import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, Shield, KeyRound, Brain } from "lucide-react";
function NewGame() {
  const navigate = useNavigate();
  return (
    <main className="new-game-page">
      <header className="new-game-header">
        <button
          className="back-button"
          onClick={() => navigate("/")}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1>New Game</h1>
      </header>

      <section className="game-options">
        {/* Auto-Pairing Duel */}
        <div className="game-card">
          <div className="game-icon amber">
            <Zap size={17} />
          </div>

          <h2>Auto-Pairing Duel</h2>

          <p>
            Get paired instantly with another student studying similar material
          </p>

          <div className="card-divider"></div>

          <button className="game-button cyan">Start Random Duel</button>
        </div>

        {/* Create Private Lobby */}
        <div className="game-card">
          <div className="game-icon cyan-icon">
            <Shield size={17} />
          </div>

          <h2>Create Private Lobby</h2>

          <p>Generate a unique code to challenge a friend or peer</p>

          <div className="card-divider"></div>

          <button
            className="game-button dark"
            onClick={() => navigate("/lobby")}
          >
            Create Room +
          </button>
        </div>

        {/* Join Lobby */}
        <div className="game-card">
          <div className="game-icon cyan-icon">
            <KeyRound size={17} />
          </div>

          <h2>Join Lobby</h2>

          <p>Enter Room code shared by your peer</p>

          <div className="card-divider"></div>

          <div className="join-row">
            <input type="text" placeholder="ENTER ROOM CODE" />

            <button className="join-button">Join</button>
          </div>
        </div>

        {/* Solo Practice Duel */}
        <div className="game-card">
          <div className="game-icon slate-icon">
            <Brain size={17} />
          </div>

          <h2>Solo Practice Duel</h2>

          <p>Test your knowledge based on documents you selected</p>

          <div className="card-divider"></div>

          <button className="game-button light">Start Practice</button>
        </div>
      </section>
    </main>
  );
}

export default NewGame;
