import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import { auth } from "../firebase";

const Router = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
        return unsubscribe;
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={user ? <Navigate to='/about' /> : <Login />} />
                <Route path='/about' element={user ? <About /> : <Navigate to="/login" />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router