import React from 'react'
import cat from './image/cat.jpg'

function Logo() {
    return (
        <div>
            <img className="photo" 
            src={cat} alt="cat logo" width="193" height="130" />
        </div>
    )
}

export default Logo
