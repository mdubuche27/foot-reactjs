import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <Link to="/clubs">Clubs</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home