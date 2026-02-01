import React, { useState } from "react";

export default function LoginApp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setSubmitted(false);
      return;
    }

    if (username === "user" && password === "password") {
      setError("");
      setSubmitted(true);
    } else {
      setError("Invalid username or password");
      setSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {submitted ? (
        <div>Welcome, user</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}

          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
