import React from 'react'
import '../stylesheets/Account.css'
import SingleStatDisplay from './SingleStatDisplay'
import StatKeyboard from './StatKeyboard'

const Account = (props) => {
    return (
        <div>
            <div className="acc-id">
                Account Statistics
            </div>
            <div className="stat-container">

                <div className="stats-wing" >
                    <SingleStatDisplay title="Top WPM" data="105" />
                    <SingleStatDisplay title="Avg WPM" data="93" />
                </div>
                <StatKeyboard missedKeys={props.missedKeys} />
                <div className="stats-wing">
                    <SingleStatDisplay title="Most Missed" data="E" />
                    <SingleStatDisplay title="Least Missed" data="Q" />
                </div>
            </div>
        </div>
    )
}

export default Account
