import { useState } from 'react';
import { useRouter } from 'next/router';

const Authorization = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showQuestion, setShowQuestion] = useState(true);
  const [answer, setAnswer] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your authentication logic here
    if (username === 'admin' && password === 'password') {
      // Redirect to the home page on successful login
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleAnswerQuestion = () => {
    if (answer === 'no') {
      window.location.href = 'https://www.nfactorial.school/'; 
    } else {
      setShowQuestion(false);
    }
  };

  return (
    <div>
      <h1>Authorization Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>

      {showQuestion && (
        <div>
          <h2>Question:</h2>
          <p>Был ли ты на инкубаторе?</p>
          <button onClick={() => setAnswer('yes')}>Yes</button>
          <button onClick={() => setAnswer('no')}>No</button>
          {answer === 'no' && (
            <p>перенаправляем в рай...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Authorization;
