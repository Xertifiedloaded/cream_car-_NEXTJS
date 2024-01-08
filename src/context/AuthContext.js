// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Make API request for signup
      const response = await axios.post('your_api/signup', { username, password });

      // Handle success (redirect or show a message)
      console.log(response.data);
    } catch (error) {
      // Handle error (show error message)
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;


// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make API request for login
      const response = await axios.post('your_api/login', { username, password });

      // Handle success (redirect or show a message)
      console.log(response.data);

      // Trigger the login function passed from the parent component (App.js)
      onLogin();
    } catch (error) {
      // Handle error (show error message)
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {/* Dashboard content */}
    </div>
  );
};

// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Update state to indicate user is logged in
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Route path="/signup" component={SignupForm} />
        <Route
          path="/login"
          render={() => (isLoggedIn ? <Redirect to="/dashboard" /> : <LoginForm onLogin={handleLogin} />)}
        />
        <Route path="/dashboard" render={() => (isLoggedIn ? <Dashboard /> : <Redirect to="/login" />)} />
      </div>
    </Router>
  );
};

