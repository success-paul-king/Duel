function EngineStatus() {
  return (
    <section className="engine-status">
      <div className="engine-title">
        <span className="engine-icon">⚙</span>
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

      <button className="new-game-button">
        New Game →
      </button>
    </section>
  )
}

export default EngineStatus