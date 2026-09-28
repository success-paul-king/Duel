import { useState } from "react"
import { MoreVertical, UserCircle, X } from "lucide-react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">DI</span>
        <span>DUEL.IO</span>
      </div>

      <div className="header-right">
        <span className="xp-badge">⭐ 1,420 XP</span>

        <UserCircle className="avatar" size={20} />

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      {menuOpen && (
        <div className="menu-panel">
          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={16} />
          </button>

          <button>Leaderboard</button>
          <button>Toggle Modes</button>
          <button>About</button>
          <button>Log Out</button>
        </div>
      )}
    </header>
  )
}

export default Header