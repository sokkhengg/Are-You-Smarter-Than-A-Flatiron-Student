import React from 'react'
import quiz from './quiz.jpg'

function Logo() {
    return (
        <div>
            <img className="photo" 
            src={quiz} alt="cat logo" width="270" height="130" />
        </div>
    )
}

export default Logo
