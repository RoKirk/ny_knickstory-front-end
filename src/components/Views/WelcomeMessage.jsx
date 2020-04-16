import React from 'react'
import statue from '../../assets/nyk-statue-of-liberty.jpg'

const WelcomeMessage = () => {
    return (
        <div>
            <h1>Welcome to the Garden of the Big Apple</h1>
            <img src={statue}></img>
        </div>
    )
}

export default WelcomeMessage
