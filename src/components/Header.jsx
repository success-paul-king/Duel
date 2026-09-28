import { useState } from "react"
import {
  MoreVertical,
  UserCircle,
  X,
  Trophy,
  Sun,
  Info,
  LogOut
} from "lucide-react"

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

          <button>
  <Trophy size={16} />
  <span>Leaderboard</span>
</button>

<button>
  <Sun size={16} />
  <span>Toggle Modes</span>
</button>

<button>
  <Info size={16} />
  <span>About</span>
</button>

<button>
  <LogOut size={16} />
  <span>Log Out</span>
</button>
        </div>
      )}
    </header>
  )
}

export default Header