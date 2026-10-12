import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewGame from "./components/NewGame";
import Lobby from "./components/Lobby";
import MatchRoom from "./components/MatchRoom";
import LiveDuel from "./components/LiveDuel";
import Results from "./components/Results";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import NoInternet from "./components/NoInternet";
import MatchRoomError from "./components/MatchRoomError";
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
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/error-message" element={<ErrorMessage />} />
        <Route path="/no-internet" element={<NoInternet />} />
        <Route path="/match-room-error" element={<MatchRoomError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
