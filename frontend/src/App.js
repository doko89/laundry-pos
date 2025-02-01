import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting login request...');
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log('Response:', data);
      setMessage(data.message);
    } catch (error) {
      try {
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error:', errorData);
          setMessage(errorData.message || 'Error logging in');
        } else {
          const data = await response.json();
          console.log('Response:', data);
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Error logging in');
      }
    }
  };

  return (
    <div className="App">
      <h1>Laundry POS Application</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;