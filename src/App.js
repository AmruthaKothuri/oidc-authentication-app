import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      {!isAuthenticated ? (
        <div className="login-container">
          <h1>Welcome to DevMinds SPA</h1>
          <p>Please log in to view your profile.</p>
          <button className="btn" onClick={loginWithRedirect}>
            Log In
          </button>
        </div>
      ) : (
        <div className="profile-container">
          <h1>Welcome, {user.name}!</h1>
          {user.picture && (
            <img
              src={user.picture}
              alt="Profile"
              className="profile-picture"
            />
          )}
          <p>Email: {user.email}</p>
          {user.nickname && <p>Nickname: {user.nickname}</p>}

          

          <button
            className="btn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
