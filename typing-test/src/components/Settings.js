import React from 'react'
import '../stylesheets/Settings.css'
import ColoredLine from './ColoredLine'
import AccountTile from './AccountTile'
import SettingsLoginTile from './SettingsLoginTile'

const Settings = ({ loggedIn }) => {
    return (
        <div className="s-wrapper">

            <div className="s-title">
                Settings
            </div>
            <div className="s-line-spacing">
                <ColoredLine color="#5B5A99" />
            </div>
            {loggedIn ? <AccountTile /> : <SettingsLoginTile />}
            <div className="s-line-spacing">
                <ColoredLine color="#5B5A99" />
            </div>
            <div className="s-section">
                Some other settings
            </div>
        </div>
    )
}

export default Settings
