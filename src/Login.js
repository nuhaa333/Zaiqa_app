import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './menu.css'; // Importing external CSS for styling

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/user', { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleGoogleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  // Redirect to the home page if the user is logged in
  if (user) {
    window.location.href = '/';
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login Page</h1>
        {user ? (
          <div className="profile-info">
            <h2>Welcome, {user.displayName}</h2>
            <img
              src={user.photos[0].value}
              alt="profile"
              className="profile-image"
            />
          </div>
        ) : (
          <div>
            <p>Login to continue</p>
            <button onClick={handleGoogleLogin} className="google-login-btn">
              Login with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
