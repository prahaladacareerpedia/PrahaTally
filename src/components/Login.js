import React from 'react';
import './Login.css'; // Import the corresponding CSS file
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim(); // Trim spaces
    const password = e.target.password.value.trim(); // Trim spaces

    if (email === 'prahalada123@gmail.com' && password === 'Praha123@') {
      navigate('/buttons');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="brand-logo"></div>
      <div className="brand-title">LOGIN FORM</div>
      <form className="inputs" onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input type="email" name="email" placeholder="example@test.com" required />
        <label>PASSWORD</label>
        <input type="password" name="password" placeholder="Min 6 Character" required />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
