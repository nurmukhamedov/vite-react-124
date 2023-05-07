import { useState } from "react"
import firebase from '../firebase'
import { Link } from 'react-router-dom'
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email && !password && !confirmPassword) {
            setError('Iltimos barchasini toldiring')
            return;
        }
        if (password !== confirmPassword) {
            setError('confirm Parol mos kelmadi')
            return
        }
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error)
        }
        setEmail('');
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <>
            <h2>Register</h2>
            {error}
            <form onSubmit={handleSubmit}>
                <label>
                    Email: <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label> Confirm Password
                    <input type="password" value={confirmPassword} placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <Link to='/login'>Accoutingiz bormi? bosing</Link>
        </>

    )
}

export default Register