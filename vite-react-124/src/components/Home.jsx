import { auth } from "../firebase";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";

const Home = (props) => {
    const { user } = props;
    const history = useNavigate();


    const handleSignOut = async () => {
        await auth.signOut();
        history.push('/login');
    }

    return (
        <div>
            {user ? <button onClick={handleSignOut}>
                Logout
            </button> : <Link to='/login'>Login</Link>}
        </div>
    )
}

export default Home