import React, { useState } from 'react';
import './menu.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithGoogle = () => {
    window.location.href = 'https://zaiqa-app-1.onrender.com/auth/google/callback';
  };

  const loginWithEmail = async () => {
    const res = await fetch('https://zaiqa-app-1.onrender.com', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      window.location.href = '/';
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-heading">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={loginWithEmail} className="login-button">
          Login
        </button>
        <div className="login-divider">OR</div>
        <button onClick={loginWithGoogle} className="google-button">
          Continue with Google
        </button>
        <p className="login-footer">
          Don't have an account? <a href="/register" className="login-link">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;



//nn
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './menu.css'; // Your CSS file

// function Login() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get('https://zaiqa-app-1.onrender.com/user', { withCredentials: true })
//       .then((res) => setUser(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleGoogleLogin = () => {
//     window.open('https://zaiqa-app-1.onrender.com/auth/google', '_self');
//   };

//   if (user) {
//     window.location.href = '/';
//   }

//   return (
//     <div class="login-container">
//   <h2>Login</h2>

//   <div class="input-group">
//     <span class="icon">@</span>
//     <input type="email" placeholder="Username" id="email" />
//   </div>

//   <div class="input-group">
//     <span class="icon">🔒</span>
//     <input type="password" placeholder="Password" id="password" />
//   </div>

//   <div class="button-group">
//     <button onclick="handleLogin()">Login</button>
//     <button onclick="handleSignup()">Sign Up</button>
//   </div>

//   <button class="forgot">Forgot Password</button>
//   <hr />
//   <button class="google-btn" onclick="handleGoogle()">Continue with Google</button>
// </div>

//   );
// }

// export default Login;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './menu.css'; // Importing external CSS for styling

// function Login() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get('https://zaiqa-app-1.onrender.com/user', { withCredentials: true })
//       .then((res) => setUser(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleGoogleLogin = () => {
//     // Use Render-deployed backend here too
//     window.open('https://zaiqa-app-1.onrender.com/auth/google', '_self');
//   };

//   // Redirect to the home page if the user is logged in
//   if (user) {
//     window.location.href = '/';
//   }

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <h1>Login Page</h1>
//         {user ? (
//           <div className="profile-info">
//             <h2>Welcome, {user.displayName}</h2>
//             <img
//               src={user.photos[0].value}
//               alt="profile"
//               className="profile-image"
//             />
//           </div>
//         ) : (
//           <div>
//             <p>Login to continue</p>
//             <button onClick={handleGoogleLogin} className="google-login-btn">
//               Login with Google
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
