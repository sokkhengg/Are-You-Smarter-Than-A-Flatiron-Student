import React from 'react'
import {Link} from "react-router-dom" 
function Header() {
    return (
        <div className="header">
        <Link to="/">
            <h1>
            Welcome to Quiz App
            </h1>
            <hr className="headerDivider"/>

        </Link>
        </div>
    )
}

export default Header
