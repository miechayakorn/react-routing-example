import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = ({location}) => {
    let history = useHistory()

    const signInFunction = () => {
        localStorage.setItem('auth', '111111111111111')
        if (location.search) {
            const redirect = location.search.split('?')[1]
            history.push(redirect)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInFunction}>Login</button>
        </div>
    )
}

export default Home


