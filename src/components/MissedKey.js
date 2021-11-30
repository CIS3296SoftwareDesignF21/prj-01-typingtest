import React from 'react'
import '../stylesheets/MissedKey.css'

const MissedKey = ({letter_misses}) => {
    return (
        <div className="mk-base">
            <div>Times Missed</div>
            <div>{letter_misses}</div>
        </div>
    )
}

export default MissedKey
