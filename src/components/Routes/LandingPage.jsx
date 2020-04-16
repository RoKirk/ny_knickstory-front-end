import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaDribbble } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";



const LandingPage = () => {
    return (
        <div className="landing-page">

            <div className="welcome-page-nav">

                <span className="login-signUp-icons">
                    <Link to="/user_login"><FaDribbble /> <span className="welcome-page-links">User Login</span></Link>
                </span>
                <span className="login-signUp-icons">
                    <Link to="/user_sign_up"><FaUserEdit /> <span className="welcome-page-links">Sign Up</span></Link>
                </span>

            </div>

            <div className="landing-page-title">

                <h1 id="app-title">ny knickstory</h1>
                <Link to="/homepage"><span className="welcome-page-links">Enter Site</span></Link>

            </div>

        </div>

    )
}

export default LandingPage