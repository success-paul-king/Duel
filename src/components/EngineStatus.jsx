import { Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
function EngineStatus() {
  const navigate = useNavigate();
  return (
    <section className="engine-status">
      <div className="engine-title">
        <Cpu className="engine-icon" size={18} />
        <h2>Engine Status</h2>
      </div>

      <div className="file-status">
        <span>Data_structure.PDF</span>
        <span className="status ready">Ready</span>
      </div>

      <div className="file-status">
        <span>Macro_Economics.PDF</span>
        <span className="status parsing">Parsing...</span>
      </div>

      <button className="new-game-button" onClick={() => navigate("/new-game")}>
        New Game →
      </button>
    </section>
  );
}

export default EngineStatus;
