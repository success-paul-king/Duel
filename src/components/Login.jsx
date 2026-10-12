import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="login-page">
      <div className="login-container">

        <div className="login-logo">
          DI
        </div>

        <section className="login-heading">
          <h1>Welcome Back, Scholar</h1>
        </section>

        <form className="login-form">

          <div className="form-group">
            <label>EMAIL</label>

            <div className="login-input-wrapper">
              <Mail size={21} />

              <input
                type="email"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="form-group">

            <div className="password-label">
              <label>PASSWORD</label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot Password?
              </button>
            </div>

            <div className="login-input-wrapper">
              <Lock size={21} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>

          </div>

          <button
            type="button"
            className="login-button"
          >
            Login
          </button>

        </form>

        <div className="login-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <button
          type="button"
          className="google-login-button"
        >
          <svg
            className="google-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M21.35 12.27c0-.78-.07-1.53-.2-2.25H12v4.26h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.92-4.18 2.92-7.38z"
            />

            <path
              fill="#34A853"
              d="M12 21.99c2.63 0 4.84-.87 6.45-2.34l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.75 9.75 0 0 0 12 21.99z"
            />

            <path
              fill="#FBBC05"
              d="M6.54 14.1A5.86 5.86 0 0 1 6.23 12c0-.73.13-1.44.31-2.1V7.38H3.3A9.99 9.99 0 0 0 2.25 12c0 1.61.39 3.13 1.05 4.62l3.24-2.52z"
            />

            <path
              fill="#EA4335"
              d="M12 5.87c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 2.96 14.63 2 12 2a9.75 9.75 0 0 0-8.7 5.38l3.24 2.52C7.31 7.59 9.46 5.87 12 5.87z"
            />
          </svg>

          <span>Login with Google</span>
        </button>

        <p className="signup-prompt">
          New to the arena?
          <button
            type="button"
            className="signup-link"
          >
            Sign Up
          </button>
        </p>

      </div>
    </main>
  )
}

export default Login