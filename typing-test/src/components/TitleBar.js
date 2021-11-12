import React from 'react'
import '../stylesheets/TitleBar.css'
import { MdRemove, MdCropSquare, MdClose } from 'react-icons/md'

const TitleBar = ({openSignIn}) => {
    return (
        <div>
            <header className="titlebar">
                <div className="drag-region">

                    <div className="window-controls">
                        <div onClick={openSignIn} className="login-button">
                            Login
                        </div>

                        <div id="min-button" className="button">
                            <MdRemove />
                        </div>

                        <div id="max-button" className="button">
                            <MdCropSquare />
                        </div>

                        <div id="close-button" className="close">
                            <MdClose />
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default TitleBar
