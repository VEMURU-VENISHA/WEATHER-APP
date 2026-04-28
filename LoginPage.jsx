import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8007/users/login', {
                username,
                password
            });

            if (response.data === "Login Successful") {
                setLoginError('');
                navigate("/ThirdPage");
            } else {
                setLoginError("Invalid username or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoginError("Server error or invalid credentials");
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(Qi9AFY.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}
        >
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="un"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        name="pw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
                <br />
                <button onClick={handleLogin} style={{ marginBottom: '10px' }}>Login</button>
                <div>
                    <Link to="/ThirdPage" style={{ color: 'white', textDecoration: 'none' }}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
