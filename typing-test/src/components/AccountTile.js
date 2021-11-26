import React from 'react'
import '../stylesheets/AccountTile.css'
import { MdAccountBox, MdRemoveRedEye } from 'react-icons/md'

const AccountTile = ({ logout }) => {
    return (
        <div className="base">
            <div className="account-photo">
                <MdAccountBox className="account-icon" />
            </div>
            <div className="account-info">
                <div className="acc-name">Sergeant Buttface</div>
                <div className="acc-email">
                    Email: buttface@gmail.com
                    </div>
                <div className="acc-email">
                    <div>Password: ****</div>
                    <MdRemoveRedEye />
                </div>
            </div>
            <div>
                <div onClick={logout} className="logout">
                    Logout
                </div>
            </div>
        </div>
    )
}

export default AccountTile
