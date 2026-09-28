import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import NewGame from "./components/NewGame"

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

        <Route
          path="/new-game"
          element={<NewGame />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App