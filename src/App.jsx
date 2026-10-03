import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewGame from "./components/NewGame";
import Lobby from "./components/Lobby";
import MatchRoom from "./components/MatchRoom";
import LiveDuel from "./components/LiveDuel";
import Results from "./components/Results";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Dashboard />
            </>
          }
        />

        <Route path="/new-game" element={<NewGame />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/match-room" element={<MatchRoom />} />
        <Route path="/live-duel" element={<LiveDuel />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
