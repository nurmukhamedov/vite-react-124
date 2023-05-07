import { useState } from "react";
import firebase from '../firebase'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email && !password) {
            setError('Ma`lumot kiriting')
        } else {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                alert('successfully logged')
            } catch (error) {
                if (error.code === 'auth/user-not-found') {
                    setError('user topilmadi')
                } else if (error.code === 'auth/wrong-password') {
                    setError('Parol xato')
                } else {
                    setError(error.message)
                }
            }
        }
    }
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <h2>Login</h2>
            {error}
            <form onSubmit={handleLogin}>
                <label>
                    Email: <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password <input type={showPassword ? 'text' : 'password'} value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button onClick={togglePassword} type="button">{showPassword ? 'Hide' : 'Show'} password</button>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login