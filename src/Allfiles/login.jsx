import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
              
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('loginTime', Date.now().toString());

                setEmail('');
                setPassword('');
                setMessage('Login successful');
                
                navigate('/admin');
            } else {
                console.error("Login failed:", data.message);
                setMessage(data.message || "An error occurred during login");
            }
        } catch (err) {
            console.error("Error during login:", err);
            setMessage("An error occurred during login");
        }
    };

    return (
        <div className='login-form'>
            <div className="container">
                <div className='login-form-section'>
                    <div className="form-section">
                        <div className='form-input'>
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className='form-input'>
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <button className='btnn' onClick={handleLogin}>Login</button>
                        {message && <p style={{ color: 'red' }}>{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
