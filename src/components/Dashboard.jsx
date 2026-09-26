import DocumentParser from "./DocumentParser"
import EngineStatus from "./EngineStatus"

function Dashboard() {
  return (
    <main className="dashboard">
      <section className="welcome">
        <h1>Welcome back, John!</h1>
        <p>Upload your study materials to automatically train the AI Engine.</p>
      </section>

      <DocumentParser />

      <EngineStatus />
    </main>
  )
}

export default Dashboard