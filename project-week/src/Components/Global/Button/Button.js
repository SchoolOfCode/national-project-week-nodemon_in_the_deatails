import React from 'react'

export default function Button({handleClick}) {
    
    return (
        <div>
            <button type="button" onClick={handleClick}></button> 
        </div>
    )
}
