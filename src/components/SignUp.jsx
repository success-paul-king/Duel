import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="signup-page">
      <div className="signup-container">
        {/* Logo */}
        <div className="signup-logo">DI</div>

        {/* Heading */}
        <section className="signup-heading">
          <h1>Create Your Duel.IO Account</h1>
          <p>Join the community and start playing</p>
        </section>

        {/* Form */}
        <form className="signup-form">
          <div className="name-row">
            <div className="form-group">
              <label>FIRST NAME</label>

              <div className="input-wrapper">
                <User size={20} />
                <input type="text" placeholder="First name" />
              </div>
            </div>

            <div className="form-group">
              <label>SURNAME</label>

              <div className="input-wrapper">
                <User size={20} />
                <input type="text" placeholder="Surname" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>USERNAME</label>

            <div className="input-wrapper">
              <User size={20} />
              <input type="text" placeholder="Username" />
            </div>
          </div>

          <div className="form-group">
            <label>EMAIL</label>

            <div className="input-wrapper">
              <Mail size={20} />
              <input type="email" placeholder="Email Address" />
            </div>
          </div>

          <div className="form-group">
            <label>PASSWORD</label>

            <div className="input-wrapper">
              <Lock size={20} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>CONFIRM PASSWORD</label>

            <div className="input-wrapper">
              <Lock size={20} />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="button" className="create-account-button">
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="signup-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        {/* Google */}
        <button className="google-signup-button">
          <svg className="google-icon" viewBox="0 0 24 24" aria-hidden="true">
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
          <span>Sign up with Google</span>
        </button>

        {/* Login */}
        <p className="login-text">
          Already have an account?
          <button className="login-link">Login</button>
        </p>
      </div>
    </main>
  );
}

export default SignUp;
